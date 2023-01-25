import {ADD_TASK , TOGGLE_TASK , DELETE_TASK} from "./ReduxTypes";

export function addTask (task) {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export function deleteTaskAction (id){
    return {
        type: DELETE_TASK,
        payload: id
    }
}

export function toggleTaskAction (id){
    return {
        type: TOGGLE_TASK,
        payload: id
    }
}

