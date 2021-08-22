const polybius = require("../src/polybius").polybius;
const expect = require("chai").expect;

describe("polybius function [personal tests]", () => {
  it("should encode a string of letters into a string of numbers.", () => {
    const expected = "44513444";
    const actual = polybius("test");
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in the output", () => {
    const expected = "44324234 4234 11 44513444";
    const actual = polybius("this is a test");
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const expected = "44513444";
    const actual = polybius("tESt");
    expect(actual).to.equal(expected);
  });

  it("should translate the letters i and j to 42", () => {
    const expected = "424242424242";
    const actual = polybius("ijjiij");
    expect(actual).to.equal(expected);
  });

  it("when decoding should return false if the length of input is not even", () => {
    const expected = false;
    const actual = polybius("12345", false);
    expect(actual).to.equal(expected);
  });
});
