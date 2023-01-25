import React from 'react';
import {useSelector } from "react-redux";
import {useState} from "react";
import ReduxTask from "../Task/ReduxTask";
import './ReduxTaskList.css'

function ReduxTaskList({title}) {

    const [filter , setFilter] = useState("all")

    const tasks = useSelector(state => state.tasks)

    function changeFilter(e){
        setFilter(e.target.name)
    }


    return (
        <>

            <div className="task">

                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button className={filter === "all" ? "nav-link active" : "nav-link"} name="all" onClick={changeFilter}>All</button>
                    </li>
                    <li className="nav-item">
                        <button className={filter === "active" ? "nav-link active" : "nav-link"} name="active" onClick={changeFilter}>Active</button>
                    </li>
                    <li className="nav-item">
                        <button className={filter === "completed" ? "nav-link active" : "nav-link"} name="completed" onClick={changeFilter}>Completed</button>
                    </li>
                </ul>

                {filter === "active" && tasks.map((task , index) => {
                    if(task.status === false)
                        return <ReduxTask key={index} title={task.title} id={task.id} status={task.status}/>
                })}

                {filter === "completed" && tasks.map((task , index) => {
                    if(task.status === true)
                        return <ReduxTask key={index} title={task.title} id={task.id} status={task.status}/>
                })}

                {filter === "all" && tasks.map((task , index) => {
                    return <ReduxTask key={index} title={task.title} id={task.id} status={task.status}/>
                })}
            </div>
        </>
    );
}

export default ReduxTaskList;
