"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetLoading = exports.cancelLoading = exports.setLoading = exports.updateContent = exports.callbackWatcher = exports.setSubTabValue = exports.setInputProps = exports.refreshTitles = exports.clickTitle = exports.deleteTitle = exports.switchTab = exports.closeTab = exports.intializeState = exports.intialize = exports.setRemoveTitlePayload = void 0;

var _UserActionTypes = require("./UserActionTypes");

var setRemoveTitlePayload = function setRemoveTitlePayload(title) {
  return {
    type: _UserActionTypes.UserActionTypes.REMOVE_TITLE,
    payload: {
      titleToDelete: title
    }
  };
};

exports.setRemoveTitlePayload = setRemoveTitlePayload;

var intialize = function intialize() {
  return {
    type: _UserActionTypes.UserActionTypes.INITIALIZE,
    payload: null
  };
};

exports.intialize = intialize;

var intializeState = function intializeState() {
  return {
    type: _UserActionTypes.UserActionTypes.INITIALIZE,
    payload: null
  };
};

exports.intializeState = intializeState;

var closeTab = function closeTab(indx) {
  return {
    type: _UserActionTypes.UserActionTypes.CLOSE_TAB,
    payload: {
      closedTabIndex: indx
    }
  };
};

exports.closeTab = closeTab;

var switchTab = function switchTab(prevIdx, newIdx) {
  return {
    type: _UserActionTypes.UserActionTypes.SWITCH_TAB,
    payload: {
      prevTabIndex: prevIdx,
      newTabIndex: newIdx
    }
  };
};

exports.switchTab = switchTab;

var deleteTitle = function deleteTitle(titleId) {
  return {
    type: _UserActionTypes.UserActionTypes.DELETE_TITLE,
    payload: {
      id: titleId
    }
  };
};

exports.deleteTitle = deleteTitle;

var clickTitle = function clickTitle(titleId) {
  return {
    type: _UserActionTypes.UserActionTypes.CLICK_TITLE,
    payload: {
      id: titleId
    }
  };
};

exports.clickTitle = clickTitle;

var refreshTitles = function refreshTitles() {
  return {
    type: _UserActionTypes.UserActionTypes.REFRESH_TITLES
  };
};

exports.refreshTitles = refreshTitles;

var setInputProps = function setInputProps(inputProps) {
  return {
    type: _UserActionTypes.UserActionTypes.SET_INPUT_PROPS,
    payload: {
      inputProps: inputProps
    }
  };
};

exports.setInputProps = setInputProps;

var setSubTabValue = function setSubTabValue(newValue) {
  return {
    type: _UserActionTypes.UserActionTypes.SET_SUB_TAB_VALUE,
    payload: {
      currentSubTabValue: newValue
    }
  };
};

exports.setSubTabValue = setSubTabValue;

var callbackWatcher = function callbackWatcher(titleId, title, callbackFn) {
  return {
    type: _UserActionTypes.UserActionTypes.CALLBACK_WATCHER,
    payload: {
      titleId: titleId,
      title: title,
      callbackFn: callbackFn
    }
  };
};

exports.callbackWatcher = callbackWatcher;

var updateContent = function updateContent(titleId, content) {
  return {
    type: _UserActionTypes.UserActionTypes.UPDATE_CONTENT,
    payload: {
      titleId: titleId,
      content: content
    }
  };
};

exports.updateContent = updateContent;

var setLoading = function setLoading(titleId) {
  return {
    type: _UserActionTypes.UserActionTypes.SET_LOADING,
    payload: {
      titleId: titleId
    }
  };
};

exports.setLoading = setLoading;

var cancelLoading = function cancelLoading() {
  console.log("cancelLoading:");
  return {
    type: _UserActionTypes.UserActionTypes.CANCEL_LOADING
  };
};

exports.cancelLoading = cancelLoading;

var resetLoading = function resetLoading() {
  console.log("resetLoading:");
  return {
    type: _UserActionTypes.UserActionTypes.RESET_LOADING
  };
};

exports.resetLoading = resetLoading;