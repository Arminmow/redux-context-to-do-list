import React, {useContext, useState} from 'react';

import {TaskContext} from "../../Context/TaskContext";
import ContextTask from "../Task/ContextTask";


function ContextTaskList() {

    const [filter, setFilter] = useState("all")

    const {tasks} = useContext(TaskContext)

    function changeFilter(e) {
        setFilter(e.target.name)
    }


    return (
        <>
            <div className="task">

                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button className={filter === "all" ? "nav-link active" : "nav-link"} name="all"
                                onClick={changeFilter}>All
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className={filter === "active" ? "nav-link active" : "nav-link"} name="active"
                                onClick={changeFilter}>Active
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className={filter === "completed" ? "nav-link active" : "nav-link"} name="completed"
                                onClick={changeFilter}>Completed
                        </button>
                    </li>
                </ul>

                {filter === "active" && tasks.map((task, index) => {
                    if (task.status === false)
                        return <ContextTask key={index} title={task.title} id={task.id} status={task.status}/>
                })}

                {filter === "completed" && tasks.map((task, index) => {
                    if (task.status === true)
                        return <ContextTask key={index} title={task.title} id={task.id} status={task.status}/>
                })}

                {filter === "all" && tasks.map((task, index) => {
                    return <ContextTask key={index} title={task.title} id={task.id} status={task.status}/>
                })}
            </div>
        </>
    );
}

export default ContextTaskList;
