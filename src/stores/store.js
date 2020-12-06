import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import userActionReducer from "./UserActionReducer";

const middlewares = [logger];

const store = (data) =>
  createStore(userActionReducer, data, applyMiddleware(...middlewares));

export default store;
