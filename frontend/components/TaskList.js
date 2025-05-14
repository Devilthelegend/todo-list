// components/TaskList.js
export default function TaskList({ tasks, onDelete, onFilter }) {
  const getColor = (priority) => {
    switch (priority) {
      case "High": return "text-red-600";
      case "Medium": return "text-yellow-600";
      default: return "text-green-600";
    }
  };

  return (
    <div className="mt-4 space-y-2">
      <div className="flex gap-4">
        <button onClick={() => onFilter("All")} className="px-2 py-1 bg-gray-200 rounded">All</button>
        <button onClick={() => onFilter("High")} className="px-2 py-1 bg-red-200 rounded">High</button>
        <button onClick={() => onFilter("Medium")} className="px-2 py-1 bg-yellow-200 rounded">Medium</button>
        <button onClick={() => onFilter("Low")} className="px-2 py-1 bg-green-200 rounded">Low</button>
      </div>

      {tasks.map((task) => (
        <div key={task.id} className="flex justify-between items-center border p-3 rounded shadow-sm bg-white">
          <div>
            <h2 className="text-lg font-medium">{task.title}</h2>
            <p className={getColor(task.priority)}>{task.priority}</p>
            <p className="text-sm text-gray-500">Tags: {task.tags.join(", ")}</p>
          </div>
          <button onClick={() => onDelete(task.id)} className="text-red-500 hover:text-red-700">Delete</button>
        </div>
      ))}
    </div>
  );
}
