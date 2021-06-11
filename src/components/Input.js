import React, { useState } from 'react';
import './Input.css';
import { useDispatch } from 'react-redux';
import { saveTask } from '../features/taskSlice';

function Input() {
    const [taskTitle, setTaskTitle] = useState('');
    const [description, setDescription] = useState('');
    const [taskCreator, setTaskCreator] = useState('');
    const [taskWorker, setTaskWorker] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const addTask = () => {
        if (taskTitle !== '' && description !== '' && taskCreator !== '' && taskWorker !== '') {
            dispatch(saveTask({
                title: taskTitle,
                description: description,
                creator: taskCreator,
                worker: taskWorker,
                done: false,
                id: Date.now()
            }))
    
            setTaskTitle('');
            setDescription('');
            setTaskCreator('');
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
                <input type="text" placeholder='Creator' value={taskCreator} onChange={e => setTaskCreator(e.target.value)} />
                <input type="text" placeholder='Worker' value={taskWorker} onChange={e => setTaskWorker(e.target.value)} />
                <button className='input__formButton' onClick={addTask}>Add</button>
            </div>
            <p style={{color: "red"}}>{error}</p>
        </div>
    )
}

export default Input
