import {createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import apiListReducer from './api-list-reducer';

const middlewares = [logger];

const store = createStore(apiListReducer, applyMiddleware(...middlewares));

export default store;