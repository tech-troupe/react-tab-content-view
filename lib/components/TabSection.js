"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _TabList = _interopRequireDefault(require("@material-ui/lab/TabList"));

var _lab = require("@material-ui/lab");

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _Cancel = _interopRequireDefault(require("@material-ui/icons/Cancel"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _reactRenderHtml = _interopRequireDefault(require("react-render-html"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _refresh = _interopRequireDefault(require("../assets/refresh.svg"));

var _LoadingSpinner = _interopRequireDefault(require("./LoadingSpinner"));

var _UserActions = require("../stores/UserActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function a11yProps(index) {
  return {
    id: "scrollable-force-tab-".concat(index),
    "aria-controls": "scrollable-force-tabpanel-".concat(index)
  };
}

var useStyles = function useStyles(theme) {
  return {
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper
    }
  };
};

function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      key = props.key,
      other = _objectWithoutProperties(props, ["children", "value", "index", "key"]);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    key: key,
    role: "tabpanel",
    hidden: value !== index,
    id: "scrollable-force-tabpanel-".concat(index),
    "aria-labelledby": "scrollable-force-tab-".concat(index)
  }, other), value === index && /*#__PURE__*/_react.default.createElement(_Box.default, {
    p: 1
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, null, children)));
}

TabPanel.propTypes = {
  children: _propTypes.default.node,
  index: _propTypes.default.any.isRequired,
  value: _propTypes.default.any.isRequired
};

var TabSection = /*#__PURE__*/function (_React$Component) {
  _inherits(TabSection, _React$Component);

  var _super = _createSuper(TabSection);

  function TabSection() {
    var _this;

    _classCallCheck(this, TabSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e, idx) {
      _this.props.switchTab(_this.props.activeTabIndex, idx);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeSubTab", function (e, newSubTabValue) {
      _this.props.setSubTabValue(newSubTabValue);
    });

    _defineProperty(_assertThisInitialized(_this), "deleteTab", function (indx, e) {
      e.stopPropagation();

      _this.props.deleteTab(parseInt(indx));
    });

    _defineProperty(_assertThisInitialized(_this), "findObject", function (objId) {
      return _this.props.data.find(function (item) {
        return item.titleId === objId;
      });
    });

    return _this;
  }

  _createClass(TabSection, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var subTabs = [];
      var tabPanels = [];

      if (this.props.allTabs.length === 0) {
        if (this.props.defaultTitle !== 0) {
          return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "Oops! You closed all tabs!! Use \xA0", /*#__PURE__*/_react.default.createElement(_refresh.default, {
            style: {
              width: 25
            }
          }), "(Refresh Icon) on top right corner of above title section to bring them back..."));
        } else {
          return /*#__PURE__*/_react.default.createElement("div", null);
        }
      }

      var content = this.findObject(this.props.activeTab).content;

      if (content === undefined) {
        if (this.props.contentLoading) {
          return /*#__PURE__*/_react.default.createElement(_LoadingSpinner.default, {
            loadingTitle: this.props.titleLoading
          });
        } else {
          return /*#__PURE__*/_react.default.createElement("div", null);
        }
      }

      var hasSubTab = Array.isArray(content);
      var tabContent = "";

      if (!hasSubTab) {
        if (_typeof(content) === "object") {
          var ContentDisplayComponent = this.props.contentDisplayComponent;
          tabContent = /*#__PURE__*/_react.default.createElement(ContentDisplayComponent, _extends({
            src: content
          }, this.props.contentDisplayAttributes));
        } else {
          tabContent = (0, _reactRenderHtml.default)(content);
        }
      } else {
        content.map(function (obj, idx) {
          var subtitle = obj.subtitle,
              subcontent = obj.subcontent; //add subtab to active tab

          subTabs.push( /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({
            label: subtitle,
            value: idx.toString(),
            key: idx
          }, a11yProps(idx)))); //add content to active tab

          tabPanels.push( /*#__PURE__*/_react.default.createElement(TabPanel, {
            value: idx.toString(),
            index: _this2.props.subTabValue,
            key: idx
          }, (0, _reactRenderHtml.default)(subcontent)));
        });
        tabContent = /*#__PURE__*/_react.default.createElement(_lab.TabContext, {
          value: this.props.subTabValue.toString()
        }, /*#__PURE__*/_react.default.createElement(_TabList.default, {
          onChange: this.handleChangeSubTab
        }, subTabs), tabPanels);
      }

      if (this.props.contentLoading) {
        tabContent = /*#__PURE__*/_react.default.createElement(_LoadingSpinner.default, {
          loadingTitle: this.props.titleLoading
        });
      }

      var loadingTab = "";

      if (this.props.titleLoading !== "") {
        var idx = this.props.allTabs.length - 1;
        loadingTab = /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({
          label: this.props.titleLoading,
          key: idx
        }, a11yProps(idx), {
          icon: /*#__PURE__*/_react.default.createElement(_Cancel.default, {
            id: idx,
            color: "primary",
            style: {
              fontSize: 20
            },
            onClick: function onClick(e) {
              return _this2.deleteTab(idx, e);
            }
          })
        }));
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: classes.root
      }, /*#__PURE__*/_react.default.createElement(_AppBar.default, {
        position: "static",
        color: "default"
      }, /*#__PURE__*/_react.default.createElement(_Tabs.default, {
        value: this.props.activeTabIndex,
        onChange: this.handleChange,
        variant: "scrollable",
        scrollButtons: "on",
        "aria-label": "scrollable force tabs example"
      }, this.props.allTabs.map(function (titleId, idx) {
        var obj = _this2.findObject(titleId);

        return /*#__PURE__*/_react.default.createElement(_Tab.default, _extends({
          label: obj.title,
          key: idx
        }, a11yProps(idx), {
          icon: /*#__PURE__*/_react.default.createElement(_Cancel.default, {
            id: idx,
            color: "primary",
            style: {
              fontSize: 20
            },
            onClick: function onClick(e) {
              return _this2.deleteTab(idx, e);
            }
          })
        }));
      }), loadingTab)), /*#__PURE__*/_react.default.createElement(_Box.default, {
        p: 1
      }, tabContent));
    }
  }]);

  return TabSection;
}(_react.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  console.log("statetoprops:", state);
  return {
    allTabs: state.allTabs,
    activeTab: state.activeTitle,
    defaultTitle: state.defaultTitle,
    activeTabIndex: state.allTabs.indexOf(state.activeTitle),
    data: state.data,
    subTabValue: state.currentSubTabValue,
    contentLoading: state.contentLoading,
    titleLoading: state.titleLoading,
    contentDisplayComponent: state.contentDisplayComponent,
    contentDisplayAttributes: state.contentDisplayAttributes
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  console.log("inside mapDispatchToProps");
  return {
    deleteTab: function deleteTab(indx) {
      return dispatch((0, _UserActions.closeTab)(indx));
    },
    intializeState: function intializeState() {
      return dispatch((0, _UserActions.intializeState)());
    },
    switchTab: function switchTab(prevIdx, newIdx) {
      return dispatch((0, _UserActions.switchTab)(prevIdx, newIdx));
    },
    setSubTabValue: function setSubTabValue(newIdx) {
      return dispatch((0, _UserActions.setSubTabValue)(newIdx));
    }
  };
};

var _default = (0, _compose.default)((0, _styles.withStyles)(useStyles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(TabSection);

exports.default = _default;