import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import userActionReducer from "./UserActionReducer";
import rootSaga from "../middleware/CallbackSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger];

export const store = createStore(
  userActionReducer,
  applyMiddleware(...middlewares, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
