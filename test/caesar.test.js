// Write your tests here!
const caesar = require("../src/caesar").caesar;
const expect = require("chai").expect;

describe("caesar function", () => {
  it("should shift each letter to the right by the shift amount inputted", () => {
    const expected = "bcdefg";
    const actual = caesar("abcdef", 1, true);
    expect(actual).to.equal(expected);
  });

  it("should allow for shifts to the left with a negative shift input", () => {
    const expected = "abcdef";
    const actual = caesar("bcdefg", 1, false);
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const expected = "bcdefg";
    const actual = caesar("AbCdeF", 1, true);
    expect(actual).to.equal(expected);
  });

  it("should return false if shift is 0, less than 25, or higher than 25", () => {
    const expected = false;
    const actual = caesar("Caleb Roddy", 28, false);
    expect(actual).to.equal(expected);
  });

  it("it should allow for shifts that surpass either end of the alphabet", () => {
    const expected = "yzabc";
    const actual = caesar("xyzab", 1, true);
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces and other symbols not in the alphabet", () => {
    const expected = "bzkda qnccx. ";
    const actual = caesar("Caleb Roddy. ", 1, false);
    expect(actual).to.equal(expected);
  });
});
