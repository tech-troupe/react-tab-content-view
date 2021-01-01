"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateInputs = exports.processInput = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var processInput = function processInput(src, titleType) {
  var validation_result = validateInputs(src, titleType);

  if (validation_result) {
    return [validation_result];
  }

  var titleId = 1;

  var processedData = _objectSpread({}, src);

  processedData.allTitles = [];
  processedData.displayedTitles = [];
  processedData.allTabs = [];
  processedData.closedTitle = null;
  processedData.data.map(function (group, i) {
    processedData.data[i] = _objectSpread(_objectSpread({}, group), {}, {
      titleId: titleId
    });
    processedData.allTitles.push(titleId);

    if (group.default === true) {
      processedData.allTabs.push(titleId);
      processedData.activeTitle = titleId;
      processedData.defaultTitle = titleId;
    }

    processedData.displayedTitles.push(titleId);
    titleId++;
  });

  if (!processedData.activeTitle) {
    processedData.activeTitle = 0;
    processedData.defaultTitle = 0;
  }

  return [processedData, processedData.defaultTitle];
};

exports.processInput = processInput;

var validateInputs = function validateInputs(src, titleType) {
  if (!titleType || titleType === undefined) {
    return null;
  }

  if (titleType !== "checkboxes" && titleType !== "buttons" && titleType !== "chips") {
    return {
      error: "Input titleType should be one of {checkbox, button, chips}"
    };
  }

  var foundDefault = false;
  var foundMoreThanOneDefault = false;
  src.data.map(function (group) {
    if (group.default !== null && group.default === true) {
      if (foundDefault) {
        foundMoreThanOneDefault = true;
      }

      foundDefault = true;
    }
  });

  if (foundMoreThanOneDefault) {
    return {
      error: "Found more than one default tab"
    };
  }

  return null;
};

exports.validateInputs = validateInputs;