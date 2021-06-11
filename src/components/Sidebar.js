import React from 'react';
import './Sidebar.css';

function Sidebar({ taskList }) {
    return (
        <div className="sidebar">
            <p>Current Use</p>
            <p>{taskList.length} {taskList.length === 1 ? 'Task' : "Tasks"}</p>
            <button>Delete All</button>
        </div>
    )
}

export default Sidebar
