import userActionReducer from "./stores/UserActionReducer";
import CallbackReducer from "./middleware/CallbackReducer";
import {combineReducers} from "redux"

export default combineReducers(userActionReducer,CallbackReducer)