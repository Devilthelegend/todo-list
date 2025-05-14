import { useState, useEffect } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [tags, setTags] = useState("");
  const [filterPriority, setFilterPriority] = useState("");
  const [filterTag, setFilterTag] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:8000/tasks");
      if (!res.ok) throw new Error("Failed to fetch tasks");
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error("Fetch error:", err.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async () => {
    const task = {
      title,
      completed: false,
      priority,
      tags: tags.split(",").map(tag => tag.trim()),
    };

    const res = await fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });

    if (res.ok) {
      setTitle("");
      setTags("");
      setPriority("Low");
      fetchTasks();
    }
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, { method: "DELETE" });
    fetchTasks();
  };

  const priorityColor = {
    High: "text-red-600 font-bold",
    Medium: "text-yellow-500",
    Low: "text-green-500",
  };

  const filteredTasks = tasks.filter(task => {
    const matchPriority = filterPriority ? task.priority === filterPriority : true;
    const matchTag = filterTag ? task.tags.includes(filterTag) : true;
    return matchPriority && matchTag;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">To-Do List with Priority & Tags</h1>

        {/* Add Task Form */}
        <div className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <input
            type="text"
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="border p-2 rounded"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Task
          </button>
        </div>

        {/* Filters */}
        <div className="flex justify-between items-center mb-4 gap-4">
          <select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
            className="border p-2 rounded w-full"
          >
            <option value="">All Priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <input
            type="text"
            placeholder="Filter by tag"
            value={filterTag}
            onChange={(e) => setFilterTag(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Task List */}
        <ul className="divide-y divide-gray-300">
          {filteredTasks.map((task) => (
            <li key={task.id} className="py-4 flex justify-between items-center">
              <div>
                <p className="text-lg font-medium">{task.title}</p>
                <p className={`text-sm ${priorityColor[task.priority]}`}>{task.priority}</p>
                <p className="text-sm text-gray-500">Tags: {task.tags.join(", ")}</p>
              </div>
              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
