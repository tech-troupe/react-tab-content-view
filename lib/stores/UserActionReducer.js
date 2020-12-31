"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UserActionTypes = require("./UserActionTypes");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
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
  loadTimedout: false
};

var userActionReducer = function userActionReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _UserActionTypes.UserActionTypes.INITIALIZE:
      //inbound state should be null
      return {
        state: state
      };

    case _UserActionTypes.UserActionTypes.CLOSE_TAB:
      {
        var tabIndex = action.payload.closedTabIndex;
        console.log("tabIndex:", tabIndex); // state.allTabs = state.allTabs.filter(elem => elem !== closedTab);

        var currActiveIndex = 0; // let curValue = state.activeTitle;

        var allTabsFiltered = state.allTabs.filter(function (value, index) {
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

        return _objectSpread(_objectSpread({}, state), {}, {
          allTabs: allTabsFiltered
        });
      }

    case _UserActionTypes.UserActionTypes.SWITCH_TAB:
      {
        console.log("SWITCH_TAB reducer:", state);
        var allTabs = state.allTabs;
        return _objectSpread(_objectSpread({}, state), {}, {
          activeTitle: allTabs[action.payload.newTabIndex]
        });
      }

    case _UserActionTypes.UserActionTypes.CLICK_TITLE:
      {
        console.log("CLICK_TITLE reducer:", state);
        var newAllTabs = state.allTabs.indexOf(action.payload.id) !== -1 ? _toConsumableArray(state.allTabs) : [].concat(_toConsumableArray(state.allTabs), [action.payload.id]);
        console.log("newAllTabs:", newAllTabs);
        return _objectSpread(_objectSpread({}, state), {}, {
          activeTitle: action.payload.id,
          allTabs: newAllTabs,
          loadCancelled: false,
          loadTimedout: false
        });
      }

    case _UserActionTypes.UserActionTypes.DELETE_TITLE:
      {
        console.log("DELETE_TITLE reducer:", state);
        var newDisplayTitles = state.displayedTitles.filter(function (elem) {
          return elem !== action.payload.id;
        });
        var updatedAllTabs = state.allTabs.filter(function (elem) {
          return elem !== action.payload.id;
        });

        if (state.activeTitle === action.payload.id) {
          if (updatedAllTabs.length > 0) {
            var idxOfDeletedTab = state.allTabs.indexOf(action.payload.id);

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

        return _objectSpread(_objectSpread({}, state), {}, {
          displayedTitles: newDisplayTitles,
          allTabs: updatedAllTabs
        });
      }

    case _UserActionTypes.UserActionTypes.REFRESH_TITLES:
      {
        console.log("UserActionTypes.REFRESH_TITLES");
        return _objectSpread(_objectSpread({}, state), {}, {
          displayedTitles: state.allTitles,
          activeTitle: state.defaultTitle,
          allTabs: state.defaultTitle !== 0 ? [state.defaultTitle] : []
        });
      }

    case _UserActionTypes.UserActionTypes.SET_INPUT_PROPS:
      {
        console.log("SET_INPUT_PROPS-refreshall:", action.payload.inputProps.titleRefreshAll);
        var searchResultObj = {};

        if (action.payload.inputProps.searchResult !== undefined) {
          action.payload.inputProps.searchResult.map(function (obj) {
            searchResultObj[obj.title] = obj.count;
          });
        }

        return _objectSpread(_objectSpread(_objectSpread({}, state), action.payload.inputProps.data), {}, {
          titleRefreshAll: action.payload.inputProps.titleRefreshAll !== undefined ? action.payload.inputProps.titleRefreshAll : true,
          titleDelete: action.payload.inputProps.titleDelete !== undefined ? action.payload.inputProps.titleDelete : true,
          searchResult: action.payload.inputProps.searchResult !== undefined ? searchResultObj : {},
          advancedMode: action.payload.inputProps.advancedMode !== undefined ? action.payload.inputProps.advancedMode : false,
          contentCallback: action.payload.inputProps.contentCallback !== undefined ? action.payload.inputProps.contentCallback : {},
          contentDisplayComponent: action.payload.inputProps.contentDisplayComponent !== undefined ? action.payload.inputProps.contentDisplayComponent : null,
          contentDisplayAttributes: action.payload.inputProps.contentDisplayAttributes !== undefined ? action.payload.inputProps.contentDisplayAttributes : null
        });
      }

    case _UserActionTypes.UserActionTypes.SET_SUB_TAB_VALUE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          currentSubTabValue: action.payload.currentSubTabValue
        });
      }

    case _UserActionTypes.UserActionTypes.UPDATE_CONTENT:
      {
        var _action$payload = action.payload,
            titleId = _action$payload.titleId,
            content = _action$payload.content;
        var contentObj = {};
        var isDefault = false;
        var idx = null;
        var title = "";
        var filteredData = state.data.filter(function (obj, index) {
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
        return _objectSpread(_objectSpread({}, state), {}, {
          data: filteredData,
          activeTitle: titleId,
          contentLoading: false,
          titleLoading: "",
          allTabs: state.allTabs.indexOf(titleId) !== -1 ? _toConsumableArray(state.allTabs) : [].concat(_toConsumableArray(state.allTabs), [titleId])
        });
      }

    case _UserActionTypes.UserActionTypes.SET_LOADING:
      {
        console.log("UserActionTypes.SET_LOADING", action.payload);
        var titleLoading = state.data[action.payload.titleId - 1].title;
        return _objectSpread(_objectSpread({}, state), {}, {
          contentLoading: true,
          titleLoading: titleLoading
        });
      }

    case _UserActionTypes.UserActionTypes.CANCEL_LOADING:
      {
        console.log("UserActionTypes.CANCEL_LOADING");
        return _objectSpread(_objectSpread({}, state), {}, {
          loadCancelled: true
        });
      }

    case _UserActionTypes.UserActionTypes.RESET_LOADING:
      {
        console.log("UserActionTypes.RESET_LOADING");
        return _objectSpread(_objectSpread({}, state), {}, {
          contentLoading: false,
          titleLoading: ""
        });
      }

    case _UserActionTypes.UserActionTypes.LOAD_TIMED_OUT:
      {
        console.log("UserActionTypes.LOAD_TIMED_OUT");
        return _objectSpread(_objectSpread({}, state), {}, {
          loadTimedout: true
        });
      }

    default:
      return state;
  }
};

var _default = userActionReducer;
exports.default = _default;