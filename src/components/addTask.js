import React, {useState} from 'react'
import { connect } from 'react-redux'
import {add_task} from "../actions/creator"


const AddTask = ({tasks, addtask}) => {

    const [text,setText] = useState({
        name : "",
        description : ""
    })
    
    const handleChange = (e) => {
        {
            setText({
                ...text,
                [e.target.name] : e.target.value
            })
        }
        // console.log(text);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const item = {
            name : text.name,
            description : text.description
        }

        console.log("form submited, item", item)

        if (item.name && item.description) {
            addtask(item)
        } else {
            alert("error")
        }
    }
    

    return (
        <div>
            <form>
                <label htmlFor="TaskName">Task Name</label>
                <input id="TaskName" type="text" name="name" value={text.name} onChange={handleChange} required />
                
                <label htmlFor="Task_desc">Task Description</label>
                <textarea id="Task_desc" type="text" name="description" value={text.description} onChange={handleChange} required />

                <button type="submit" onClick={handleSubmit} >ADD</button>

            </form>
        </div>
    )
}



const mapDispatchToProps = dispatch => ({
    addtask: (name, description) => dispatch(add_task(name, description))
})

const mapStateToProps = state => ({
    tasks : state.items,
    newTask : state.item,
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
