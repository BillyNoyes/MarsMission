import React, { useState } from 'react'
import './Task.css';
import { useDispatch } from 'react-redux';
import { setCheck } from '../features/taskSlice';
import { deleteTask } from '../features/taskSlice';
import { updateTask } from '../features/taskSlice';


function Task({ title, description, creator, worker, done, id}) {
    const dispatch = useDispatch();
    const [isEditable, setIsEditable] = useState(false);

    const [updatedTaskTitle, setUpdatedTaskTitle] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');
    const [updatedWorker, setUpdatedWorker] = useState('');


    // Passes the id to the setCheck function within dispatch
    const handleCheck = () => {
        dispatch(setCheck(id));
    }

    // Passes the id to the deleteTask function within dispatch
    const handleDelete = () => {
        dispatch(deleteTask(id));
    }

    const handleEdit = () => {
        if (isEditable === true) {
            let newTitle = '';
            let newDesc = '';
            let newWorker = '';

            // Checks each updated value, if they contain empty string, original value is used instead
            if (updatedTaskTitle === '') {
                newTitle = title;
            } else {
                newTitle = updatedTaskTitle;
            }

            if (updatedDescription === '') {
                newDesc = description;
            }
            else {
                newDesc = updatedDescription;
            }

            if (updatedWorker === '') {
                newWorker = worker;
            }
            else {
                newWorker = updatedWorker;
            }

            // Passes the data into the updateTask function
            dispatch(updateTask({
                title: newTitle,
                description: newDesc,
                worker: newWorker,
                id: id
            }))
            // Resets all state values back to empty string
            setUpdatedTaskTitle('');
            setUpdatedDescription('');
            setUpdatedWorker('');
        }
        setIsEditable(!isEditable);
        
    }

    return (
        <div className="task">
            {isEditable ? <input type='text' placeholder={title} value={updatedTaskTitle} onChange={e => setUpdatedTaskTitle(e.target.value)} /> : <p className={done && 'task--done'}>{title}</p>}
            {isEditable ? <input placeholder={description} value={updatedDescription} onChange={e => setUpdatedDescription(e.target.value)} /> : <p className={done && 'task--done'}>{description}</p>}
            {!isEditable && <p className={done && 'task--done'}>{creator}</p>}
            {isEditable ? <input placeholder={worker} value={updatedWorker} onChange={e => setUpdatedWorker(e.target.value)} /> : <p className={done && 'task--done'}>{worker}</p>}
            {!isEditable && <input type="checkbox" onChange={handleCheck} value={done} />}
            {!isEditable && <button className="task__delete" onClick={() => {
                if (window.confirm("Delete this task?")) {
                    handleDelete();
                }}}>🗑</button>}
            {isEditable ? <button className="task__edit" onClick={handleEdit}>✅</button>  : <button className="task__edit" onClick={handleEdit}>📝</button>}
        </div>
    )
}

export default Task
