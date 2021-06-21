import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import Task from './Task';



const ListTask = ({tasks, newTask}) => {
    const [local_tasks, setLocalTasks] = useState(tasks)


    const appendTask = () => {
        console.log("tasks", tasks)
        if (newTask.name && newTask.description) {
            setLocalTasks( [...local_tasks,newTask] )
            tasks.unshift(newTask)
            console.log("task :", newTask, "tasks:",tasks);
        }
        // if (newTask.name && newTask.description) {
        //     tasks.unshift(newTask)
        //     console.log("task :", newTask, "tasks:",tasks);
        // }
        // tasks.unshift(newTask)
        // console.log("task :", newTask, "tasks:",tasks);
    }

    const updateList = () => {
        appendTask()
        task_list = local_tasks.map((e) => <Task id={e.id} name={e.name} description={e.description} check="false" />);
        console.log("task list", task_list)

    }
    
    useEffect(updateList,[newTask, tasks]);
    // updateList()
    // let updated_list = updateList();
    
    let task_list = local_tasks.map(e => <Task id={e.id} name={e.name} description={e.description} />);

    // filter
    const filter = () => {
        const filter = document.querySelector("#filter").value;
        console.log("filter", filter)
        if (filter === "checked") {
            // task_list = tasks.filter(e => e.lastElementChild.lastElementChild.hasAttribute("checked") )
            console.log("filter", tasks.filter(e => e))
            let temp = [];
            for (let todo of task_list) {
                // if (todo.hasAttribute("checked")) {
                //     temp.push(todo);
                // }
                // console.log("checked", todo.hasAttribute("checked"))
                console.log("todo", todo.props)
                console.log("temp", temp)
            }
        }
        else if (filter === "unchecked") {
            task_list = tasks.filter(e => !e.hasAttribute("checked") )
            console.log("filter", filter)
        }
        else {
            return;
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
    newTask: state.item
})

export default connect(mapStateToProps)(ListTask);
