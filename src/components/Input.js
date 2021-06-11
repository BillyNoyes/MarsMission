import React, { useState } from 'react';
import './Input.css';
import { useDispatch } from 'react-redux';
import { saveTask } from '../features/taskSlice';

function Input({ username }) {
    const [taskTitle, setTaskTitle] = useState('');
    const [description, setDescription] = useState('');
    const [taskWorker, setTaskWorker] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();


    const addTask = () => {
        // Checks to make sure no input field is null
        if (taskTitle !== '' && description !== '' && taskWorker !== '') {
            // Passes the data into the saveTask function, as well as creates an id for the task using the current datetime
            dispatch(saveTask({
                title: taskTitle,
                description: description,
                creator: username,
                worker: taskWorker,
                done: false,
                id: Date.now()
            }))
            // Resets all state values back to empty string
            setError('');
            setTaskTitle('');
            setDescription('');
            setTaskWorker('');
        } else {
            setError('Each input must contain text');
        }
        
    }

    return (
        <div className='input'>
            <div className='input__form'>
                <input type="text" placeholder='Task Title' value={taskTitle} onChange={e => setTaskTitle(e.target.value)} />
                <input type="text" placeholder='Description' value={description} onChange={e => setDescription(e.target.value)} />
                <input type="text" placeholder='Worker' value={taskWorker} onChange={e => setTaskWorker(e.target.value)} />
                <button className='input__formButton' onClick={addTask}>Add</button>
            </div>
            {/* Error message */}
            <p style={{color: "red"}}>{error}</p>
        </div>
    )
}

export default Input
