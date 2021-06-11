import React from 'react'
import './Task.css';
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/taskSlice';
import { deleteTask } from '../features/taskSlice';

function Task({ title, description, creator, worker, done, id}) {
    const dispatch = useDispatch();

    const handleCheck = () => {
        dispatch(setCheck(id));
    }

    const handleDelete = () => {
        dispatch(deleteTask(id));
    }

    const handleEdit = () => {
    }

    return (
        <div className="task">
            <p className={done && 'task--done'}>{title}</p>
            <p className={done && 'task--done'}>{description}</p>
            <p className={done && 'task--done'}>{creator}</p>
            <p className={done && 'task--done'}>{worker}</p>
            <input type="checkbox" onChange={handleCheck} value={done} />
            <button className="task__delete" onClick={() => {
                if (window.confirm("Delete this task?")) {
                    handleDelete();
                }}}>🗑</button>
                <button className="task__edit" onClick={handleEdit}>📝</button>
        </div>
    )
}

export default Task
