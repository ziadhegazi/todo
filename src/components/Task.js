import React, {useState} from 'react'
import "./task.css"

const Task = ({id, name, description, state}) => {
    // const [checkbox, setCheckbox] = useState(check)

    // const handleCheckbox = (e) => {
    //     checkbox === true? setCheckbox(false) : setCheckbox(true);

    //     console.log("check", checkbox)
    //     check = {checkbox};
    //     e.checked = checkbox;
    // }


    return (
        <li>
            <div className="task_container">
                <h4 className="ID" id={id}>{id}</h4>
                <div className="name">{name}</div>
                <div className="description">{description}</div>
                <input type="checkbox" onClick={(e) => state(e)} />
            </div>
        </li>
    )
}

export default Task;
