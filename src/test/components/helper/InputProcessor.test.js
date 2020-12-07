import { expect } from "chai"

import {validate} from "./../../../../src/components/helper/InputProcessor"

describe("validate", function() {
    it ("validate titleTypeNotPresentError", function(){
        let input = {"titleTypeNotPresent": "testTitle"}
        expect(validate(input).error).exist;
    })

    it ("validate titleTypeIncorrectError", function() {
        let input = {"titleType": "testTitle"}
        expect(validate(input).error).exist;
    })

    it ("validate titleTypeValid", function() {
        let input = {"titleType": "chips", "data": []}
        expect(validate(input) === null);
    })
})