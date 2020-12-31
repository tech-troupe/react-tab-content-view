"use strict";

var _chai = require("chai");

var _InputProcessor = require("./../../../../src/components/helper/InputProcessor");

describe("validate", function () {
  it("validate titleTypeNotPresent", function () {
    var input = {
      data: []
    };
    (0, _chai.expect)((0, _InputProcessor.validateInputs)(input, null) === null);
  });
  it("validate titleTypeUndefined", function () {
    var input = {
      data: []
    };
    (0, _chai.expect)((0, _InputProcessor.validateInputs)(input, undefined) === null);
  });
  it("validate titleTypeIncorrectError", function () {
    var input = {};
    (0, _chai.expect)((0, _InputProcessor.validateInputs)(input, "chip").error).exist;
  });
  it("validate titleTypeValid", function () {
    var input = {
      data: []
    };
    (0, _chai.expect)((0, _InputProcessor.validateInputs)(input, "chips") === null);
  });
});