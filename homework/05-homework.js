/*Task-1
Write a function named countPos() which takes an array of numbers as an argument and 
returns how many elements are positive​ when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67]) 	-> 3
countPos([-23, -4, 0, 2, 5, 90, 123]) 	-> 4
countPos([0, -1, -2, -3]) 		-> 0


const nums1 = [-45, 0, 0, 34, 5, 67];
let counter = 0;

function countPos(numsArr){
    for(const num of numsArr){
        if(num > 0){
           counter++;
        }
    }
     return counter;
};

console.log(countPos(nums1));
*/

const nums1 = [-23, -4, 0, 2, 5, 90, 123];

function countPos(arr){
    console.log(arr.reduce((acc, curr) => curr > 0 ? acc + 1 : acc, 0));
}

countPos(nums1);



/*Task-2
Write a function named countA() which takes a string argument and 
returns how many A or a there are in the given string when invoked.
NOTE: Ignore case sensitivity. 
Examples:
countA("TechGlobal is a QA bootcamp") 	-> 4
countA("QA stands for Quality Assurance") 	-> 5
countA("Cypress") 			-> 0


let countAstring = 'QA stands for Quality Assurance';
let count = 0;

function countA(str){
    for(let i = 0; i <= str.length - 1; i++){
        if(str[i].toLowerCase() === 'a') count++;
    }
    return count;
}

console.log(countA(countAstring));



let countAstring = 'Cypressaaa';
let count = 0;

function countA(str){
    str.split('').forEach((x) => x.toLowerCase() === 'a' ? count++ : count);
    return count;
}

console.log(countA(countAstring));
*/

let countAstring = 'Cypressaaa';

function countA(str){
    return str.split('').reduce((acc, curr) => curr.toLowerCase() === 'a' ? acc + 1 : acc, 0);
    //return acc;
}

console.log(countA(countAstring));

/*Task-3
Write a function named as countVowels() which takes a string word as an argument and 
returns the count of the vowel letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello") 		-> 2
countVowels("Hello World") 		-> 3
countVowels("JavaScript is fun") 		-> 5
countVowels("") 			-> 0
*/

function countVowels(str){
    return str.split('').reduce((acc, curr) => 
    curr.toLowerCase() === 'a' ? acc + 1 : 
    curr.toLowerCase() === 'e' ? acc + 1 : 
    curr.toLowerCase() === 'i' ? acc + 1 : 
    curr.toLowerCase() === 'o' ? acc + 1 : 
    curr.toLowerCase() === 'u' ? acc + 1 : 
    acc, 0);
}
console.log(countVowels('JavaScript is fun'));

/*Task-4
Write a function named as countConsonants() which takes a string word as an argument and 
returns the count of the consonant letters when invoked.

NOTE: A letter that is not vowel is considered as a consonant letter.Examples:
countConsonants("Hello") 		-> 3
countConsonants("Hello World") 		-> 8
countConsonants("JavaScript is fun") 		-> 12
countConsonants("") 			-> 0
*/

function countConsonants(str){
    return str.split('').reduce((acc, curr) => 
    curr.toLowerCase() !== 'a'  &  
    curr.toLowerCase() !== 'e'  &
    curr.toLowerCase() !== 'i'  & 
    curr.toLowerCase() !== 'o'  & 
    curr.toLowerCase() !== 'u' ? acc + 1 : 
    acc, 0);
}
console.log(countConsonants('JavaScript is fun'));

/*Task-5
Write a function named countWords() which takes a string argument and 
returns the total count of words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords("     Javascript is fun       ") 		-> 3
countWords("Cypress is an UI automation tool.    ") 	-> 6 countWords("1 2 3 4") 				-> 4
*/

let str = '     Javascript is fun       ';
function countWords(str){
    return str.trim().split(' ').length; 
}

console.log(countWords(str));

/*Task-6
Write a function named as factorial() which takes a number as an argument and returns the factorial of the number when invoked.
NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
Examples:
factorial(5) 		-> 120
factorial(4)		-> 24
factorial(0)		-> 1
factorial(1)		-> 1
*/
const { getRandomNumber } = require('./../utils/MathHelper.js');

let num1 = 1;
let rand1 = getRandomNumber(1, 10);
for(let i = 1; i <= rand1; i++){
    num1 *= i;
}
console.log(rand1);
console.log(num1);

/*Task-7
Write a function named as isPalindrome() which takes a string word as an argument and 
returns true if the word is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity
*/

let check = false;
function isPalindrome(str){
    for(let i = 0; i < str.length; i++){
       if(str.split('')[i] === str.split('').reverse()[i]){
        return true;
    } 
    }
}
isPalindrome('civic');

/*Task-8
Write a function named as countMultipleWords() which takes an array as an argument and 
returns the count of the elements that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after the array element.
Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 		-> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 		-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 	-> 4
countMultipleWords([ ]) 					-> 0
*/
const sameWordArray = [ "foo", "bar", "foobar", "     foobar   " ];
let countSameWord = 0;
function countMultipleWords(arr){
    for(let i = 0; i < arr.length; i ++){
        for(let j =i + 1; j < arr.length; j++){
            if(arr[i].trim() === arr[j].trim()){
             countSameWord++;
             break;
            }
        }
    }
    return countSameWord;
}
console.log(countMultipleWords(sameWordArray));

/*Task-9
Write a function named as count3OrLess() which takes a string word as an argument and 
returns the count of the words that has 3 characters or less when invoked.

Examples:
count3OrLess("Hello") 			-> 0
count3OrLess("Hi John") 			-> 1
count3OrLess("JavaScript is fun") 		-> 2
count3OrLess("My name is John Doe") 	-> 3
count3OrLess("") 			-> 0

let count3Less = 0;
function count3OrLess(str){
    
    for(let i = 0; i < str.split(' ').length; i++){
        
        if(str.split(' ')[i].length < 3){
            count3Less++;
        }
    }
    return count3Less;
}
console.log(count3OrLess('JavaScript is fun'));
*/

function count3OrLess(str){
    return str.split(' ').filter((w) => w.length < 3).length;
}
console.log(count3OrLess('JavaScript is fun'));
    
/*Task-10
Write a function named as isPrime() which takes a number as an argument and 
returns true if the number is prime or returns false otherwise when invoked.

NOTE: Mathematically, Prime number is a number that can be divided only by itself 
and 1. It cannot be divided by any other number. 
The smallest prime number is 2 and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.

Examples:
isPrime(5) 		-> true
isPrime(1)		-> false
*/

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}
console.log(isPrime(8));

/*Task-11
Write a function named add() which takes two array of numbers as argument and 
returns a new array with sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]​) 		-> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) 	-> [16, 11, 9,  3, 2, 7, 5, 10, 34]​
add([-5, 6, -3, 11], [5, -6, 3, -11]) 		-> [0, 0, 0, 0]
*/
const arr1 = [3, 0, 0, 7, 5, 10];
const arr2 = [6, 3, 2];
const addedNums = [];

function add(arr1, arr2){
    let minNum = Math.min(arr1.length, arr2.length);
    let maxNum = Math.max(arr1.length, arr2.length);

    for(let i = 0; i < minNum; i++){
        addedNums.push(arr1[i] + arr2[i])
    }
    //return addedNums;

    for(let j = minNum; j < maxNum; j++){
        if(arr1.length > minNum){
            addedNums.push(arr1[j])
        }else[
            addedNums.push(arr2[j])
        ]  
    }
    return addedNums;
}
console.log(add(arr1, arr2));

/*Task-12
Write a function named as removeExtraSpaces() which takes a string word as an argument and 
returns the string back with all extra spaces removed when invoked.

Examples:
removeExtraSpaces("Hello") 		-> "Hello" 
removeExtraSpaces("      Hello    World     ") 	-> "Hello World" 
removeExtraSpaces("     JavaScript is          fun") 	-> "JavaScript is fun”
removeExtraSpaces("") 			-> "" 
*/

let removeSpace = "     JavaScript is          fun";
const removedArray = [];
function removeExtraSpaces(str){
    str.trim().split(' ').forEach((w) => {
        if (w.length >= 1) {
            removedArray.push(w);
        }
    })
    return removedArray.join(' ');
}
console.log(removeExtraSpaces(removeSpace));

/*Task-13
Write a function named findClosestTo10() which takes an array of numbers as argument and 
returns the closest element to 10 from the given array.

NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, return the smaller number.
Examples:
findClosestTo10([10, -13, 5, 70, 15, 57]​) 	-> 5
findClosestTo10([10, -13, 8, 12, 15, -20]) 	-> 8
findClosestTo10([0, -1, -2]) 		-> 0
*/

const nums3 = [10, -13, 5, 70, 15, 57];
let num3;
let diff = Infinity;
function findClosestTo10(arr){
    for(let i = 0; i < arr.length; i++){
        if(Math.abs(arr[i] - 10) < diff){
            diff = arr[i]
        }
    }
    return diff;
}
console.log(findClosestTo10(nums3));

/*Task-14
Write a function named as isEmailValid() which takes a string email as an argument and 
returns true if the email is valid or returns false otherwise when invoked.

NOTE: A VALID EMAIL:
should NOT have any space.
should not have more than one “@” character.
should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
There should be at least characters before @ character.
There should be at least 2 characters between @ and . Characters.
There should be at least 2 characters after the . character.

Examples:
isEmailValid("") 			-> false
isEmailValid("@gmail.com") 		-> false
isEmailValid("johndoe@yahoo") 		-> false
isEmailValid("johndoe@gmail.com") 		-> true
https://www.youtube.com/watch?v=liAasBoD9gQ 
*/

let checkEmail = true; 
function isEmailValid(str){
    if(
        str.includes(' ') |
        str.indexOf('@') !== str.lastIndexOf('@') |
        str.indexOf('@') < 1 |
        (str.indexOf('.') - str.indexOf('@')) < 2 |
        str.length - str.indexOf('.') > 2
    ){
        return false;
    }else{
        return true;
    }
}
console.log(isEmailValid('johndoe@gmail.com'));

/*Task-15
Write a function named as isPasswordValid() which takes a string email as an argument and 
returns true if the password is valid or returns false otherwise when invoked.

NOTE: A VALID PASSWORD:
should have length of 8 to 16 (both inclusive).
should have at least 1 digit, 1 uppercase, 1 lowercase and 1 special char.
should NOT have any space.

Examples:

isPasswordValid("Chicago123$") 		-> true
isPasswordValid("Test1234#") 		-> true

https://www.youtube.com/watch?v=LK5DXTtunpA 

*/

function isPasswordValid(str){

    if(
        str.length >= 8 & str.length <= 16 &
        (code >= 33 && code <= 47) || 
        (code >= 58 && code <= 64) || 
        (code >= 91 && code <= 97) || 
        (code >= 123 && code <= 126)
    ){

    }
}






































