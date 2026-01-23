// Number

// An Integer is an whole number, positive, negative, or zero.
let myInteger = 42;
console.log("Integer:", myInteger); // Output: Integer: 42
console.log(myInteger + 8)

let myStringNumber = "42";
console.log(Number(myStringNumber)); // Output: String Number: 42

console.log(myInteger + Number(myStringNumber)); // Output: 84
console.log(myInteger === Number(myStringNumber));

// Always remember that 0 is false and any other number is true
console.log(Number(true));


// Another example

const myNumber = 42;
const myFloat = 42.287;
const myString = "42.05";

// Number Methods 
// 1. The Number.isInteger() method determines whether the passed value is an integer.

// 2. The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns Nan

// 3. The toFixed() method formats a number according to how many decimal points you provide as the parameter.

console.log(myFloat.toFixed(2));