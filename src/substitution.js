// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet = [], encode = true) {
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

    function changeDecode(char) {
      return char === " " ? char : realAlphabet[char];
    }

    function changeEncode(char) {
      return char === " " ? char : alphabet[char];
    }

    //////////////////////////
    //helper functions above//
    //////////////////////////

    if (alphabet.length > 26 || alphabet.length < 26 || alphabet.length === 0) {
      return false;
    }

    const dupeCheck = [];
    for (let i = 0; i < alphabet.length; i++) {
      if (dupeCheck.includes(alphabet[i])) {
        return false;
      } else {
        dupeCheck.push(alphabet[i]);
      }
    }

    if (encode === false) {
      let numInput = [];
      for (let char of input) {
        char = char.toLowerCase();
        if (
          char === " "
            ? numInput.push(char)
            : numInput.push(alphabet.indexOf(char))
        );
      }
      return numInput.map((num) => changeDecode(num)).join("");
    } else {
      let copyInput = [];
      for (let char of input) {
        char = char.toLowerCase();
        if (
          char === " "
            ? copyInput.push(char)
            : copyInput.push(realAlphabet.indexOf(char))
        );
      }
      return copyInput.map((num) => changeEncode(num)).join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
