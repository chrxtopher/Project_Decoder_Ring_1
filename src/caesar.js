// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    ///
    if (shift === 0 || shift > 25 || shift < -25) {
      return false;
    }

    let copyInput = [];
    let newCopy = [];

    if (encode === false) {
      shift = shift * -1;
    }
    for (let char of input) {
      char = char.toLowerCase();
      if (realAlphabet.includes(char)) {
        copyInput.push(realAlphabet.indexOf(char));
      } else {
        copyInput.push(char);
      }
    }

    for (let i = 0; i < copyInput.length; i++) {
      if (copyInput[i] !== " " && copyInput[i] !== ".") {
        copyInput[i] += shift;
      }
      newCopy.push(copyInput[i]);
    }

    return newCopy.map(adjust).join("");
  }
  ///
  return {
    caesar,
  };
})();

//////////////////////////
//helper functions below//
//////////////////////////

const realAlphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function adjust(num) {
  if (num === "." || num === " ") {
    return num;
  }
  if (num > 25) {
    num = num - 26;
  } else if (num < 0) {
    num = num + 26;
  }
  return realAlphabet[num];
}
module.exports = { caesar: caesarModule.caesar };
