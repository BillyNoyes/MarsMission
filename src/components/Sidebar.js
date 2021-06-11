import React from 'react';
import './Sidebar.css';
import { useDispatch } from 'react-redux';
import { deleteAll } from '../features/taskSlice';

function Sidebar({ taskList, username }) {
    const dispatch = useDispatch();
    
    // Deletes all the objects within the tasks array
    const handleDeleteAll = () => {
        dispatch(deleteAll());
    }

    return (
        <div className="sidebar">
            <p>Hey {username}</p>
            <p>{taskList.length} {taskList.length === 1 ? 'Task' : "Tasks"}</p>
            {/* Onclick of the button prompts the user to ensure they actually want to delete all tasks */}
            <button onClick={() => {
                if (window.confirm("Delete all Tasks?")) {
                    handleDeleteAll();
                }}} 
            className='sidebar__button'>Delete All</button>
        </div>
    )
}

export default Sidebar
