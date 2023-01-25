import React, {useState, useContext} from 'react';
import {TaskContext} from "../../Context/TaskContext";
import {addTaskAction} from "../../Context/Actions/ContextActions";


function ContextAddTask() {

    const {dispatch} = useContext(TaskContext)

    const [title, setTitle] = useState("")

    function onChange(e) {
        setTitle(e.target.value)
    }

    function addTask() {
        dispatch(addTaskAction({
            id: Date.now(),
            title: title,
            status: false
        }))
        setTitle("")
    }

    return (
        <>

            <div className="add-container">
                <div className="row">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="form-outline flex-fill">
                            <input placeholder="Add new ..." type="text" id="form1"
                                   className="form-control form-control-lg" value={title} onChange={onChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg ms-2" onClick={addTask}>Add</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContextAddTask;

