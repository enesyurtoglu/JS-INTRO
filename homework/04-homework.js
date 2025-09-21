const { getRandomNumber } = require('../utils/MathHelper.js');
console.log(getRandomNumber(1,10));
/*
Task-1
Write a program that outputs all the numbers that are divisible by 7 starting from 1 to 100 (both inclusive).
*/

for(let i = 1; i <= 100; i++){
    if(i % 7 === 0){
        console.log(i)
    }
};

/*
Task-2
Write a program that outputs all the numbers that are divisible by both 2 and 3 starting from 1 to 50 (both inclusive).
*/

for(let i = 1; i <= 50; i++){
    if(i % 2 === 0 & i % 3 === 0){
        console.log(i);
    }
};

/*
Task-3
Write a program that outputs all the numbers that are divisible by 5 starting from 100 to 50 (both inclusive).
*/

for(let i = 100; i >= 50; i--){
    if(i % 5 === 0){
        console.log(i);
    }
};

/*
Task-4
Write a program that outputs the squares of all numbers starting from 0 to 7 (both inclusive).
*/

for(let i = 0; i <= 7; i++){
    console.log(i ** 2);
}

/*Task-5
Write a program that finds sum of the numbers starting from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10
NOTE: Use loop!!!
Expected Output:
55
*/
let num = 0;
for(let i = 1; i <= 10; i++){
    num += i;
};
console.log(num);

/*Task-6
Write a program generates a random number between 1 and 10 (both inclusive).
And find the factorial of the number.
Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
*/
const { getRandomNumber } = require('../utils/MathHelper.js');

let num1 = 1;
let rand1 = getRandomNumber(1, 10);
for(let i = 1; i <= rand1; i++){
    num1 *= i;
}
console.log(rand1);
console.log(num1);

/*Task-7
Write a program generates a random number between 1 and 100 (both inclusive).
Keep generating a new number till you get a number that is divisible by 5.
The program should also count how many attempts it takes to generate such a number.
Eventually, print the random number divisible by 5 with the number of attempts as below.
Expected Output:The random number is {randomNumber} and it took {attempts} attempt/s to generate it.
*/

const { getRandomNumber } = require('../utils/MathHelper.js');

let gameNumber = 5;
let attemptCount = 0;
let rnum;


while(rnum !== gameNumber){
    rnum = getRandomNumber(1,100);
    attemptCount++
};
console.log(rnum);
console.log(attemptCount);
console.log(`The random number is ${rnum} and it took ${attemptCount} attempt/s to generate it.`)

/*Task-8
-Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania

THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically

Expected Result:
['Germany', 'Argentina', 'Ukraine', 'Romania' ]
[ 'Argentina', 'Germany', 'Romania', 'Ukraine' ]
*/
const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania' ];
console.log(countries.sort());
console.log(...countries.sort());

const sortedCountries = [...countries.sort()];
console.log(sortedCountries);

/*Task-9
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 

THEN:
-Output the entire array
-Then, check if the array has Pluto element
	if it has Pluto, then output true
	if it does not have Pluto, output false

Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true
*/

const dogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];
let doggy = '';
for(const dog of dogs){
    if(dog === 'Pluto'){
        doggy = dog ;
        break;
    }
};
console.log(doggy === 'Pluto');

/*Task-10
-Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael

THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
	if it has both, then output true
	if it does not have both, output false

Expected Result:
[ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
false
*/

const cats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];
const lexCats = cats.sort();
console.log(lexCats);

const favoriteCats = [];
for(const cat of lexCats){
    if(cat === 'Garfield' || cat === 'Tom'){
        favoriteCats.push(cat);
    }
};
console.log(favoriteCats);

if(favoriteCats.includes('Garfield') & favoriteCats.includes('Tom')){
    console.log(true);
}else
{
    console.log(false);
};

/*Task-11
-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75

THEN:
-Output the entire array
-Ouput each element
*/

const num2 = [10.5, 20.75, 70, 80, 15.75];
console.log(num2);

for(const num of num2){
    console.log(num);
}

/*Task-12
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler

THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', ignoring cases.
-Output how many elements has 'book' or 'pen' partial strings, ignoring cases.

Expected Result:
['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4 
*/

const goods = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];

let charCounter = 0;
let wordCounter = 0;

for(let i = 0; i <= goods.length - 1; i++){
    if(goods[i][0].toLowerCase() === 'b' || goods[i][0].toLowerCase() === 'p'){
        charCounter++;
    }
    if(goods[i].toLowerCase().includes('book') || goods[i].toLowerCase().includes('pen')){
        wordCounter++;
    }
};

console.log(charCounter);
console.log(wordCounter);

/*Task-13
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78

THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10

Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2
*/

let moreThanTen = 0;
let lessThanTen = 0;
let justTen = 0;

const nums1 = [ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ];
console.log(nums1);

for(const num of nums1){
    if(num > 10){
        moreThanTen++;
    }
    if(num < 10)
    {
        lessThanTen++;
    }
    if(num === 10)
    {
        justTen++;
    }
};
console.log(moreThanTen);
console.log(lessThanTen);
console.log(justTen);

/*Task-14
-Create 2 arrays that stores numbers below.
First array-> 		[ 5, 8, 13, 1, 2 ]
Second array -> 	[ 9, 3, 67, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will take the greatest value of same index from first 2 arrays and output the third array as well.

Expected Result:
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is = [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 ]
*/

let firstArray = [ 5, 8, 13, 1, 2 ];
let secondArray = [ 9, 3, 67, 1, 0 ];
let thirdArray = [];

console.log(firstArray);
console.log(secondArray);

for(let i = 0; i <= firstArray.length - 1; i++){
    thirdArray[i] = Math.max(firstArray[i], secondArray[i]);
}
console.log(thirdArray);

/*Task-15
Write a function named as firstDuplicate() 
which takes an array argument and returns the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. 
For two elements to be considered as duplicated, value and data types of the elements must be same.

Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])		-> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])		-> 5
firstDuplicate([ 5, '5', 3, 7, 4 ])		-> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])	-> 'abc'
firstDuplicate([ 1, 2, 3])			-> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) 	-> -1
*/

function firstDuplicate(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                return arr[i];
            }
            
        }

    }
    return -1;
};

const array = [ 5, 7, 7, 0, 5, 10  ] ; 
console.log(firstDuplicate(array));

/*Task-16
Write a function named as getDuplicates() 
which takes an array argument and returns all the duplicated elements in the array when invoked.

NOTE: Make your code dynamic that works for any array and return empty array if there are no duplicates in the array. 
For two elements to be considered as duplicated, value and data types of the elements must be same.

Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])		-> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ])			-> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ])	-> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])		-> [ ]
*/

const duplicatedElements = [];
function getDuplicate(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j] && !duplicatedElements.includes(arr[i])){
                duplicatedElements.push(arr[i]);
            }
            
        }

    }
    return duplicatedElements;
};

const array1 = [ 1, -4, -7, 1, 5, 10, 45, -7, 1 ]; 
console.log(getDuplicate(array1));

/*Task-17
Write a function named as reverseStringWords() which takes a string as an argument and 
returns string back with each word separately reversed when invoked.

NOTE: Make your code dynamic that works for any string. 
Make sure you consider extra spaces before and after words in the given string.

Examples:
reverseStringWords("Hello World") 		-> "olleH dlroW"
reverseStringWords("I like JavaScript") 	-> "I ekil tpircSavaJ"
reverseStringWords("Hello") 		-> "olleH"
reverseStringWords("") 			-> ""
reverseStringWords("    ") 		-> ""
https://www.youtube.com/watch?v=a6s4OGZIJUc
*/

function reverseStringWords(str){
    
    let StrAsArr = str.trim().split(' ');
   
    for(let i = 0; i < StrAsArr.length; i++){
    StrAsArr[i] = StrAsArr[i].split('').reverse().join('');
   }
   return StrAsArr.join(' ');
}

   console.log(reverseStringWords("I like JavaScript"))
   


/*Task-18
Write a function named as getEvens() which takes 2 number arguments and 
returns all the even numbers as an array stored from smallest even number to greatest even number when invoked.
NOTE: Make your code dynamic that works for any numbers and 
return empty array if there are no even numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getEvens(2, 7)	-> [ 2, 4, 6 ]
getEvens(17, 5)	-> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4)	-> [ 4 ]
getEvens(3, 3)	-> [ ]
*/

const evenNumbers =[];

function getEvens(num1, num2){
    let numMin = Math.min(num1, num2);
    let numMax = Math.max(num1, num2);
    for(let i = numMin; i <= numMax; i++){
        if(i % 2 === 0){
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}

console.log(getEvens(3,9));

/*Task-19
Write a function named as getMultipleOf5() which takes 2 number arguments and 
returns all the numbers divisible by 5 as an array stored from first found match to last found match when invoked.
NOTE: Make your code dynamic that works for any numbers and 
return empty array if there are no numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers.

Examples:
getMultipleOf5(3, 17)	-> [ 5, 10, 15]
getMultipleOf5(23, 5)	-> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5)	-> [ 5 ]
getMultipleOf5(2, 4)	-> [ ]
*/

const divisibleTo5 =[];

function getMultipleOf5(num1, num2){
    let numMin = Math.min(num1, num2);
    let numMax = Math.max(num1, num2);
    for(let i = numMin; i <= numMax; i++){
        divisibleTo5.push(i);
    }
    return divisibleTo5.filter((x) => x % 5 === 0);
};

console.log(getMultipleOf5(3,19));

/*Task-20
Write a function named as fizzBuzz() which takes 2 number arguments and 
returns a string composed with below requirements when invoked.
-You need to find all the numbers within the range of given 2 numbers 
(both inclusive) and store them in a string from smallest to greatest number with a ' | ' separator for each number.
-You will need to convert numbers divisible by 3 to 'Fizz'
-You will need to convert numbers divisible by 5 to 'Buzz'
-You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.

Examples:
fizzBuzz(13, 18)	-> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" 
fizzBuzz(12, 5)	-> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
fizzBuzz(5, 5)	-> "Buzz"
fizzBuzz(9, 6)	-> "Fizz | 7 | 8 | Fizz"
*/

const fizzBuzzNums = [];

function fizzBuzz(num1, num2){
    let numMin = Math.min(num1, num2);
    let numMax = Math.max(num1, num2);
    for(let i = numMin; i <= numMax; i++){
        fizzBuzzNums.push(i);
    }
    console.log(`The first numbers are: ${fizzBuzzNums}`);
    let result = fizzBuzzNums.map((x) => x % 15 === 0 ? 'FizzBuzz' : x % 5 === 0 ? 'Buzz' : x % 3 === 0 ? 'Fizz' : x );
    return result.join(' | ');
}

console.log(fizzBuzz(1,31));
























