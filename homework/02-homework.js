const { getRandomNumber } = require('./../utils/MathHelper.js');

/*
Task -1 
Requirement:
Convert given Strings below to number data types and find their 
sum, product, division, subtraction, remainder and exponentiation.

let str1 = "5", str2 = "2";

Expected results:
The sum of 5 and 2 is = 7
The product of 5 and 2 is = 10
The division of 5 and 2 is = 2.5
The subtraction of  5 and 2 is = 3
The remainder of 5 and 2 is = 1
The exponentiation of 5 and 2 is = 25


NOTE: expected results should exactly match!!!
*/

let str1 = '5';
let str2 = '2';

let str1Num = parseFloat(str1);
let str2Num = parseFloat(str2);

let sumOfstrNum = str1Num + str2Num;
let productOfstrNum = str1Num * str2Num;
let divisionOfstrNum = str1Num / str2Num;
let subtractionOfstrNum = str1Num - str2Num;
let reminderOfstrNum = str1Num % str2Num;
let exponantiationOfstrNum = str1Num ** str2Num;

console.log(sumOfstrNum);
console.log(productOfstrNum);
console.log(divisionOfstrNum);
console.log(subtractionOfstrNum);
console.log(reminderOfstrNum);
console.log(exponantiationOfstrNum);
console.log('Task - 1 ended here');
/*
Task -2
Requirement:
Convert given Strings below to number data types and find the greatest and smallest values and find the average and absolute difference of them.

let s1 = "200", s2 = "-50";

Expected results:
The greatest value is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250

NOTE: expected results should exactly match!!!
*/

let s1 = '200';
let s2 = '-50';

let s1Num = parseFloat(s1);
let s2Num = parseFloat(s2);
console.log(s1Num);
console.log(s2Num);

let greatesNum = Math.max(s1Num, s2Num);
let smallestNum = Math.min(s1Num, s2Num);
let averageNum = (s2Num + s1Num) / 2;
let absDiff = Math.abs(s1Num, s2Num);

console.log(greatesNum);
console.log(smallestNum);
console.log(averageNum);
console.log(absDiff);
console.log('Task - 2 ended here');

/*
Task -3
Requirement:
Write a program that generates 2 random numbers between 1 and 50 
(both 1 and 50 are included). Then, find the absolute difference of these numbers.
 
Test Data: 5, 27
Expected Output:
The absolute difference between numbers is = 22
*/

let rand1 = getRandomNumber(1, 50);
let rand2 = getRandomNumber(1, 50);

console.log(rand1);
console.log(rand2);

console.log(Math.abs(rand1 - rand2));
console.log('Task - 3 ended here');

/*
Task - 4
Requirement:
Write a program that generates 5 random numbers between 1 and 50 (both 1 and 50 are included). Then, find the max and min of these numbers.
 
Test Data:3, 15, 45, 20, 25
Expected Output:
The max value = 45
The min value = 3
*/

let r1 = getRandomNumber(1, 50);
let r2 = getRandomNumber(1, 50);
let r3 = getRandomNumber(1, 50);
let r4 = getRandomNumber(1, 50);
let r5 = getRandomNumber(1, 50);

console.log(r1);
console.log(r3);
console.log(r3);
console.log(r4);
console.log(r5);

console.log(Math.max(r1,r2,r3,r4,r5));
console.log(Math.min(r1,r2,r3,r4,r5));
console.log('Task - 4 ended here');

/*
Task - 5
Requirement:
Write a program that generates 3 random numbers between 50 and 100 both included. 
First print the numbers
Then, find the sum of these numbers
 
Test Data:55, 67, 90
Expected Output:
The number 1 = 55
The number 2 = 67
The number 3 = 90
The sum of numbers is = 212
*/
let rNum1 = getRandomNumber(50, 100);
let rNum2 = getRandomNumber(50, 100);
let rNum3 = getRandomNumber(50, 100);

console.log(rNum1);
console.log(rNum2);
console.log(rNum3);


console.log(rNum1 + rNum2 + rNum3);
console.log('Task - 5 ended here');

/*
Task - 6
Requirement:
Write a program that generates 3 random numbers 
between 1 and 100 (1 and 100 are included) and 
find if all the numbers are more than 25.

Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 25.
*/

let random1 = getRandomNumber(1, 100);
let random2 = getRandomNumber(1, 100);
let random3 = getRandomNumber(1, 100);

console.log(random1);
console.log(random2);
console.log(random3);
console.log(random1 > 25 && random2 > 25 && random3 > 25);
console.log('Task - 6 ended here');

/*
Task - 7
Requirement:
Assume you are given a name let name = "David"; 
Print out the length of the name
Find the first character in the name and print it
Find the last character in the name and print it
Find the first 3 characters in the name and print them
Find the last 3 characters in the name and print them

Expected Output:The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid
*/

let name = 'David';

console.log(name.length);
console.log(name.at(0));
// console.log(name.charAt(0));
// console.log(name[0]);

console.log(name.at(name.length -1));
// console.log(name.charAt(name.length - 1));
// console.log(name[name.length - 1]);

console.log(name.slice(0,3));
console.log(name.slice(-3,name.length));
console.log('Task - 7 ended here');

