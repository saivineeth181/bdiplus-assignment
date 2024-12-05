import React, { useState, useEffect } from "react";
import axios from "axios";

function TaskDetails({ selectedTask, setSelectedTask, refreshTaskList }) {
    const [task, setTask] = useState({ title: "", description: "", status: "pending" });

    // Update local state when the selectedTask prop changes
    useEffect(() => {
        if (selectedTask.id) {
           // Call GET API for update
            axios
                .get(`http://localhost:8000/tasks/${selectedTask.id}`)
                .then((response) => {
                    setTask(response.data); // Refresh task list after update
                })
                .catch((err) => console.error(err));
        } else {
            setTask({ title: "", description: "", status: "pending" }); // Reset form for new task
        }
    }, [selectedTask]);

    const handleSave = () => {
        if (task.id) {
            // Call PUT API for update
            axios
                .put(`http://localhost:8000/tasks/${task.id}`, task)
                .then(() => {
                    alert("Task updated successfully");
                    refreshTaskList(); // Refresh task list after update
                })
                .catch((err) => console.error(err));
        } else {
            // Call POST API for new task creation
            axios
                .post("http://localhost:8000/tasks/", task)
                .then(() => {
                    alert("Task created successfully");
                    refreshTaskList(); // Refresh task list after creation
                    setSelectedTask(null); // Clear task details form
                })
                .catch((err) => console.error(err));
        }
    };

    const handleDelete = () => {
        if (task.id) {
            axios
                .delete(`http://localhost:8000/tasks/${task.id}`)
                .then(() => {
                    alert("Task deleted successfully");
                    refreshTaskList(); // Refresh task list after deletion
                    setSelectedTask(null); // Clear task details form
                })
                .catch((err) => console.error(err));
        } else {
            alert("No task to delete");
        }
    };

    return (
        <div>
            <h4>{task.id ? "Edit Task" : "Add New Task"}</h4>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                    type="text"
                    className="form-control"
                    value={task.title}
                    onChange={(e) => setTask({ ...task, title: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                    className="form-control"
                    rows="3"
                    value={task.description}
                    onChange={(e) => setTask({ ...task, description: e.target.value })}
                ></textarea>
            </div>
            <div className="mb-3">
                <label className="form-label">Status</label>
                <select
                    className="form-select"
                    value={task.status}
                    onChange={(e) => setTask({ ...task, status: e.target.value })}
                >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div className="d-flex justify-content-end">
                {task.id && (
                    <button
                        className="btn btn-danger me-2"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                )}
                <button
                    className="btn btn-success"
                    onClick={handleSave}
                >
                    {task.id ? "Update Task" : "Add Task"}
                </button>
            </div>
        </div>
    );
}

export default TaskDetails;

