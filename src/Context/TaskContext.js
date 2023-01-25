import {createContext , useReducer} from "react";
import {ContextTaskReducer} from "./Reducers/ContextTaskReducer";

export const TaskContext = createContext();

function TaskContextProvider ({children}){

    const [tasks , dispatch] = useReducer(ContextTaskReducer , [])

    return (
        <TaskContext.Provider value={{tasks , dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider
