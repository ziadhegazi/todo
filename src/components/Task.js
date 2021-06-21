import React from 'react'
import "./task.css"

const Task = ({id, name, description, check}) => {
    return (
        <li>
            <div className="task_container">
                <h4 className="ID" id={id}>{id}</h4>
                <div className="name">{name}</div>
                <div className="description">{description}</div>
                <input type="checkbox" checked = {check}/>
            </div>
        </li>
    )
}

export default Task;
