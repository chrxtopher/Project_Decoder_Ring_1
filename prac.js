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
let shifted = 2;

const myName = "christopher roddy";
let copyName = [];
for (char of myName) {
  let xChar = alphabet.indexOf(char);
  if (xChar === -1) {
    copyName.push(" ");
  } else {
    copyName.push(xChar);
  }
}
console.log(copyName);
let shiftedCopy = copyName
  .map((num) => num + shifted)
  .map((number) => adjust(number));
console.log(shiftedCopy);

let shiftedName = shiftedCopy.map((num) => (num = alphabet[num]));
console.log(shiftedName);

function adjust(num) {
  if (num > 25) {
    let exceeded = num - 25;
    num = -1 + exceeded;
  } else {
    num = num;
  }
  return num;
}
