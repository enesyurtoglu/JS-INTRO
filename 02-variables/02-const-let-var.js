
let num1 = 1;

num1 = 11; // can be reassigned
console.log(num1); // Output: 11        

const num2 = 2; // cannot be reassigned
// num2 = 22; // Uncommenting this line will cause an error: "Assignment to constant variable."
console.log(num2); // Output: 2 

var num3 = 3; // can be reassigned
num3 = 33; // can be reassigned
console.log(num3); // Output: 33    

//const num4;
// num4 = 4; // Uncommenting this line will cause an error: "Missing initializer in const declaration."
//console.log(num4); // Output: undefined (if declared but not initialized)

//var is not preferred in modern JavaScript due to its function scope and hoisting behavior.
// let and const are preferred for block scope and better readability.
// Note: Use let for variables that will change, const for constants, and var for legacy code.

// Summary:
// - Use `let` for variables that may change.
// - Use `const` for variables that should not change.
// - Use `var` for legacy code, but prefer `let` and `const`
// - `let` and `const` have block scope, while `var` has function scope.
// - `const` must be initialized at the time of declaration, while `let` and `var` can be declared without initialization.
// - `let` allows reassignment, while `const` does not.

