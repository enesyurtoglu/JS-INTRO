
//variable hoisting
//let and const are not hoisted
//var is hoisted

//console.timeLog(x);//ReferenceError: Cannot access 'x' before initialization
//const x = 10;

console.log(y);
var y = 10;

//functiion hoisting

sayHi();// This works. goes to the function and returns back to this line
sayHi();

function sayHi(){
    console.log('Hi');
}














