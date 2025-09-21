/*TASK-1
Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript") 	-> false
hasUpperCase("John") 		-> true
hasUpperCase("$125.0") 	-> false
hasUpperCase("") 		-> false
*/


function hasUpperCase(str){
    for (let i = 0; i < str.length; i++){
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
           return true;
        }
    }
    return false;
}
console.log(hasUpperCase('Java'));


function hasUpperCase(str) {
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    // Check if charCode is in the range of uppercase letters (A-Z)
    if (charCode >= 65 && charCode <= 90) {
      return true;
    }
  }
  return false;
}

console.log(hasUpperCase('Java'));

/*TASK-2
Write a function named noDigit() which takes a string argument and 
returns a new string with all digits removed from the original string​.
Examples:
noDigit("") 			-> ""
noDigit("Javascript") 		-> "Javascript"
noDigit("123Hello") 		-> "Hello"
noDigit("123Hello World149") 	-> "Hello World”
noDigit("123Tech456Global149") 	-> "TechGlobal"
*/
const newArr = [];
function noDigit(str){
    //const arr = str.split();
    for (let i = 0; i < str.length; i++){
        if (!(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57)){
            newArr.push(str[i]);
        }
    }
    return newArr.join('');
}

console.log(noDigit('123Hello'));

/*TASK-3
Write a function named noVowel() which takes a string argument and 
returns a new string with all vowels removed from the original string​.
Examples:
noVowel("TechGlobal") 	-> "TchGlbl"
noVowel("AEOxyz") 	-> "xyz"
noVowel("Javascript") 	-> "Jvscrpt"
noVowel("") 	-> ""
noVowel("125$") 	-> "125$"
*/


/*TASK-4
Write a function named no13() which takes an array of numbers as argument and 
return a new array with all 13s replaced with 0s. ​
Examples:
no13([1, 2, 3 ,4]) 		-> [1, 2, 3 ,4] 
no13([13, 2, 3]) 		-> [0, 2, 3]
no13([13, 13, 13 , 13, 13]) 	-> [0, 0, 0, 0, 0]
no13([]) 			-> []
*/

function no13(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 13){
            arr[i] = 0;
        }
    }
    return arr;
}

console.log(no13([13, 2, 3]))

/*TASK-5
Write a function named middleInt() which takes three number arguments and return the middle number. ​
Examples:
middleInt(1, 2, 2) 	-> 2
middleInt(5, 5, 8) 	-> 5
middleInt(5, 3, 5) 	-> 5
middleInt(1, 1, 1) 	-> 1
middleInt(-1, 25, 10) 	-> 10
*/
let minNum = Infinity; 
let maxNum = 0; 
let middleNum;
function middleInt(n1, n2, n3){
    const arr = [n1, n2, n3];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] < minNum){
            minNum = arr[i];
        }
        if(arr[i] > maxNum){
            maxNum = arr[i];
        }
        if(arr[i] <= maxNum && arr[i] >= minNum){
            middleNum = arr[i];
        }
    }
    return middleNum;
    
}
console.log(middleInt(-1, 25, 10))

/*TASK-6
Write a function named sumOfDigits() which takes a string argument and 
returns sum of all digits from the original string. ​
Examples:
sumOfDigits("Javascript") 	-> 0
sumOfDigits("John’s age is 29") 	-> 11
sumOfDigits("$125.0") 		-> 8
sumOfDigits("") 		-> 0
*/

let sum = 0; 
function sumOfDigits(str){
    const arr = [];
    for (let i = 0; i < str.length; i++){
        if ((str[i].charCodeAt(i) >= 48 && str[i].charCodeAt(0) <= 57)){
            arr.push(str[i]);
        }
    }
    for (const each of arr){
        sum += each;
    }
    return sum;
}

console.log(sumOfDigits("John’s age is 29"))

/*TASK-7
Write a function named arrFactorial() which takes an array of numbers as argument and 
return the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4]) 		->  [1, 2, 6, 24]
arrFactorial([0, 5]) 		-> [1,120]
arrFactorial([5 , 0, 6]) 		-> [120, 1, 720]
arrFactorial([]) 		-> []
*/

function findFactorial(num){
    let num1 = 1;
    for(let i = 1; i <= num; i++){
        num1 *= i;
        }
    return num1
}
console.log(findFactorial(4))

function arrFactorial(arr){
    for (let i = 0; i < arr.lenght; i++){
        arr[i] = findFactorial(arr[i])
    }
    return arr;
}

console.log(arrFactorial([1, 2, 3 ,4]));

/*TASK-8
Write a function named categorizeCharacters() which takes a string word as argument and 
return an array as letters at index of 0, digits at index of 1 and specials at index of 2. 
Examples:
categorizeCharacters("1234") 	-> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%") 	-> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%") 	-> [ 'abc', '123', '$%%' ]
*/


































