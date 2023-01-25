import {ADD_TASK , DELETE_TASK , TOGGLE_TASK} from "../Actions/ReduxTypes";

const initialState = {
    tasks: []
}

function ReduxTaskReducer (state = initialState , action){
    switch (action.type) {
        case ADD_TASK :
            return {
                tasks: [...state.tasks , action.payload]
            }
        case DELETE_TASK :
            console.log(action.payload)
            return {
                ...state,
                tasks: state.tasks.filter((item , index) => item.id !== action.payload)
            }
        case TOGGLE_TASK :
            const id = action.payload;
            return {
                ...state,
                tasks: state.tasks.map((task , index)=> task.id === id ? {...task , status: !task.status} : {...task})
            };
        default :
            return state
    }
}


export default ReduxTaskReducer;

