"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _redux = require("redux");

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _UserActionReducer = _interopRequireDefault(require("./UserActionReducer"));

var _CallbackSaga = _interopRequireDefault(require("../middleware/CallbackSaga"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sagaMiddleware = (0, _reduxSaga.default)();
var middlewares = [_reduxLogger.default];
var store = (0, _redux.createStore)(_UserActionReducer.default, _redux.applyMiddleware.apply(void 0, middlewares.concat([sagaMiddleware])));
exports.store = store;
sagaMiddleware.run(_CallbackSaga.default);