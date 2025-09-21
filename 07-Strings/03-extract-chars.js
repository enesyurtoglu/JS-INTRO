
let company = 'TechGlobal';


//Get char using property acess
console.log(company[0]); // T
console.log(company[4]); // G

//Getting the first and last character
let greeting = 'Good Morning';
let firstChar = greeting[0];// G
let lastChar = greeting[greeting.length - 1]; 

console.log(firstChar); // G
console.log(lastChar); // g

// Getting the first and last character using charAt()
let ctiy = 'Chicago';

console.log(ctiy.charAt(2)); // i
console.log(ctiy.charAt(ctiy.length - 1)); // o

// Getting the first and last character using at()
let color = 'Purple';
console.log(color.at(0)); // P
console.log(color.at(color.length -1)); // e
console.log(color.at(-1));// This is the most used one along with str[0] for the first char

//EDGE CASES
let name = 'Max';
console.log(name[-1]); // undefined
console.log(name.at(3)); // undefined

console.log(name.charAt(-1)); // empty string
console.log(name.charAt(3)); // empty string

console.log(name.at(-1)); // 'x'
console.log(name.at(3)); // undefined

console.log(name.at(-1)); // 'x'
console.log(name.at(-2));
console.log(name.at(-3));
console.log(name.at(-4));

// Get the char code using charCodeAt()
let str = 'Hello';
console.log(str.charCodeAt(0)); // 72
console.log(str.charCodeAt(1)); // 101
console.log(str.charCodeAt(4)); // 111  
console.log(str.charCodeAt(5)); // NaN

// slice() and substring() working with negative indices
// slice()     --> YES
// substrin(). --> NO, it converts to zero



