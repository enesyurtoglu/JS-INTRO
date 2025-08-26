
let num = 5;

num = num + 5; // Add 5 to num
console.log(num); // Output: 10

num += 5; // Shorthand for num = num + 5
console.log(num); // Output: 15

let n1 = 10;

n1 *= 2; 
n1 /= 4;
n1 **= 3;

console.log(n1); // Output: 125 (10 * 2 / 4 = 5, then 5 ** 3 = 125)

let n2 = 7;

n2 += ++n2;
n2 /= 3;
console.log(n2++ % 3); // Output: 2

let n3 = 20;
let n4 = 3;

n3 += (n4 -= 1);// n4 = 2, n3 = 22
--n3; // n3 = 21
console.log(--n3 * ++n4); // n3 = 20, n4 = 3 --> 60

lLet v1 = 8;
let v2 = '8';

console.log(v1 == v2); // Output: true (loose equality, type coercion)
console.log(v1 === v2); // Output: false (strict equality, no type coerc

//Difference between loose and strict equalityion)
//== compares values with only value
//=== compares values both value and type

console.log(3 != '3'); // Output: false (loose inequality, type coercion)
console.log(3 !== '3'); // Output: true (strict inequality, different types)