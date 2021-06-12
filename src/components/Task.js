import React from 'react'

const Task = ({id, name, description}) => {
    return (
        <div>
            id:{id}
            name:{name}
            description:{description}
        </div>
    )
}

export default Task;
