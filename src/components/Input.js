import React, { useState } from 'react';
import './Input.css';

function Input() {
    const [input, setInput] = useState('');

    const addTask = () => {
        
    }

    return (
        <div className='input'>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={addTask}>Add</button>
        </div>
    )
}

export default Input
