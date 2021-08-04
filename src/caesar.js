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
    let copyName = [];
    let newCopy = [];
    for (char of input) {
      char = char.toLowerCase();
      if (alphabet.includes(char)) {
        let xChar = alphabet.indexOf(char);
        copyName.push(xChar);
      } else {
        copyName.push(char);
      }
    }

    for (let i = 0; i < copyName.length; i++) {
      if (copyName[i] === " " || copyName[i] === ".") {
        newCopy.push(copyName[i]);
      } else {
        copyName[i] += shift;
        newCopy.push(copyName[i]);
      }
    }

    let shiftedCopy = newCopy.map((number) => adjust(number));

    let shiftedName = shiftedCopy.map((num) => (num = alphabet[num]));

    return `${shiftedName.join("")}`;
  }
  ///
  return {
    caesar,
  };
})();

//////////////////////////
//helper functions below//
//////////////////////////

const alphabet = [
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
    let tooHigh = num - 25;
    num = -1 + tooHigh;
  } else if (num < 0) {
    let tooLow = num + 25;
    num = 25 - tooLow;
  }
  return num;
}

module.exports = { caesar: caesarModule.caesar };
