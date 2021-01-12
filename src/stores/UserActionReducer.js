import { UserActionTypes } from "./UserActionTypes";
import { processInput } from "./../components/helper/InputProcessor";

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
  searchResult: [],
  advancedMode: false,
  contentCallback: {},
  contentDisplayComponent: null,
  contentDisplayAttributes: null,
  loadCancelled: false,
  loadTimedout: false,
  defaultTitleId: 0,
  displayedTitlesWithGroup: 0,
  hasGroup: false,
  showGroup: false,
};

const userActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.INITIALIZE:
      //inbound state should be null
      return {
        state,
      };
    case UserActionTypes.CLOSE_TAB: {
      let tabIndex = action.payload.closedTabIndex;
      let currActiveIndex = 0;
      let allTabsFiltered = state.allTabs.filter((value, index) => {
        if (state.activeTitle === value) {
          currActiveIndex = index;
        }
        return index !== tabIndex;
      });
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
    }
    case UserActionTypes.SWITCH_TAB: {
      const { allTabs } = state;
      return {
        ...state,
        activeTitle: allTabs[action.payload.newTabIndex],
      };
    }
    case UserActionTypes.CLICK_TITLE: {
      let newAllTabs =
        state.allTabs.indexOf(action.payload.id) !== -1
          ? [...state.allTabs]
          : [...state.allTabs, action.payload.id];
      return {
        ...state,
        activeTitle: action.payload.id,
        allTabs: newAllTabs,
        loadCancelled: false,
        loadTimedout: false,
      };
    }
    case UserActionTypes.DELETE_TITLE: {
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
    }
    case UserActionTypes.REFRESH_TITLES: {
      return {
        ...state,
        displayedTitles: state.allTitles,
        activeTitle: state.defaultTitleId,
        allTabs: state.defaultTitleId !== 0 ? [state.defaultTitleId] : [],
      };
    }
    case UserActionTypes.SET_INPUT_PROPS: {
      const transformedData = processInput(
        action.payload.inputProps.data,
        action.payload.inputProps.titleType,
        action.payload.inputProps.hasGroup !== undefined
          ? action.payload.inputProps.hasGroup
          : false
      );

      //Override with default title set explicitly in the props
      if (
        action.payload.inputProps.defaultTitle !== undefined &&
        Object.keys(transformedData).length > 0
      ) {
        const found = transformedData.data.find(
          (obj) => obj.title === action.payload.inputProps.defaultTitle
        );
        if (found !== undefined) {
          transformedData.activeTitle = found.titleId;
          transformedData.defaultTitleId = found.titleId;
        }
      }

      const searchResultObj = {};
      if (action.payload.inputProps.searchResult !== undefined) {
        action.payload.inputProps.searchResult.map((obj) => {
          searchResultObj[obj.title] = obj.count;
        });
      }
      return {
        ...state,
        ...transformedData,
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
    }
    case UserActionTypes.SET_SUB_TAB_VALUE: {
      return {
        ...state,
        currentSubTabValue: action.payload.currentSubTabValue,
      };
    }
    case UserActionTypes.UPDATE_CONTENT: {
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
    }
    case UserActionTypes.SET_LOADING: {
      const titleLoading = state.data[action.payload.titleId - 1].title;

      return {
        ...state,
        contentLoading: true,
        titleLoading: titleLoading,
      };
    }
    case UserActionTypes.CANCEL_LOADING: {
      return {
        ...state,
        loadCancelled: true,
      };
    }
    case UserActionTypes.RESET_LOADING: {
      return {
        ...state,
        contentLoading: false,
        titleLoading: "",
      };
    }
    case UserActionTypes.LOAD_TIMED_OUT: {
      return {
        ...state,
        loadTimedout: true,
      };
    }
    case UserActionTypes.TOGGLE_GROUP: {
      return {
        ...state,
        showGroup: state.showGroup ? false : true,
      };
    }
    default:
      return state;
  }
};

export default userActionReducer;
