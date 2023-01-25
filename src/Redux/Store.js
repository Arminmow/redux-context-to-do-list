import {createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import ReduxTaskReducer from "./Reducers/ReduxTaskReducer";


const store = createStore(ReduxTaskReducer , composeWithDevTools())


export default store;
