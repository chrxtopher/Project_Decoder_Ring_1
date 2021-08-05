// Write your tests here!
const caesar = require("../src/caesar").caesar;
const expect = require("chai").expect;

describe("caesar function", () => {
  it("should map each letter of a string to a number that references that letter of the alphabet", () => {
    const expected = "012345";
    const actual = caesar("abcdef", 1, true);
    expect(actual).to.equal(expected);
  });
});
