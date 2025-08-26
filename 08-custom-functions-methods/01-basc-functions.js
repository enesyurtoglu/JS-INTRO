
function printHi(){
    console.log('Hi');
}

printHi();
printHi();

function hiName(name){
    console.log(`Hi ${name}`);
}

hiName('Enes');

//void method-functions --> not rerurning any value
//return method-functions --> returs a value

// declare a function with two args. (greet, name)
// print Good morning Enes 

function greetingName(greeting, name){
    console.log(`${greeting} ${name}!`);
}

greetingName('Good Morning', 'Enes');


// Create a return function

function multiplyTweNums(num1, num2){
    return num1 * num2; // let result = num1 * num2 then return result;
}

let r1 = multiplyTweNums(2,5);
console.log(r1);

















