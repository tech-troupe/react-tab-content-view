"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TabContent = require("./TabContent");

var _InputProcessor = require("./helper/InputProcessor");

var _reactRedux = require("react-redux");

var _store = require("../stores/store");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ReactTabContentView = function ReactTabContentView(props) {
  var theme = props.theme,
      titleType = props.titleType,
      titleDelete = props.titleDelete,
      titleRefreshAll = props.titleRefreshAll,
      searchResult = props.searchResult,
      contentCallback = props.contentCallback,
      advancedMode = props.advancedMode,
      contentDisplayComponent = props.contentDisplayComponent,
      contentDisplayAttributes = props.contentDisplayAttributes;

  var _processInput = (0, _InputProcessor.processInput)(props.src, props.titleType),
      _processInput2 = _slicedToArray(_processInput, 2),
      transformedInput = _processInput2[0],
      defaultTitle = _processInput2[1];

  return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: _store.store
  }, /*#__PURE__*/_react.default.createElement(_core.ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "react-tab-content-view"
  }, /*#__PURE__*/_react.default.createElement(_TabContent.TabContent, {
    data: transformedInput,
    defaultTitle: defaultTitle,
    titleType: titleType,
    searchResult: searchResult,
    titleDelete: titleDelete,
    titleRefreshAll: titleRefreshAll,
    contentCallback: contentCallback,
    advancedMode: advancedMode,
    contentDisplayComponent: contentDisplayComponent,
    contentDisplayAttributes: contentDisplayAttributes
  }))));
};

ReactTabContentView.propTypes = {
  theme: _propTypes.default.oneOf(["default", "orange"]),
  titleType: _propTypes.default.oneOf(["chips", "buttons", "checkboxes"]),
  titleDelete: _propTypes.default.bool,
  titleRefreshAll: _propTypes.default.bool,
  src: _propTypes.default.object.isRequired,
  searchResult: _propTypes.default.array,
  contentCallback: _propTypes.default.func,
  advancedMode: _propTypes.default.bool,
  contentDisplayComponent: _propTypes.default.object,
  contentDisplayAttributes: _propTypes.default.array
};
var _default = ReactTabContentView;
exports.default = _default;