import { updateContent } from "./CallbackActions";
import { CallbackActionTypes } from "./CallbackActionTypes";
import { takeLatest, call, put, all } from "redux-saga/effects";

function* callbackWorker(action) {
  try {
    let content = yield call(
      action.payload.contentCallback,
      action.payload.title
    );

    // const content = action.payload.contentCallback(action.payload.title)
    yield put(updateContent(content));
  } catch (e) {
    console.log("callBackWorker Failed!");
  }
}

function* callbackWatcherSaga() {
  yield takeLatest(CallbackActionTypes.CALLBACK_WATCHER, callbackWorker);
}

export default function* rootSaga() {
  yield all([callbackWatcherSaga()]);
}
