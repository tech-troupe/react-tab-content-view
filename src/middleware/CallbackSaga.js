import { updateContent } from "../stores/UserActions";
import { UserActionTypes } from "../stores/UserActionTypes";
import { takeLatest, call, put } from "redux-saga/effects";

export function* callbackWorker(action) {
  try {
    let content = yield call(
      action.payload.callbackFn,
      action.payload.title
    );
    yield put(updateContent(action.payload.titleId, content));
  } catch (e) {
    console.log("callBackWorker Failed!", e);
  }
}

export default function* callbackWatcherSaga() {
  console.log("hits callbackWatcherSaga!")
  yield takeLatest(UserActionTypes.CALLBACK_WATCHER, callbackWorker);
  console.log("after hits callbackWatcherSaga!")
}