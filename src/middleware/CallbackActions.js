import { CallbackActionTypes } from "./CallbackActionTypes";

export const callbackWatcher = (titleId) => ({
  type: CallbackActionTypes.CALLBACK_WATCHER,
  payload: {
    titleId: titleId,
  },
});

export const updateContent = (content, title) => ({
  type: CallbackActionTypes.UPDATE_CONTENT,
  payload: {
    title: title,
    content: content,
  },
});
