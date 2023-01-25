import {deleteTaskAction , toggleTaskAction} from "../../Context/Actions/ContextActions";
import {useContext} from "react";
import {TaskContext} from "../../Context/TaskContext";


function ContextTask({title, id, status}) {

    const {dispatch} = useContext(TaskContext);


    function deleteTask(id) {
        console.log(id)
        dispatch(deleteTaskAction(id))
    }

    function toggleTask(id) {
        dispatch(toggleTaskAction(id))
    }

    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <div className="d-flex align-items-center">
                    <input checked={status} className="form-check-input me-2" type="checkbox"
                           onClick={() => toggleTask(id)}/>
                    <span className={status ? "completed" : ""} style={{textTransform: "capitalize"}}>{title} </span>
                </div>
                <i className="bi bi-x-lg" style={{cursor: "pointer"}} onClick={() => deleteTask(id)}/>
            </li>
        </>
    )
}

export default ContextTask;

