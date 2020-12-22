import { CallbackActionTypes } from "./CallbackActionTypes";

export const callbackWatcher = (contentCallback, title) => ({
  type: CallbackActionTypes.CALLBACK_WATCHER,
  payload: {
    title: title,
    contentCallback: contentCallback,
  },
});

export const updateContent = (content, title) => ({
  type: CallbackActionTypes.UPDATE_CONTENT,
  payload: {
    title: title,
    content: content,
  },
});
