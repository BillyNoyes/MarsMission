import React from 'react'
import './Task.css';

function Task({ title, description, creator, worker, done, id}) {

    const handleCheck = () => {

    }

    return (
        <div className="task">
            <p className={done && 'task--done'}>{title}</p>
            <p>{description}</p>
            <p>{creator}</p>
            <p>{worker}</p>
            <input type="checkbox" onChange={handleCheck} value={done} />
        </div>
    )
}

export default Task
