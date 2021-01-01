"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _styles = require("@material-ui/core/styles");

var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));

var _Badge = _interopRequireDefault(require("@material-ui/core/Badge"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _UserActions = require("../stores/UserActions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var useStyles = function useStyles(theme) {
  return {
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center" // maxWidth: 800,

    },
    details: {
      display: "flex",
      flexDirection: "column"
    },
    content: {
      flex: "1 0 auto",
      "& > *": {
        margin: theme.spacing(1)
      }
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  };
};

var TitleSection = /*#__PURE__*/function (_React$Component) {
  _inherits(TitleSection, _React$Component);

  var _super = _createSuper(TitleSection);

  function TitleSection() {
    var _this;

    _classCallCheck(this, TitleSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (id) {
      if (!_this.props.advancedMode) {
        _this.props.clickTitle(id);
      } else {
        _this.checkAndLoadContent(id);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "checkAndLoadContent", function (id) {
      if (id) {
        var activeTitleObject = _this.findObject(id);

        if (activeTitleObject.content) {
          _this.props.clickTitle(id);
        } else {
          _this.props.callbackWatcherSaga(id, activeTitleObject.title, _this.props.callbackFn);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      if (_this.props.defaultTitle) {
        // Below timeout to be eventually removed
        setTimeout(function () {
          _this.checkAndLoadContent(_this.props.defaultTitle);
        }, 0);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDelete", function (id, e) {
      e.stopPropagation();

      _this.props.deleteTitle(id);
    });

    _defineProperty(_assertThisInitialized(_this), "findObject", function (objId) {
      return _this.props.data.find(function (item) {
        return item.titleId === objId;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBadgeEnable", function (obj, variantValue) {
      var chipAndBadge;

      if (_this.props.searchResult === null) {
        chipAndBadge = /*#__PURE__*/_react.default.createElement(_Chip.default, {
          key: obj.titleId,
          variant: variantValue,
          size: "small",
          color: "primary",
          label: obj.title,
          onClick: function onClick() {
            return _this.handleClick(obj.titleId);
          },
          onDelete: _this.props.titleDelete ? function (e) {
            return _this.handleDelete(obj.titleId, e);
          } : undefined
        });
      } else {
        chipAndBadge = /*#__PURE__*/_react.default.createElement(_Badge.default, {
          badgeContent: _this.props.searchResult[obj.title] ? _this.props.searchResult[obj.title] : 0,
          color: "secondary"
        }, /*#__PURE__*/_react.default.createElement(_Chip.default, {
          key: obj.titleId,
          variant: variantValue,
          size: "small",
          color: "primary",
          label: obj.title,
          onClick: function onClick() {
            return _this.handleClick(obj.titleId);
          },
          onDelete: _this.props.titleDelete ? function (e) {
            return _this.handleDelete(obj.titleId, e);
          } : undefined
        }));
      }

      return chipAndBadge;
    });

    return _this;
  }

  _createClass(TitleSection, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: classes.root
      }, /*#__PURE__*/_react.default.createElement(_Card.default, {
        className: classes.details
      }, /*#__PURE__*/_react.default.createElement(_CardContent.default, {
        className: classes.content
      }, this.props.displayedTitles.map(function (objId) {
        var obj = _this2.findObject(objId);

        var variantValue = obj.titleId === _this2.props.activeTitle ? "default" : "outlined";
        return _this2.onBadgeEnable(obj, variantValue);
      }))));
    }
  }]);

  return TitleSection;
}(_react.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  console.log("statetoprops Titlesection:", state);
  return {
    displayedTitles: state.displayedTitles,
    activeTitle: state.activeTitle,
    data: state.data,
    titleDelete: state.titleDelete,
    searchKeyword: state.searchKeyword,
    searchResult: state.searchResult,
    advancedMode: state.advancedMode,
    callbackFn: state.contentCallback,
    contentLoading: state.contentLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  console.log("inside mapDispatchToProps");
  return {
    deleteTitle: function deleteTitle(id) {
      return dispatch((0, _UserActions.deleteTitle)(id));
    },
    intialize: function intialize() {
      return dispatch((0, _UserActions.intialize)());
    },
    clickTitle: function clickTitle(id) {
      return dispatch((0, _UserActions.clickTitle)(id));
    },
    callbackWatcherSaga: function callbackWatcherSaga(id, title, callbackFn) {
      return dispatch((0, _UserActions.callbackWatcher)(id, title, callbackFn));
    }
  };
};

TitleSection.propTypes = {
  classes: _propTypes.default.object.isRequired
};

var _default = (0, _compose.default)((0, _styles.withStyles)(useStyles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(TitleSection);

exports.default = _default;