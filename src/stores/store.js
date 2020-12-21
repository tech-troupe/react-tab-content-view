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
        searchKeyWord:"FOSS",
        searchResult: {
            "Tamil":1,
            "English":1,
            "Hindi":1,
            // "Russian":0,
            // "Spanish":0,
            // "Chinese":0,
            // "French":0,
            // "Latin":0,
        }
    };
    return createStore(userActionReducer, initialState, applyMiddleware(...middlewares));
}

export default store;
