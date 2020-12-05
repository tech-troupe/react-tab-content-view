import {createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import userActionReducer from './UserActionReducer';

const middlewares = [logger];

const store = createStore(userActionReducer, applyMiddleware(...middlewares));

export default store;