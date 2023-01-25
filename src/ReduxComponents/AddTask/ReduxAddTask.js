import './ReduxAddTask.css'
import {useState} from "react";
import {useDispatch,} from "react-redux";
import {addTask} from "../../Redux/Actions/ReduxActions";

function ReduxAddTask() {

    const [title, setTitle] = useState("");

    const dispatch = useDispatch();

    function change(e) {
        setTitle(e.target.value)
    }

    function add() {
        if (title.length > 0) {

            dispatch(addTask({
                id: Date.now(),
                title: title,
                status: false
            }))
            setTitle("")
        } else {
            window.alert("Pleas Add a task")
        }

    }

    return (
        <>
            <div className="add-container">
                <div className="row">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="form-outline flex-fill">
                            <input placeholder="Add new ..." type="text" id="form1"
                                   className="form-control form-control-lg" onChange={change} value={title}/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg ms-2" onClick={add}>Add</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ReduxAddTask;
