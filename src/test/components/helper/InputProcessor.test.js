import { expect } from "chai";

import { validateInputs } from "./../../../../src/components/helper/InputProcessor";

describe("validate", function () {
  it("validate titleTypeNotPresent", function () {
    let input = { data: [] };
    expect(validateInputs(input, null) === null);
  });

  it("validate titleTypeUndefined", function () {
    let input = { data: [] };
    expect(validateInputs(input, undefined) === null);
  });

  it("validate titleTypeIncorrectError", function () {
    let input = {};
    expect(validateInputs(input, "chip").error).exist;
  });

  it("validate titleTypeValid", function () {
    let input = { data: [] };
    expect(validateInputs(input, "chips") === null);
  });
});
