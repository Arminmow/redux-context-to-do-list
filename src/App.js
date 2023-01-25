
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import store from "./Redux/Store";
import {Provider} from "react-redux";
import ReduxAddTask from "./ReduxComponents/AddTask/ReduxAddTask";
import ReduxTaskList from "./ReduxComponents/TaskList/ReduxTaskList";
import TaskContextProvider from "./Context/TaskContext";
import ContextAddTask from "./ContextComponents/AddTask/ContextAddTask";
import ContextTaskList from "./ContextComponents/TaskList/ContextTaskList";

function App() {
  return (
    <>
      <div className="row">
        <div className="col-6 redux-col">

        <Provider store={store}>
          <div className="redux-container">
            <h1>Redux To Do List</h1>
          </div>
          <ReduxAddTask/>
          <ReduxTaskList/>
        </Provider>



        </div>

        <div className="col-6 context-col">


          <TaskContextProvider>
            <div className="context-container">
              <h1>Context To Do List</h1>
            </div>
            <ContextAddTask/>
            <ContextTaskList/>
          </TaskContextProvider>
        </div>


      </div>

    </>
  );
}

export default App;
