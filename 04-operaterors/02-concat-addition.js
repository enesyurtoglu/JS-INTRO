
let n1 = 3;
let n2 = '5';
let n3 = 4;
let n4 = '10';

console.log(n1 + n2);// Output: 35 (string concatenation)
console.log(n1 + n3 + n4 + n2);// Output: 7105 (string concatenation)
console.log(n1 + (n3 + n4) + n2); // Output: 34105 (string concatenation with parentheses)

console.log(n2 * n1); // Output: 15 (string to number conversion and multiplication)
// JasaScript is a dynamically typed language, so it converts strings to numbers when necessary, (interpereted language)

console.log('hello' / 2);// Output: NaN (not a number, division by a string)
console.log('hello' / 'hi');// Output: NaN (not a number, division by a string)


console.log(5 * true); // Output: 5 (boolean to number conversion, true is 1
console.log(5 * false); // Output: 0 (boolean to number conversion, false is 0)

console.log(3 + true); // Output: 4 (boolean to number conversion, true is 1
console.log(5 * ''); // Output: 0 (empty string to number conversion, empty string is 0

console.log('The sum of 3 and 5 is: ' + 3 + 5); // Output: The sum of 3 and 5 is: 35 (string concatenation, evaluated left to right)
console.log('The sum of 3 and 5 is: ' + (3 + 5)); // Output: The sum of 3 and 5 is: 8 (string concatenation with expression)

console.log('The difference between 5 and 3 is: ' + (5 - 3)); // Output: The difference between 5 and 3 is: 2 (string concatenation with expression)
console.log('The difference between 5 and 3 is: ' + 5 - 3); // Output: NaN (string concatenation with expression, evaluated left to right)

let today = 'Sunday';

console.log('Today is: ' + today); // Output: Today is: Sunday (string concatenation)
console.log(`Today is: ${today}`);// Output: Today is: Sunday (template literal for string interpolation)