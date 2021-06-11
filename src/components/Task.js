import React from 'react'
import './Task.css';

function Task({ title, description, creator, worker, done, id}) {

    const handleCheck = () => {

    }

    return (
        <div className="task">
            <p>{title}</p>
            <p>{description}</p>
            <p>{creator}</p>
            <p>{worker}</p>
            <input checked={done} type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        </div>
    )
}

export default Task
