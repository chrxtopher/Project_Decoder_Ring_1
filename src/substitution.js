// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet = [], encode = true) {
    //////////
    if (alphabet.length > 26 || alphabet.length < 26 || alphabet.length === 0) {
      return false;
    }

    let dupeCheck = [];
    for (let i = 0; i < alphabet.length; i++) {
      if (dupeCheck.includes(alphabet[i])) {
        return false;
      } else {
        dupeCheck.push(alphabet[i]);
      }
    }

    let numInput = [];
    let copyInput = [];

    for (let char of input) {
      char = char.toLowerCase();
      if (char === " ") {
        numInput.push(char);
      } else {
        numInput.push(alphabet.indexOf(char));
      }
    }

    for (let char of input) {
      char = char.toLowerCase();
      if (char === " ") {
        copyInput.push(char);
      } else {
        copyInput.push(realAlphabet.indexOf(char));
      }
    }

    if (encode === false) {
      let xInput = numInput.map((num) => changeDecode(num));
      return xInput.join("");
    } else {
      // helper function placed below to keep it in scope
      function changeEncode(char) {
        if (char === " ") {
          return char;
        } else {
          return alphabet[char];
        }
      }

      let yInput = copyInput.map((num) => changeEncode(num));
      return yInput.join("");
    }

    //////////
  }

  return {
    substitution,
  };
})();

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

function changeDecode(char) {
  if (char === " ") {
    return char;
  } else {
    return realAlphabet[char];
  }
}

module.exports = { substitution: substitutionModule.substitution };
