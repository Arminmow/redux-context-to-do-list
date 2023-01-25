import {ADD_TASK , DELETE_TASK , TOGGLE_TASK } from "../../Redux/Actions/ReduxTypes";

export function ContextTaskReducer(state, action) {
    switch (action.type) {
        case ADD_TASK :
            return [...state, action.task]
        case DELETE_TASK :
            return state.filter(task => task.id !== action.id)
        case TOGGLE_TASK :
            const id = action.id;
            return state.map((task, index) => task.id === id ? {...task, status: !task.status} : {...task})


        default :
            return state
    }
}
