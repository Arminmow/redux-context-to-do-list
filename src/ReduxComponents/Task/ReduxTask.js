import React from 'react';
import './ReduxTask.css'
import {deleteTaskAction , toggleTaskAction} from "../../Redux/Actions/ReduxActions";
import {useDispatch ,useSelector} from "react-redux";



function ReduxTask({title , id , status}) {

    const task = useSelector(state => state.tasks[id])

    const dispatch = useDispatch()

    function deleteTask (id) {
        dispatch(deleteTaskAction(id))
    }

    function toggleTask (id) {
        dispatch(toggleTaskAction(id))
    }

    function test (){
        console.log(id)
    }

    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <div className="d-flex align-items-center">
                    <input checked={status} className="form-check-input me-2" type="checkbox" onClick={() => toggleTask(id)}/>
                    <span className={status ? "completed" : ""} style={{textTransform:"capitalize"}}>{title} </span>
                </div>
                <i className="bi bi-x-lg" style={{cursor:"pointer"}} onClick={() => deleteTask(id)} />
            </li>
        </>
    );
}

export default ReduxTask;
