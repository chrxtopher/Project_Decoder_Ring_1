const substitution = require("../src/substitution").substitution;
const expect = require("chai").expect;

describe("substitution function [personal tests]", () => {
  it("should return false if the substitution alphabet length is greater than 26", () => {
    const expected = false;
    const actual = substitution("test message", "soevjtaucqlembzyrvwpk@#$%&!d");
    expect(actual).to.equal(expected);
  });

  it("should return false if the substitution alphabet length is less than 26", () => {
    const expected = false;
    const actual = substitution("test message", "short");
    expect(actual).to.equal(expected);
  });

  it("should return false if the substitution alphabet is missing", () => {
    const expected = false;
    const actual = substitution("no sub alphabet");
    expect(actual).to.equal(expected);
  });

  it("should encode a message based on the given substitution alphabet", () => {
    const expected = "mlgmslggqrl";
    const actual = substitution("testmessage", "qpwolirutyaeskdjfhgmznxbcv");
    expect(actual).to.equal(expected);
  });

  it("should decode a message based on the given substitution alphabet", () => {
    const expected = "testmessage";
    const actual = substitution(
      "mlgmslggqrl",
      "qpwolirutyaeskdjfhgmznxbcv",
      false
    );
    expect(actual).to.equal(expected);
  });

  it("should allow for spaces when encoding or decoding", () => {
    const expected = "test message";
    const actual = substitution(
      "mlgm slggqrl",
      "qpwolirutyaeskdjfhgmznxbcv",
      false
    );
    expect(actual).to.equal(expected);
  });
});
