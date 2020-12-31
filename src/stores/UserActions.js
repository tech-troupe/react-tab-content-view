import { UserActionTypes } from "./UserActionTypes";

export const setRemoveTitlePayload = (title) => ({
  type: UserActionTypes.REMOVE_TITLE,
  payload: {
    titleToDelete: title,
  },
});

export const intialize = () => ({
  type: UserActionTypes.INITIALIZE,
  payload: null,
});

export const intializeState = () => ({
  type: UserActionTypes.INITIALIZE,
  payload: null,
});

export const closeTab = (indx) => ({
  type: UserActionTypes.CLOSE_TAB,
  payload: {
    closedTabIndex: indx,
  },
});

export const switchTab = (prevIdx, newIdx) => ({
  type: UserActionTypes.SWITCH_TAB,
  payload: {
    prevTabIndex: prevIdx,
    newTabIndex: newIdx,
  },
});

export const deleteTitle = (titleId) => ({
  type: UserActionTypes.DELETE_TITLE,
  payload: {
    id: titleId,
  },
});

export const clickTitle = (titleId) => ({
  type: UserActionTypes.CLICK_TITLE,
  payload: {
    id: titleId,
  },
});

export const refreshTitles = () => ({
  type: UserActionTypes.REFRESH_TITLES,
});

export const setInputProps = (inputProps) => ({
  type: UserActionTypes.SET_INPUT_PROPS,
  payload: {
    inputProps: inputProps,
  },
});

export const setSubTabValue = (newValue) => ({
  type: UserActionTypes.SET_SUB_TAB_VALUE,
  payload: {
    currentSubTabValue: newValue,
  },
});

export const callbackWatcher = (titleId, title, callbackFn) => ({
  type: UserActionTypes.CALLBACK_WATCHER,
  payload: {
    titleId: titleId,
    title: title,
    callbackFn: callbackFn,
  },
});

export const updateContent = (titleId, content) => ({
  type: UserActionTypes.UPDATE_CONTENT,
  payload: {
    titleId: titleId,
    content: content,
  },
});

export const setLoading = (titleId) => ({
  type: UserActionTypes.SET_LOADING,
  payload: {
    titleId: titleId,
  },
});

export const cancelLoading = () => {
  console.log("cancelLoading:");
  return {
    type: UserActionTypes.CANCEL_LOADING,
  };
};

export const resetLoading = () => {
  console.log("resetLoading:");
  return {
    type: UserActionTypes.RESET_LOADING,
  };
};
