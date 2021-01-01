"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabContent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _TitleSection = _interopRequireDefault(require("./TitleSection"));

var _TabSection = _interopRequireDefault(require("./TabSection"));

var _refresh = require("../../src/assets/refresh.svg");

var _UserActions = require("../stores/UserActions.js");

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

require("./TabContent.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TabContent = function TabContent(props) {
  var dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(function () {
    dispatch((0, _UserActions.setInputProps)(props));
  }, [props]);
  var showRefreshIcon = (0, _reactRedux.useSelector)(function (state) {
    return state.titleRefreshAll;
  });
  var error = (0, _reactRedux.useSelector)(function (state) {
    return state.error;
  });

  if (error) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "error-message"
    }, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "Exception Occured - Cannot process the input.", /*#__PURE__*/_react.default.createElement("br", null), error);
  }

  var refreshIcon;

  if (showRefreshIcon) {
    refreshIcon = /*#__PURE__*/_react.default.createElement("div", {
      className: "refresh-icon",
      onClick: function onClick() {
        return dispatch((0, _UserActions.refreshTitles)());
      }
    }, /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
      title: "Refresh to display all titles",
      "aria-label": "refresh"
    }, /*#__PURE__*/_react.default.createElement(_refresh.ReactComponent, null)));
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tab-content-container"
  }, refreshIcon, /*#__PURE__*/_react.default.createElement(_Card.default, {
    className: "title-container"
  }, /*#__PURE__*/_react.default.createElement(_TitleSection.default, {
    defaultTitle: props.defaultTitle
  })), /*#__PURE__*/_react.default.createElement(_Card.default, {
    className: "tab-container"
  }, /*#__PURE__*/_react.default.createElement(_TabSection.default, null)));
};

exports.TabContent = TabContent;