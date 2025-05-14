# 📝 To-Do List with Priority Tags

A full-stack To-Do List application built with **FastAPI** (Python) as the backend and **Next.js** (React) as the frontend. Tasks include a `title`, `completed` status, `priority` (Low/Medium/High), and customizable `tags`. You can add, edit, delete, and filter tasks by priority or tags.

---

## 🔧 Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: FastAPI (Python)
- **Communication**: REST API
- **Styling**: Tailwind CSS

---

## 📁 Project Structure

todo/
├── backend/ # FastAPI backend
│ ├── main.py
│ └── ...
├── frontend/ # Next.js frontend
│ ├── pages/
│ ├── components/
│ └── ...
└── README.md


---

## 🚀 Features

- ✅ Add, edit, and delete tasks
- ✅ Set task priority: Low, Medium, High
- ✅ Tag tasks with custom tags
- ✅ Filter by priority or tags
- ✅ Priority color codes (Red = High, Yellow = Medium, Green = Low)
- ✅ Fully responsive and styled with Tailwind CSS

---

## ⚙️ Environment Setup

Make sure you have these installed:

- **Node.js** (v16+)
- **Python** (v3.9+)
- **pip** (Python package manager)
- **Git**

---

## 🐍 Backend Setup (FastAPI)

1. Navigate to the `backend` folder:

    ```bash
    cd backend
    ```

2. Create and activate a virtual environment (optional but recommended):

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3. Install dependencies:

    ```bash
    pip install fastapi uvicorn pydantic
    ```

4. Run the FastAPI server:

    ```bash
    uvicorn main:app --reload
    ```

5. The API will be available at:  
    📍 `http://localhost:8000/tasks`  
    Docs: `http://localhost:8000/docs`

---

## 🌐 Frontend Setup (Next.js)

1. Open a new terminal and navigate to the `frontend` folder:

    ```bash
    cd frontend
    ```

2. Install Node dependencies:

    ```bash
    npm install
    ```

3. Start the Next.js development server:

    ```bash
    npm run dev
    ```

4. Visit the frontend at:  
    🌐 `http://localhost:3000`

---

## 🧪 API Endpoints

| Method | Endpoint              | Description         |
|--------|-----------------------|---------------------|
| GET    | `/tasks`              | Get all tasks       |
| POST   | `/tasks`              | Create a new task   |
| PATCH  | `/tasks/{id}`         | Update a task       |
| DELETE | `/tasks/{id}`         | Delete a task       |

---

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/3f08b77a-bcfc-4e5d-b912-bbb04d3d4bcf)


---

## 📦 Future Improvements

- User authentication (login/signup)
- Task deadlines and reminders
- Drag-and-drop task reordering
- Pagination and search

---

## 👨‍💻 Author

[**Devilthelegend**](https://github.com/Devilthelegend)

---

## 📄 License

This project is licensed under the MIT License.

