
let num1 = 10.4551;
let num2 = 5;
let num3 = 10;

console.log(num1.toFixed(2)); // "10.46" - rounds to 2 decimal places
console.log(num1.toPrecision(3)); // "10.5" - formats to 3 significant digits NOT USED FREQUENTLY
console.log(num1.toExponential(2)); // "1.0551e+1" - formats to exponential notation with 2 decimal places  

console.log(num2 + num3); // 15 - adds two numbers
console.log(num2.toString() + num3.toString()); // "510" - converts numbers to strings and concatenates them

console.log(Number.isFinite(5)); // true - checks if num1 is a finite number
console.log(Number.isFinite(Infinity)); // false - checks if num1 is a finite number
console.log(Number.isFinite(-Infinity)); // false - checks if num1 is a finite number
console.log(Number.isFinite('Hi')); // false - checks if 'Hi' is a finite number

console.log(Number.parseInt('10') + 5); // 15 - parses '10' as an integer and adds 5
console.log(Number.parseInt('10.5') + 5); // 15 - parses '10.5' as an integer and adds 5 // parseint CAN NOT parese float numbers
console.log(Number.parseFloat('10.5') + 5); // 15.5 // parses '10.5' as a float and adds 5
console.log(Number.parseFloat('10') + 5); // 15 // parses '10' as a float and adds 5

