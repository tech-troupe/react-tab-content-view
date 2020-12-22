import { UserActionTypes } from "./UserActionTypes";

const userActionReducer = (state = [], action) => {
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
        allTabs: [state.defaultTitle],
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
      };

    case UserActionTypes.SET_SUB_TAB_VALUE:
      return {
        ...state,
        currentSubTabValue: action.payload.currentSubTabValue,
      };
    default:
      return state;
  }
};

export default userActionReducer;
