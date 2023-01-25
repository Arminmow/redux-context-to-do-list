import {ADD_TASK , TOGGLE_TASK , DELETE_TASK} from "../../Redux/Actions/ReduxTypes";

export function addTaskAction(task) {
    return {
        type: ADD_TASK,
        task: task
    }
}

export function deleteTaskAction(id) {
    return {
        type: DELETE_TASK,
        id: id
    }
}

export function toggleTaskAction(id) {
    return {
        type: TOGGLE_TASK,
        id: id
    }
}
