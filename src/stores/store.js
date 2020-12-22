import { createStore, applyMiddleware,compose } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../Reducers"
import rootSaga from "../middleware/CallbackSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

const store = (data) => {
  let initialState = {
    ...data,
    titleDelete: true,
    // Controls hide/display of refreshAll icon
    titleRefreshAll: true,
    sortTitlesInGroup: false,
    groupVertical: true,
    closedTitle: null,
    currentSubTabValue: "0",
    mode: "search",
    searchResult: null,
    advancedMode: false
  };
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
};

sagaMiddleware.run(rootSaga);

export default store;
