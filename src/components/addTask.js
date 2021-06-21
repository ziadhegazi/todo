import React, {useState} from 'react'
import { connect } from 'react-redux'
import {add_task} from "../actions/creator"
import "./addtask.css"


const AddTask = ({addtask}) => {

    const [text,setText] = useState({
        name : "",
        description : ""
    })
    
    // changing the local state
    const handleChange = (e) => {
        setText({
            ...text,
            [e.target.name] : e.target.value
        })
        // console.log(text);
    }

    // Adding each input to the item global state
    const handleSubmit = (e) => {
        e.preventDefault();
        const Tname = document.querySelector("#TaskName");
        const Tdesc = document.querySelector("#Task_desc");

        const item = {
            name : text.name,
            description : text.description,
            check : false,
        }

        console.log("form submited, item", item)

        if (item.name && item.description) {

            addtask(item)

            Tname.value = "";
            Tdesc.value = "";
        } else {
            alert("Error, please enter Task name and description")
        }
    }
    

    return (
        <div>
            <form>
                <label htmlFor="TaskName">Task Name</label>
                <input id="TaskName" type="text" name="name"  onChange={handleChange} placeholder="e.g groceries" required />
                
                <label htmlFor="Task_desc">Task Description</label>
                <textarea id="Task_desc" type="text" name="description"  onChange={handleChange} placeholder="e.g tomatos" required />

                <button className="task_add" type="submit" onClick={handleSubmit} >ADD</button>

            </form>
        </div>
    )
}



const mapDispatchToProps = dispatch => ({
    addtask: (name, description) => dispatch(add_task(name, description))
})

const mapStateToProps = state => ({
    newTask : state.item,
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
