const polybius = require("../src/polybius").polybius;
const expect = require("chai").expect;

describe("polybius function [personal tests]", () => {
  it("should encode a string of letters into a string of numbers.", () => {
    const expected = "44513444";
    const actual = polybius("test");
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces when encoding", () => {
    const expected = "44324234 4234 11 44513444";
    const actual = polybius("this is a test");
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const expected = "44513444";
    const actual = polybius("tESt");
    expect(actual).to.equal(expected);
  });

  it("should encode the letters i and j to 42", () => {
    const expected = "424242424242";
    const actual = polybius("ijjiij");
    expect(actual).to.equal(expected);
  });

  it("should maintin spaces when decoding", () => {
    const expected = "a test a test a test";
    const actual = polybius("11 44513444 11 44513444 11 44513444", false);
    expect(actual).to.equal(expected);
  });

  it("when decoding should return false if the length of input is not even", () => {
    const expected = false;
    const actual = polybius("12345", false);
    expect(actual).to.equal(expected);
  });

  it("should decode a string of numbers into a string of letters", () => {
    const expected = "message";
    const actual = polybius("23513434112251", false);
    expect(actual).to.equal(expected);
  });

  it("should decode the number 42 to (i/j)", () => {
    const expected = "(i/j)(i/j)(i/j)(i/j)(i/j)";
    const actual = polybius("4242424242", false);
    expect(actual).to.equal(expected);
  });
});
