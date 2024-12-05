import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskDetails from "./components/TaskDetails";

function App() {
    const [selectedTask, setSelectedTask] = useState(null);
    
    const refreshTaskList = () => {
        const taskListComponent = document.querySelector("TaskList");
        console.log(taskListComponent)
        if (taskListComponent) {
            console.log(taskListComponent)
            taskListComponent.fetchTasks();
        }
    };
    
    return (
        <div className="container-fluid vh-100">
            <div className="row h-100">
                {/* Left Panel: Task List */}
                <div className="col-md-3 bg-light border-end p-3">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5>Tasks</h5>
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() => setSelectedTask({})
                            } // Pass an empty object for adding a new task
                        >
                            Add New Task
                        </button>
                    </div>
                    <TaskList selectedTask={selectedTask} setSelectedTask={setSelectedTask} />
                </div>

                {/* Right Panel: Task Details */}
                <div className="col-md-9 p-3">
                    {selectedTask ? (
                        <TaskDetails
                            selectedTask={selectedTask}
                            setSelectedTask={setSelectedTask}
                            refreshTaskList={refreshTaskList}
                        />
                    ) : (
                        <div className="text-center mt-5">
                            <h4>Select a task to view details</h4>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;

