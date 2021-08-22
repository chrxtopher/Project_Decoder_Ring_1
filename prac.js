///
const string = "12 34 5";
const splitString = string.split(" ").join("").split("");
// console.log(splitString);

console.log((splitString.length / 2) % 1 === 0);
