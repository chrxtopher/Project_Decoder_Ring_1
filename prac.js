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

console.log(newArr);

// let shiftedCopy = copyName
//   .map((num) => num + shifted)
//   .map((number) => adjust(number));

// let shiftedName = shiftedCopy.map((num) => (num = alphabet[num]));

// for (let i = 0; i < shiftedName.length; i++) {
//   if (shiftedName[i] === undefined) {
//     shiftedName[i] = " ";
//   }
// }

// let result = shiftedName.join("");
// console.log(result);

// function adjust(num) {
//   if (num > 25) {
//     let tooHigh = num - 25;
//     num = -1 + tooHigh;
//   } else if (num < 0) {
//     let tooLow = num + 25;
//     num = 25 - tooLow;
//   }
//   return num;
// }
