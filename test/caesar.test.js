// Write your tests here!
const caesar = require("../src/caesar").caesar;
const expect = require("chai").expect;

describe("caesar function", () => {
  it("should shift each letter to the right but the shift amount inputted", () => {
    const expected = "bcdefg";
    const actual = caesar("abcdef", 1, true);
    expect(actual).to.equal(expected);
  });
});
