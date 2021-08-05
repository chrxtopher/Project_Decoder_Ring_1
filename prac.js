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
let shift = 2;

const myName = "christopher roddy.";
let copyName = [];
let newArr = [];
for (char of myName) {
  char = char.toLowerCase();
  if (alphabet.includes(char)) {
    let xChar = alphabet.indexOf(char);
    copyName.push(xChar);
  } else {
    copyName.push(char);
  }
}
console.log(copyName);

for (let i = 0; i < copyName.length; i++) {
  let chosen = copyName[i];
  if (chosen === " " || chosen === ".") {
    newArr.push(chosen);
  } else {
    chosen += shift;
    newArr.push(chosen);
  }
}
let shiftedCopy = newArr
  .map((number) => adjust(number))
  .map((adjustedNum) => adjust2(adjustedNum));

console.log(`${shiftedCopy.join("")}`);

///////////////////
///////////////////

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

function adjust2(num) {
  if (num === "." || num === " ") {
    return num;
  } else {
    num = alphabet[num];
    return num;
  }
}
