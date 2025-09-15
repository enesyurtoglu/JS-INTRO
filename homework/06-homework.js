/*Task-1
Write a function named noSpace() which takes a string as argument and 
returns a new string with all the spaces removed.
Examples:
noSpace("") 			->  ""
noSpace("Javascript") 		->  "Javascript"
noSpace("    Hello   ") 		-> "Hello"
noSpace(" Hello World   ") 	-> "HelloWorld”
noSpace("Tech Global") 		-> "TechGlobal"
*/

let removeSpace = "     JavaScript is          fun";
const removedArray = [];
function noSpace(str){
    str.trim().split(' ').forEach((w) => {
        if (w.length >= 1) {
            removedArray.push(w);
        }
    })
    return removedArray.join(' ');
}
console.log(noSpace(removeSpace));

/*Task-2
Write a function named replaceFirstLast() which takes a string argument and 
returns a new string with the first and last characters replaced.

NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("") 		->  ""
replaceFirstLast("Hello") 		->  "oellH"
replaceFirstLast("Tech Global") 	-> "lech GlobaT"
replaceFirstLast("A") 		-> ""
replaceFirstLast("    A      ") 	-> ""
*/

let stry = "I like JavaScript"
const reversedArray = []
let reversedStr = '';

   const words = stry.split(' ');
   for(let i = 0; i <= words.length -1; i++){
    reversedArray.push(words[i].split('').reverse());
   }
   
   for(let i = 0; i < reversedArray.length; i++){
    for(let j = 0; j < reversedArray[i].length; j++){
        reversedArray[i].join('');
    } 
    reversedStr = reversedArray.join('');
   }

   console.log(reversedArray);
   console.log(reversedStr);

/*Task-3
Write a function named hasVowel() which takes a string argument and 
returns true if the string has a vowel, returns false if the string doesn’t contain any vowel letter.

NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("") 		-> false
hasVowel("Javascript") 		-> true
hasVowel("Tech Global") 		-> true
hasVowel("1234") 		-> false
hasVowel("ABC") 		-> true
*/

function hasVowels(str){
    return str.split('').some((w) => 
    w.toLowerCase().includes('a') | 
    w.toLowerCase().includes('e') | 
    w.toLowerCase().includes('i') | 
    w.toLowerCase().includes('o') | 
    w.toLowerCase().includes('u') 
    )
};
console.log(hasVowels('JavaScript'));

/*Task-4
Write a function named checkAge() which takes a number argument to be considered as the yearOfBirth and 
returns a message below based on the given year.

If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
Examples:
checkAge(2015) -> "AGE IS NOT ALLOWED"
checkAge(2007) -> "AGE IS ALLOWED"
checkAge(2050) -> "AGE IS NOT VALID"
checkAge(1920) -> "AGE IS ALLOWED"
checkAge(1800) -> "AGE IS NOT VALID"
*/

let date = new Date();
let currentYear = date.getFullYear();
let message = '';

function checkAge(birth){
    let currentAge = currentYear - birth;
    if(currentAge >= 120 | birth > currentYear)
    {
        message = 'AGE IS NOT VALID';
    }else if (currentAge >= 16 & birth < 120)
    {
        message = 'AGE IS ALLOWED';
    }else
    {
        message = 'AGE IS NOT ALLOWED';
    }
    return message;
}
console.log(checkAge(1980));

/*Task-5
Write a function named averageOfEdges() which takes three number arguments and will 
return average of min and max numbers​.
Examples:
averageOfEdges(0, 0, 0) 		-> 0
averageOfEdges(0, 0, 6) 		-> 3
averageOfEdges(-2, -2, 10) 	-> 4
averageOfEdges(-3, 15, -3) 	-> 6
averageOfEdges(10, 13, 20) 	-> 15
*/

// let averageNum;
// function averageOfEdges(num1, num2, num3){
//     const nums = [num1, num2, num3];
//     let maxNum = num1;
//     let minNum = num1;
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] > num1){
//             maxNum = nums[i]
//         }
//     }
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] < num1){
//             maxNum = nums[i]
//         }
//     }

//     averageNum = (maxNum + minNum) / 2;
//     return averageNum;
// }
// console.log(averageOfEdges(10, 3, 4));

function averageOfEdges(num1, num2, num3){
    const numbers = [5, 3, 4];
    
    let max = numbers.reduce((acc, curr) => curr > acc ? curr : acc, 0);
    let min = numbers.reduce((acc, curr) => curr < acc ? curr : acc, 0);
    
    let averageNum = (max + min) / 2;
    return averageNum;
}
console.log(averageOfEdges(5, 3, 4));

function averageOfEdges(num1, num2, num3){
    const numbers = [5, 3, 4];
    
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    
    let averageNum = (max + min) / 2;
    return averageNum;
}
console.log(averageOfEdges(5, 3, 4));

/*Task-6
Write a function named noA() which takes an array of strings as argument and will 
return a new array with all elements starting with "A" or "a" replaced with "###".
Examples:
noA(["javascript", "hello", "123", "xyz"]) 	->  ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"]) 	->  ["###", "123", "###", "javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"]) 	-> ["###", "###", "###", "###", "###"]
*/

const arr1 = ["apple", "123", "ABC", "javascript"];
function noA(arr) {
    const resultArr = arr.map(element => 
    (element.charAt(0) === 'A' || element.charAt(0) === 'a') ? '###' : element
    );
    return resultArr;
}

console.log(noA(arr1));

/*Task-7
Write a function named no3and5() which takes an array of integer numbers as argument and will 
return a new array with elements replaced by conditions below.

If element can be divided by 5, replace it with 99​
If element can be divided by 3, replace it with 100​
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17]) 	-> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6]) 		-> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15]) 	-> [99, 11, 100, 13, 14, 101]
*/

// const no3and5Arr = [7, 4, 11, 23, 17];
// function no3and5(arr){
//     const newArr = arr.map((elm) => {
//     if (elm % 3 === 0 & elm % 5 === 0){
//         elm = 101;
//     }else if (elm % 3 === 0 
//     ){
//         elm = 100
//     }
//     else if (elm % 5 === 0 
//     ){
//         elm = 99
//     }
//     });
//     return newArr;
// }
// console.log(no3and5(no3and5Arr));

const no3and5Arr = [10, 11, 12, 13, 14, 15];
function no3and5(arr){
    const newArr = arr.map((elm) => 
    elm % 3 === 0 & elm % 5 === 0 ? 101 : elm % 3 === 0 ? elm = 100 : elm % 5 === 0 ? 99 : elm);
    return newArr;
}
console.log(no3and5(no3and5Arr));

/*Task-8
Write a function named countPrimes() which takes an array of integer numbers as argument and 
will return the number of the prime numbers in the given array.

NOTE: Prime number is a number that can be divided only by 1 and itself​.
NOTE: Negative numbers cannot be prime​.
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc.​
NOTE: Smallest prime number is 2.
Examples:
countPrimes([-10, -3, 0, 1]) 	-> 0
countPrimes([7, 4, 11, 23, 17]) 	-> 4
countPrimes([41, 53, 19, 47, 67]) 	-> 5
*/
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}
console.log(isPrime(8));

/*Task-9
Write a function named removeDuplicates() which takes an array argument and 
returns a new array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]) 		-> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3]) 			-> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1]) 			-> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) 	-> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"]) 		-> ["1", "2", "3"]
*/

// const duplicatedArr = [10, 20, 35, 20, 35, 60, 70, 60];
// const nonDuplicatedArr = [];

// function removeDuplicates(arr){
//     for (let i = 0; i < i.length; i++){
//         for (let j = i + 1; j < i.length; j++){
//             if (arr[i] === arr[j]){
//                 nonDuplicatedArr.push(arr[i]);
//             }
//         }
//     }
//     return nonDuplicatedArr;
// };

function removeDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result.push(arr[i]);
    }
  }
  return result;
}
const duplicatedArr = [10, 20, 35, 20, 35, 60, 70, 60];
console.log(removeDuplicates(duplicatedArr));




































































