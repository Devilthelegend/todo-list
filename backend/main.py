from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend on localhost
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000","http://192.168.1.39:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Base model for task creation/updating (no ID here)
class TaskCreate(BaseModel):
    title: str
    completed: bool = False
    priority: str
    tags: List[str] = []

# Full model includes ID
class Task(TaskCreate):
    id: int

tasks_db: List[Task] = []
task_id_counter = 1

@app.get("/tasks")
def get_tasks():
    return tasks_db

@app.post("/tasks")
def add_task(task: TaskCreate):
    global task_id_counter
    new_task = Task(id=task_id_counter, **task.dict())
    task_id_counter += 1
    tasks_db.append(new_task)
    return new_task

@app.patch("/tasks/{task_id}")
def update_task(task_id: int, updated: TaskCreate):
    for index, task in enumerate(tasks_db):
        if task.id == task_id:
            updated_task = Task(id=task_id, **updated.dict())
            tasks_db[index] = updated_task
            return updated_task
    raise HTTPException(status_code=404, detail="Task not found")

@app.delete("/tasks/{task_id}")
def delete_task(task_id: int):
    global tasks_db
    tasks_db = [task for task in tasks_db if task.id != task_id]
    return {"message": "Task deleted"}
