
let fullName = 'John Doe'; // String variable declaration

console.log(fullName); // Output: John Doe

console.log(typeof fullName); // Output: string

let numberOfStudents = 30; // Number variable declaration
let subsPrice = 19.99; // Float variable declaration

console.log(typeof numberOfStudents); // Output: number
console.log(typeof subsPrice); // Output: number

let bigNumber = Number.MAX_SAFE_INTEGER; // BigInt variable declaration
let smallNumber = Number.MIN_SAFE_INTEGER; // Smallest safe integer

let num1 = 9007199254740991; // Valid BigInt
let num2 = 9007199254740992344n; // Valid BigInt with 'n' suffix

let num3 = BigInt(9007199254740991); // Valid BigInt

console.log(typeof num3); // Output: bigint

console.log(43534n+524352n); // Output: 567686n

let b1 = true; // Boolean variable declaration
let b2 = false; // Boolean variable declaration

console.log(typeof b1); // Output: boolean
console.log(typeof b2); // Output: boolean

let age = 16;

let allowed = age>= 16;
console.log(allowed); // Output: true

// false, 0, '', null, undefined, NaN are falsy values

console.log((5 === '5')); // Output: true (type coercion)
console.log((5 === 5)); // Output: true (strict equality)
console.log((5 !== '5')); // Output: false (type coercion)
console.log((5 !== 5)); // Output: false (strict inequality) 

console.log((5 == 5));// Output: true (loose equality)
console.log((5 != 5)); // Output: false (loose inequality)
console.log((5 > 3)); // Output: true (greater than)
console.log((5 < 3)); // Output: false (less than)
console.log((5 >= 5)); // Output: true (greater than or equal to)
console.log((5 <= 5)); // Output: true (less than or equal to) 

console.log(typeof (5 === '5')); // Output: boolean
console.log(typeof (5 === 5)); // Output: boolean
console.log(typeof (5 !== '5')); // Output: boolean
console.log(typeof (5 !== 5)); // Output: boolean   

console.log(typeof (5 == '5')); // Output: boolean (loose equality)
console.log(typeof (5 != '5')); // Output: boolean (loose inequality)
console.log(typeof (5 > 3)); // Output: boolean (greater than)
console.log(typeof (5 < 3)); // Output: boolean (less than)
console.log(typeof (5 >= 5)); // Output: boolean (greater than or equal to)
console.log(typeof (5 <= 5)); // Output: boolean (less than or equal to)

let tomororow = undefined; // Undefined variable declaration
let notDefined; // Also undefined variable declaration  

let SSN = null; // Null variable declaration
console.log(SSN); // Output: null
console.log(typeof SSN); // Output: object (this is a known JavaScript quirk)

//null and undefined are both used to represent absence of value, but they are different types
//null represents intentional absence of value, while undefined means a variable has been declared but not assigned a value

let s1 = Symbol('Foo'); // Symbol variable declaration
let s2 = Symbol('Bar'); // Another Symbol variable declaration
let s3 = Symbol('XOX'); // Yet another Symbol variable declaration

console.log(s1);
console.log(s2);
console.log(s3);

console.log(typeof s1);
console.log(typeof s2);
console.log(typeof s3);