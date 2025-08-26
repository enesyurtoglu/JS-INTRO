
let age = 25;

age++; // Increment age by 1
age++; // Increment age by 1 again
console.log(age); // Output: 26

let quantity = 10;
quantity--; // Decrement quantity by 1
--quantity; // Decrement quantity by 1 again

//Difference between post-decrement and pre-decrement
let i = 10;
let j = i++; // Post increment: j gets the value of i before incrementing

console.log( `i valiue: ${i} and the j value: ${j}` ); // Output: i value: 11 and the j value: 10

let k = 10;
let m = ++k; // Pre increment: m gets the value of k after incrementing

console.log( `k valiue: ${k} and the m value: ${m}` ); // Output: i value: 11 and the j value: 10

let multiplier = 5;

console.log(10 * multiplier++); // Output: 50 (post-increment, returns the value before incrementing)
console.log(multiplier); // Output: 6 (after incrementing)  

console.log(++multiplier); // Output: 7 (pre-increment, returns the value after incrementing)


let counter = 5;
let result = counter++;// counter = 5, result = 5 (post-increment)

console.log(++counter * result);// resullt = 5, counter = 7, Output: 35 (pre-increment, counter is incremented before multiplication)