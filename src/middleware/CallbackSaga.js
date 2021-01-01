import { updateContent, setLoading, resetLoading } from "../stores/UserActions";
import { UserActionTypes } from "../stores/UserActionTypes";
import { call, put, fork, take, cancelled, race } from "redux-saga/effects";

const TIMEOUT_DURATION = 10000;

const delayAndTimeout = (duration) =>
  new Promise((resolve) => setTimeout(() => resolve("timeout"), duration));

export function* callbackWorker(action) {
  try {
    yield put(setLoading(action.payload.titleId));
    let content = yield call(action.payload.callbackFn, action.payload.title);
    yield put(updateContent(action.payload.titleId, content));
  } catch (error) {
    yield put({ type: "CALLBACK_LOAD_ERROR", error });
  } finally {
    if (yield cancelled()) {
      yield put(resetLoading());
    }
  }
}

function* callbackWatcherSaga(action) {
  yield fork(callbackWorker, action);
}

export default function* rootSaga() {
  while (true) {
    const action = yield take(UserActionTypes.CALLBACK_WATCHER);
    const { timeout } = yield race({
      cbSuccess: call(callbackWatcherSaga, action),
      cancelLoading: take(UserActionTypes.CANCEL_LOADING),
      timeout: call(delayAndTimeout, TIMEOUT_DURATION),
    });

    if (timeout) {
      yield put({
        type: "LOAD_TIMED_OUT",
        payload: {
          timeoutval: TIMEOUT_DURATION,
          titleId: action.payload.titleId,
        },
      });
    }
  }
}
