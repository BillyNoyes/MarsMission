import React, { useState } from 'react';
import './Input.css';
import { useDispatch } from 'react-redux';
import { saveTask } from '../features/taskSlice';

function Input() {
    const [input, setInput] = useState('');

    const [taskTitle, setTaskTitle] = useState('');
    const [description, setDescription] = useState('');
    const [taskCreator, setTaskCreator] = useState('');
    const [taskWorker, setTaskWorker] = useState('');

    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(saveTask({
            title: taskTitle,
            desc: description,
            creator: taskCreator,
            worker: taskWorker,
            done: false,
            id: Date.now()
        }))
    }

    return (
        <div className='input'>
            <input type="text" placeholder='Task Title' value={taskTitle} onChange={e => setTaskTitle(e.target.value)} />
            <input type="text" placeholder='Description' value={description} onChange={e => setDescription(e.target.value)} />
            <input type="text" placeholder='Creator' value={taskCreator} onChange={e => setTaskCreator(e.target.value)} />
            <input type="text" placeholder='Worker' value={taskWorker} onChange={e => setTaskWorker(e.target.value)} />

            <button onClick={addTask}>Add</button>
        </div>
    )
}

export default Input
