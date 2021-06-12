import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import Task from './Task';



const ListTask = ({tasks, newTask}) => {


    const appendTask = () => {
        console.log("tasks", tasks)
        if (newTask.name && newTask.description) {
            tasks.unshift(newTask)
            console.log("task :", newTask, "tasks:",tasks);
        }
        // tasks.unshift(newTask)
        // console.log("task :", newTask, "tasks:",tasks);
    }

    const updateList = () => {
        appendTask()
        task_list = tasks.map((e) => <Task id={e.id} name={e.name} desc={e.description} />);
        console.log("task list", task_list)

    }
    
    useEffect(updateList,[newTask, tasks]);
    // updateList()
    // let updated_list = updateList();
    
    let task_list = tasks.map(e => <Task id={e.id} name={e.name} desc={e.description} />);


    return (
        <div>
            test
            {task_list}
        </div>
    )
}

const mapStateToProps = state => ({
    tasks : state.items,
    newTask: state.item
})

export default connect(mapStateToProps)(ListTask);
