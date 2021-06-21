import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import Task from './Task';



const ListTask = ({tasks, newTask}) => {
    const [local_tasks, setLocalTasks] = useState(tasks)
    // const [finalList, setFinalList] = useState(local_tasks)

    const appendTask = () => {
        console.log("tasks", tasks)
        if (newTask.name && newTask.description) {
            setLocalTasks( [...local_tasks,newTask] )
            tasks.unshift(newTask)
            console.log("task :", newTask, "tasks:",tasks);
        }
    }

    const handleCheckbox = (e) => {
        let tempID = e.target.previousSibling.previousSibling.previousSibling.id;

        local_tasks[tempID - 1].check = e.target.checked;
        console.log("e.check", e.target.checked)
        console.log("check", local_tasks[tempID - 1])
    }
    
    let task_list = local_tasks.map(e => <Task id={e.id} name={e.name} description={e.description} state={handleCheckbox} check = {e.check} />);

    const updateList = () => {
        appendTask()
        console.log("task list", task_list)
    }
    
    useEffect(updateList,[newTask, tasks]);
    

    // filter
    const filter = () => {
        const filter = document.querySelector("#filter").value;
        console.log("filter", filter)
        if (filter === "checked") {
            task_list = local_tasks.filter(e => e.check === true);
            console.log("filter list", task_list);
        }
        else if (filter === "unchecked") {
            task_list = local_tasks.filter(e => e.check === false);
            console.log("filter list", task_list);
        }
        else {
            task_list = local_tasks.map((e) => <Task id={e.id} name={e.name} description={e.description} state={handleCheckbox} check = {e.check} />);
        }

    }

    return (
        <div>
            <label htmlFor="filter">Filter</label>
            <select id="filter" onChange={filter}>
                <option value="null">-------</option>
                <option value="checked">checked</option>
                <option value="unchecked">unchecked</option>
            </select>
            <div className="tasklist">
                <ul style={{listStyle: "none"}}>
                    <div className="tasklabels">
                        <div className="taskid">ID</div>
                        <div className="tasknm">Name</div>
                        <div className="taskdsc">description</div>
                    </div>
                    {task_list}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    tasks : state.items,
    newTask: state.item,
})

export default connect(mapStateToProps)(ListTask);
