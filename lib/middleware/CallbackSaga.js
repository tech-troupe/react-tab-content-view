"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callbackWorker = callbackWorker;
exports.default = rootSaga;

var _UserActions = require("../stores/UserActions");

var _UserActionTypes = require("../stores/UserActionTypes");

var _effects = require("redux-saga/effects");

var _marked = /*#__PURE__*/regeneratorRuntime.mark(callbackWorker),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(callbackWatcherSaga),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(rootSaga);

var TIMEOUT_DURATION = 10000;

var delayAndTimeout = function delayAndTimeout(duration) {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve("timeout");
    }, duration);
  });
};

function callbackWorker(action) {
  var content;
  return regeneratorRuntime.wrap(function callbackWorker$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.put)((0, _UserActions.setLoading)(action.payload.titleId));

        case 3:
          _context.next = 5;
          return (0, _effects.call)(action.payload.callbackFn, action.payload.title);

        case 5:
          content = _context.sent;
          _context.next = 8;
          return (0, _effects.put)((0, _UserActions.updateContent)(action.payload.titleId, content));

        case 8:
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          _context.next = 14;
          return (0, _effects.put)({
            type: "CALLBACK_LOAD_ERROR",
            error: _context.t0
          });

        case 14:
          _context.prev = 14;
          _context.next = 17;
          return (0, _effects.cancelled)();

        case 17:
          if (!_context.sent) {
            _context.next = 20;
            break;
          }

          _context.next = 20;
          return (0, _effects.put)((0, _UserActions.resetLoading)());

        case 20:
          return _context.finish(14);

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 10, 14, 21]]);
}

function callbackWatcherSaga(action) {
  return regeneratorRuntime.wrap(function callbackWatcherSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.fork)(callbackWorker, action);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function rootSaga() {
  var action, _yield$race, timeout;

  return regeneratorRuntime.wrap(function rootSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!true) {
            _context3.next = 13;
            break;
          }

          _context3.next = 3;
          return (0, _effects.take)(_UserActionTypes.UserActionTypes.CALLBACK_WATCHER);

        case 3:
          action = _context3.sent;
          _context3.next = 6;
          return (0, _effects.race)({
            cbSuccess: (0, _effects.call)(callbackWatcherSaga, action),
            cancelLoading: (0, _effects.take)(_UserActionTypes.UserActionTypes.CANCEL_LOADING),
            timeout: (0, _effects.call)(delayAndTimeout, TIMEOUT_DURATION)
          });

        case 6:
          _yield$race = _context3.sent;
          timeout = _yield$race.timeout;

          if (!timeout) {
            _context3.next = 11;
            break;
          }

          _context3.next = 11;
          return (0, _effects.put)({
            type: "LOAD_TIMED_OUT",
            payload: {
              timeoutval: TIMEOUT_DURATION,
              titleId: action.payload.titleId
            }
          });

        case 11:
          _context3.next = 0;
          break;

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}