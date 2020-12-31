"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LoadingSpinner;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _styles = require("@material-ui/core/styles");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Cancel = _interopRequireDefault(require("@material-ui/icons/Cancel"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _UserActions = require("../stores/UserActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var useStylesFacebook = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      position: "relative"
    },
    bottom: {
      color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
      position: "absolute"
    },
    top: {
      color: "#00e2ff",
      animationDuration: "550ms",
      position: "absolute",
      left: 0
    },
    circle: {
      strokeLinecap: "round"
    }
  };
});

function Spinner(props) {
  var dispatch = (0, _reactRedux.useDispatch)();
  var classes = useStylesFacebook();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: function onClick() {
      return dispatch((0, _UserActions.cancelLoading)());
    }
  }, /*#__PURE__*/_react.default.createElement(_Cancel.default, {
    color: "primary",
    style: {
      fontSize: 20
    }
  }), /*#__PURE__*/_react.default.createElement(_CircularProgress.default, {
    variant: "determinate",
    className: classes.bottom,
    size: 40,
    thickness: 4,
    value: 100
  }), /*#__PURE__*/_react.default.createElement(_CircularProgress.default, _extends({
    variant: "indeterminate",
    disableShrink: true,
    className: classes.top,
    classes: {
      circle: classes.circle
    },
    size: 40,
    thickness: 4
  }, props))));
}

var useStyles = (0, _styles.makeStyles)({
  root: {
    flexDirection: "column",
    padding: "50px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  spinText: {
    fontFamily: "Roboto",
    fontSize: 14,
    margin: 5,
    fontWeight: "bold"
  }
});

function LoadingSpinner(_ref) {
  var loadingTitle = _ref.loadingTitle;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(Spinner, null), /*#__PURE__*/_react.default.createElement(_Box.default, {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.spinText,
    variant: "caption",
    component: "div",
    color: "textSecondary"
  }, "Loading ", loadingTitle, "..."))));
}

LoadingSpinner.propTypes = {
  loadingTitle: _propTypes.default.string
};