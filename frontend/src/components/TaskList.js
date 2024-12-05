import React, { useState, useEffect } from "react";
import axios from "axios";

function TaskList({ selectedTask, setSelectedTask }) {
    const [tasks, setTasks] = useState([]);

    // Fetch tasks from the API
    const fetchTasks = () => {
        axios
            .get("http://localhost:8000/tasks/")
            .then((response) => {
                setTasks(response.data);
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        fetchTasks();
    }, [selectedTask]);

    return (
        <ul className="list-group">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className="list-group-item list-group-item-action"
                    onClick={() => setSelectedTask(task)}
                >
                    <strong>{task.title}</strong>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
