import { getRandomNumber } from './../utils/MathHelper.js';

/*Task-1
Assume you are given a number between 1 and 100 (both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100
*/

const number = getRandomNumber(1,100);
console.log(`The random num1 is = ${number}`);


if (number <= 50){
    console.log(`The number is in the first half`);
    if(number <= 25){
        console.log(`The number is in the first quarter`);
    }
    else if (number >= 26 && number <= 50) {
        console.log(`The number is in the second querter`);
    }   
}  
else{
    console.log(`The number is in the second half`);
}
    if(number >= 51 && number <= 75 ){
        console.log(`The number is in the third quarter`);
    }
    else if (number >= 75) {
        console.log(`The number is in the fourth quarter`);
    };

/*Task-2
Assume you are given 3 numbers between 1 and 100 (both 1 and 100 are included).

Print true if they are all even numbers.
Otherwise, print false
*/


function isEven (n1,n2,n3){
    n1 % 2 === 0 && n2  % 2 === 0 && n3  % 2 === 0  ? console.log('True') : console.log('False');
}
    let n1 = getRandomNumber(1,100);
    let n2 = getRandomNumber(1,100);
    let n3 = getRandomNumber(1,100);
    console.log(n1,n2,n3);
isEven(n1,n2,n3);
    
/*Task-3
Assume you are given a single character.
Find if the given character is a letter, digit, whitespace or special.
*/

function findCharType (ch) {
    let char = ch[0].charCodeAt(0);

    if (char === 32 || char === 0){
        console.log(`The char is a SPACE`);
    }
    else if (char >= 48 && char <= 57){
        console.log(`The char is a DIGIT`);
    }
    else if (char >= 65 && char <= 90 || char >= 97 && char <= 122){
        console.log(`The char is a LETTER`);
    }
    else {
        console.log(`The char is a SPECIAL`)
    }
};
findCharType('A')

/*Task-4
Write a function named hasBlue() which takes a string argument and 
returns true if the string has an occurrence of blue word, returns false otherwise.

NOTE: Ignore upper/lower cases.
Examples:
hasBlue("Hello World")   		-> false
hasBlue("Javabluescript")   	-> true
hasBlue("Tech Blue Global")   	-> true
hasBlue("1234")   		-> false
hasBlue("ABLUEC")   
*/

function hasBlue (str) {
   return str.includes('blue');
};

console.log(hasBlue('bluedot'));

/*Task-5
Write a function named startT() which takes a string argument and 
returns true if the string start with letter T, returns false otherwise.

NOTE: Ignore upper/lower cases.
Examples:
startT("Hello World")   	-> false
startT("typescript")   	-> true
startT("TechGlobal")   	-> true
startT("1234")   	-> false
startT("ABC")   	-> false
*/

function startT(str){
    console.log(str.startsWith('T'));
}

startT('Tango');


