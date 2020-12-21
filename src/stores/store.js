import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import userActionReducer from "./UserActionReducer";

const middlewares = [logger];

const store = (data) => {

    let initialState = {
        ...data,
        titleDelete: true,
        // Controls hide/display of refreshAll icon
        titleRefreshAll: true,
        sortTitlesInGroup: false,
        groupVertical:true,
        closedTitle : null,
        currentSubTabValue:"0",
        mode:"search",
        searchResult:null
    };
    return createStore(userActionReducer, initialState, applyMiddleware(...middlewares));
}

export default store;
