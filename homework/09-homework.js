/*Task-3
Write a function named findSumNumbers() which takes a string argument and 
returns sum of all numbers appears in the string.
*/

let total = 0;
function findSumNumbers(str){
    for (let i = 0; i < str.length; i++){
        if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57){
            total += parseInt(str[i]);
        }
    }
    return total;
}

console.log(findSumNumbers("ab1190c045d"))

/*Task-4
Write a function named findBiggestNumber() which takes a string argument and 
returns the biggest number appears in the string.
Examples:
findBiggestNumber("abc$") 		-> 0
findBiggestNumber("a1b4c  6#") 		-> 6
findBiggestNumber("ab110c045d") 		-> 110
findBiggestNumber("525") 		-> 525
findBiggestNumber("3 for 10 dollars") 	-> 10
*/

let biggest = 0;

function findBiggestNumber(str){
    for (let i = 0; i < str.length; i++){
        if ((str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) && parseInt(str[i]) > biggest){
            biggest = parseInt(str[i]);
        }
    }
    return biggest;
}

console.log(findBiggestNumber('a9110c045d'));

/*Task-5
Write a function named countOccurrencesOfCharacters() which takes a string argument and 
returns the count of repeated characters in the String.​
NOTE: If given String is empty, then return empty String.​
NOTE: It is case sensitive.
Examples:
countOccurrencesOfCharacters("") 		-> ""
countOccurrencesOfCharacters("abc") 	-> "1a1b1c"

*/
let strOccur;
let count = 0;
let result;
function countOccurrencesOfCharacters(str){
    for (let i = 0; i < str.length; i++){
        count = str.search(str[i])
        strOccur = str[i];
        result += count + strOccur;
    }
    return result;
}

console.log(countOccurrencesOfCharacters('aaAAa'));

/*Task-6
Write a function named fibonacciSeries1() which takes a number n argument and 
returns the n series of Fibonacci numbers as an array. ​
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries1(3) 	-> [0, 1, 1]
fibonacciSeries1(5) 	-> [0, 1, 1, 2, 3]
fibonacciSeries1(7) 	-> [0, 1, 1, 2, 3, 5, 8]
fibonacciSeries1(8) 	-> [0, 1, 1, 2, 3, 5, 8, 13]
fibonacciSeries1(1) 	-> [0]
fibonacciSeries1(2) 	-> [0, 1]
*/


function fibonacciSeries1(n){
    const arr = new Array(n);
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 1;
    for (let i = 3; i < n; i++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr; 
}

console.log(fibonacciSeries1(8));

/*Task-7
Write a function named fibonacciSeries2() which takes a number n argument and 
returns the nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries2(2) 	-> 1
fibonacciSeries2(4) 	-> 2
fibonacciSeries2(8) 	-> 13
fibonacciSeries2(9) 	-> 21
fibonacciSeries2(1) 	-> 0
*/

function fibonacciSeries2(n){
    const arr = new Array(n);
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 1;
    for (let i = 3; i < n; i++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n - 1];
}

console.log(fibonacciSeries2(8));

/*Task-8
Write a function named findUniques() which takes two array of number arguments and 
returns the array which has only the unique values from both given arrays.
NOTE: If both arrays are empty, then return an empty array.​
NOTE: If one of the array is empty, then return unique values from the other array.
Examples:
findUniques([], []) 		-> []
findUniques([], [1, 2, 3, 2]) 	-> [1, 2, 3]
findUniques([1, 2, 3, 4], [3, 4, 5, 5]) 	-> [1, 2, 5]
findUniques([8, 9], [9, 8, 9]) 	-> []
findUniques([-1, -2], [1, 2]) 	-> [-1, -2, 1, 2]
*/

function findUniques(arr1, arr2){
    const arr = [];
    arr2.push(...arr1);
    for (let i = 0; i < arr2.length; i++){
        for (let j = i + 1; j < arr1.length; j++){
            if (!(arr2[i] === arr2[j])){
                arr.push(arr2[i])
            }
        }
    }
    return arr; 
}

console.log(findUniques([8, 9], [9, 8, 9]));


const arr1 = [-1, -2];
const arr2 = [1, 2];
const arr3 = arr2.push(...arr1)
//console.log(arr3)
console.log(arr2)















