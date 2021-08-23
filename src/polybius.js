// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    //////////////////////////
    //helper functions below//
    //////////////////////////
    const polybiusSquare = [
      { num: 11, letter: "a" },
      { num: 21, letter: "b" },
      { num: 31, letter: "c" },
      { num: 41, letter: "d" },
      { num: 51, letter: "e" },
      { num: 12, letter: "f" },
      { num: 22, letter: "g" },
      { num: 32, letter: "h" },
      { num: 42, letter: "i" },
      { num: 42, letter: "j" },
      { num: 52, letter: "k" },
      { num: 13, letter: "l" },
      { num: 23, letter: "m" },
      { num: 33, letter: "n" },
      { num: 43, letter: "o" },
      { num: 53, letter: "p" },
      { num: 14, letter: "q" },
      { num: 24, letter: "r" },
      { num: 34, letter: "s" },
      { num: 44, letter: "t" },
      { num: 54, letter: "u" },
      { num: 15, letter: "v" },
      { num: 25, letter: "w" },
      { num: 35, letter: "x" },
      { num: 45, letter: "y" },
      { num: 55, letter: "z" },
    ];

    function decodeInput(input) {
      let coupledInput = input.match(/.{1,2}/g);
      for (let i = 0; i < coupledInput.length; i++) {
        for (let j = 0; j < polybiusSquare.length; j++) {
          if (coupledInput[i] == polybiusSquare[j].num) {
            coupledInput[i] = polybiusSquare[j].letter;
          }
        }
      }
      return coupledInput.join("");
    }

    function checkCompatiblity(string) {
      let lengthCheck = string.split(" ").join("").split("");
      return (lengthCheck.length / 2) % 1 === 0;
    }

    //////////////////////////
    //helper functions above//
    //////////////////////////

    if (encode === true) {
      let splitInput = input.toLowerCase().split("");

      for (let i = 0; i < splitInput.length; i++) {
        if (splitInput[i] !== " ") {
          let found = polybiusSquare.find(
            (coord) => coord.letter === splitInput[i]
          );
          splitInput[i] = found.num;
        }
      }

      return splitInput.join("");
    } else if (checkCompatiblity(input) === false) {
      return false;
    } else {
      polybiusSquare[8].letter = "(i/j)";
      polybiusSquare[9].letter = "(i/j)";

      return input
        .split(" ")
        .map((word) => decodeInput(word))
        .join(" ");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
