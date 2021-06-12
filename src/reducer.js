
// const test = "this is a test"

const Reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            // let temp = action.payload
            // console.log("task added",temp);
            // state.items.push(temp);
            return ({
                ...state,
                item: action.payload
            })
        case "REMOVE_TASK":
            console.log("task removed")
            return {
                state
            }
        default:
            return state;

    }
}

export default Reducer;
