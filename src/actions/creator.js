import * as actions from "./types"

let ID = 0

export const add_task = (item) => {
    return ({
        type: actions.add_task,
        payload: {
            id: ++ID,
            name: item.name,
            description: item.description,
        }

    })
}