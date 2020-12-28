import { UserActionTypes } from "./UserActionTypes";

const initialState = {
  data: [],
  displayedTitles: [],
  allTabs: [],
  titleDelete: true,
  // Controls hide/display of refreshAll icon
  contentLoading: false,
  titleLoading: "",
  titleRefreshAll: true,
  sortTitlesInGroup: false,
  groupVertical: true,
  closedTitle: null,
  currentSubTabValue: "0",
  mode: "search",
  searchResult: null,
  advancedMode: false,
  contentCallback: {},
  contentDisplayComponent: null,
  contentDisplayAttributes: null,
  loadCancelled: false,
  loadTimedout: false,
};

const userActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.INITIALIZE:
      //inbound state should be null
      return {
        state,
      };
    case UserActionTypes.CLOSE_TAB:
      let tabIndex = action.payload.closedTabIndex;
      console.log("tabIndex:", tabIndex);
      // state.allTabs = state.allTabs.filter(elem => elem !== closedTab);

      let currActiveIndex = 0;
      // let curValue = state.activeTitle;

      let allTabsFiltered = state.allTabs.filter((value, index) => {
        if (state.activeTitle === value) {
          currActiveIndex = index;
        }
        return index !== tabIndex;
      });
      console.log("currActiveIndex:", currActiveIndex);
      if (allTabsFiltered.length === 0) {
        state.activeTitle = null;
      } else if (currActiveIndex === tabIndex) {
        if (tabIndex === 0) {
          state.activeTitle = allTabsFiltered[0];
        } else {
          state.activeTitle = allTabsFiltered[tabIndex - 1];
        }
      }
      return {
        ...state,
        allTabs: allTabsFiltered,
      };

    case UserActionTypes.SWITCH_TAB:
      console.log("SWITCH_TAB reducer:", state);
      const { allTabs } = state;
      return {
        ...state,
        activeTitle: allTabs[action.payload.newTabIndex],
      };

    case UserActionTypes.CLICK_TITLE:
      console.log("CLICK_TITLE reducer:", state);
      let newAllTabs =
        state.allTabs.indexOf(action.payload.id) !== -1
          ? [...state.allTabs]
          : [...state.allTabs, action.payload.id];
      console.log("newAllTabs:", newAllTabs);
      return {
        ...state,
        activeTitle: action.payload.id,
        allTabs: newAllTabs,
        loadCancelled: false,
        loadTimedout: false,
      };

    case UserActionTypes.DELETE_TITLE:
      console.log("DELETE_TITLE reducer:", state);
      let newDisplayTitles = state.displayedTitles.filter(
        (elem) => elem !== action.payload.id
      );
      let updatedAllTabs = state.allTabs.filter(
        (elem) => elem !== action.payload.id
      );
      if (state.activeTitle === action.payload.id) {
        if (updatedAllTabs.length > 0) {
          let idxOfDeletedTab = state.allTabs.indexOf(action.payload.id);
          if (idxOfDeletedTab === 0) {
            state.activeTitle = state.allTabs[1];
          } else {
            state.activeTitle = state.allTabs[idxOfDeletedTab - 1];
          }
        } else {
          if (newDisplayTitles.length > 0) {
            state.activeTitle = 0;
          }
        }
      }
      return {
        ...state,
        displayedTitles: newDisplayTitles,
        allTabs: updatedAllTabs,
      };

    case UserActionTypes.REFRESH_TITLES:
      console.log("UserActionTypes.REFRESH_TITLES");
      return {
        ...state,
        displayedTitles: state.allTitles,
        activeTitle: state.defaultTitle,
        allTabs: state.defaultTitle !== 0 ? [state.defaultTitle] : [],
      };

    case UserActionTypes.SET_INPUT_PROPS:
      console.log(
        "SET_INPUT_PROPS-refreshall:",
        action.payload.inputProps.titleRefreshAll
      );
      const searchResultObj = {};
      if (action.payload.inputProps.searchResult !== undefined) {
        action.payload.inputProps.searchResult.map((obj) => {
          searchResultObj[obj.title] = obj.count;
        });
      }
      return {
        ...state,
        ...action.payload.inputProps.data,
        titleRefreshAll:
          action.payload.inputProps.titleRefreshAll !== undefined
            ? action.payload.inputProps.titleRefreshAll
            : true,
        titleDelete:
          action.payload.inputProps.titleDelete !== undefined
            ? action.payload.inputProps.titleDelete
            : true,
        searchResult:
          action.payload.inputProps.searchResult !== undefined
            ? searchResultObj
            : {},
        advancedMode:
          action.payload.inputProps.advancedMode !== undefined
            ? action.payload.inputProps.advancedMode
            : false,
        contentCallback:
          action.payload.inputProps.contentCallback !== undefined
            ? action.payload.inputProps.contentCallback
            : {},
        contentDisplayComponent:
          action.payload.inputProps.contentDisplayComponent !== undefined
            ? action.payload.inputProps.contentDisplayComponent
            : null,
        contentDisplayAttributes:
          action.payload.inputProps.contentDisplayAttributes !== undefined
            ? action.payload.inputProps.contentDisplayAttributes
            : null,
      };

    case UserActionTypes.SET_SUB_TAB_VALUE:
      return {
        ...state,
        currentSubTabValue: action.payload.currentSubTabValue,
      };

    case UserActionTypes.UPDATE_CONTENT:
      const { titleId, content } = action.payload;
      let contentObj = {};
      let isDefault = false;
      let idx = null;
      let title = "";
      let filteredData = state.data.filter((obj, index) => {
        if (obj.titleId === titleId) {
          isDefault = obj.default;
          idx = index;
          title = obj.title;
        }
        return obj.titleId !== titleId;
      });
      contentObj["titleId"] = titleId;
      contentObj["title"] = title;
      contentObj["content"] = content;
      if (isDefault) {
        contentObj["default"] = isDefault;
      }
      filteredData.splice(idx, 0, contentObj);
      return {
        ...state,
        data: filteredData,
        activeTitle: titleId,
        contentLoading: false,
        titleLoading: "",
        allTabs:
          state.allTabs.indexOf(titleId) !== -1
            ? [...state.allTabs]
            : [...state.allTabs, titleId],
      };

    case UserActionTypes.SET_LOADING:
      console.log("UserActionTypes.SET_LOADING", action.payload);
      const titleLoading = state.data[action.payload.titleId - 1].title;

      return {
        ...state,
        contentLoading: true,
        titleLoading: titleLoading,
      };

    case UserActionTypes.CANCEL_LOADING:
      console.log("UserActionTypes.CANCEL_LOADING");
      return {
        ...state,
        loadCancelled: true,
      };

    case UserActionTypes.RESET_LOADING:
      console.log("UserActionTypes.RESET_LOADING");
      return {
        ...state,
        contentLoading: false,
        titleLoading: "",
      };

    case UserActionTypes.LOAD_TIMED_OUT:
      console.log("UserActionTypes.LOAD_TIMED_OUT");
      return {
        ...state,
        loadTimedout: true,
      };

    default:
      return state;
  }
};

export default userActionReducer;
