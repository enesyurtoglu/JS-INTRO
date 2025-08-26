
console.log(Math.PI); // 3.141592653589793

let a1 = Math.abs(-5-3) + 4;
console.log(a1); // 12
// we use absolute value to ensure the result is positive i.e. age difference

let age1 = 25;
let age2 = 30;

console.log(`Age difference: ${Math.abs(age1 - age2)}`); // Age difference: 5

// ceil(); floor(); round(); trunc(); methods for rounding numbers

console.log(Math.trunc(10.99)); // 10
console.log(Math.trunc(10.01)); // 10

console.log(Math.round(10.49)); // 10
console.log(Math.round(10.50)); // 11
console.log(Math.round(10.51)); // 11  

console.log(Math.ceil(10.01)); // 11
console.log(Math.ceil(10.99)); // 11
console.log(Math.ceil(10.00)); // 10

console.log(Math.floor(10.01)); // 10
console.log(Math.floor(10.99)); // 10
console.log(Math.floor(10.00)); // 10

//pow(); method
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(3, 2)); // 9

// sqrt(); method
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(25)); // 5    
console.log(Math.sqrt(5).toFixed(2)); // 2.24

// min(); max(); methods
console.log(Math.max(10, 20, 30)); // 10
console.log(Math.max(10, 20, 30)); // 30

console.log(Math.min(10, 20, 30)); // 10
console.log(Math.min(10, 20, 30)); // 30



