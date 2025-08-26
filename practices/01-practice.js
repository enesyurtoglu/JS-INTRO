
/*
Task-1
Requirement:
Write a program that generates a random number between 0 and 50 
(both 0 and 50 are included)

Multiply number with 5 and print the result with below message

Expected result:
The random number * 5 = {result}
*/
// let result = Math.roud(Math.random() * (max - min)) + min;

let rnum = (Math.round(Math.random() * (50 - 0) + 0));
let result = rnum * 5;
console.log(rnum);
console.log(`The random number * 5 = ${result}`);

console.log(`The randon munber * 5 = ${(Math.round(Math.random() * (50 - 0) + 0)) * 5}`);
console.log('\n');
/*
Task-2
Requirement:
Write a program that generates two random numbers between 1 and 10 
(both 1 and 10 are included)

Find the min number
Find the max number
Find the absolute difference of the numbers

Expected result:
Min number = {min}
Max number = {max}
Difference = {difference}
*/
let r1 = Math.round(Math.random() * (10 - 1) + 1);
let r2 = Math.round(Math.random() * (10 - 1) + 1);

let minNum1 = Math.min(r1,r2);
let maxNum1 = Math.max(r1,r2);

console.log(`Min number = ${minNum1}`)
console.log(`Max number = ${maxNum1}`)
console.log(`Difference = ${Math.abs(minNum1 - maxNum1)}`);
console.log('\n');

/*
Task-3
Requirement:
Write a program that generates a random number between 50 and 100 
(both 50 and 100 are included)

Find the remainder of the number by 10

Expected result:
The random number % 10 = {result}
*/

let r3 = Math.round(Math.random() * (100 - 50) + 50);
console.log(`The random number is: ${r3}`);
console.log(`The random numer % 10 = ${r3 % 10}`);
console.log('\n');

/*
Task-4
Requirement:
Write a program that generates 5 random numbers between 1 to 10 (1 and 10 are included)
Calculate some points based on numbers generated. 
So, the points will be calculated as below

1st number will be multiplied by 5 and added as points
2nd number will be multiplied by 4 and added as points
3rd number will be multiplied by 3 and added as points
4th number will be multiplied by 2 and added as points
5th number will be multiplied by 1 and added as points
*/
let points = 0;

let random1 = Math.round(Math.random() * (10 - 1) + 1);
let random2 = Math.round(Math.random() * (10 - 1) + 1);
let random3 = Math.round(Math.random() * (10 - 1) + 1);
let random4 = Math.round(Math.random() * (10 - 1) + 1);
let random5 = Math.round(Math.random() * (10 - 1) + 1);

console.log(`1st random number: ${random1}`);
console.log(`2nd random number: ${random2}`);
console.log(`3rd random number: ${random3}`);
console.log(`4th random number: ${random4}`);
console.log(`5th random number: ${random5}`);
console.log('\n');
points += random1 * 5;
points += random2 * 4;
points += random3 * 3;
points += random4 * 2;
points += random5 * 1;

console.log(`Total points: ${points}`);
console.log('\n');

/*
Task-4
Requirement:
Write a program that generates 4 random numbers as below;
1st  number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)

Find the absolute difference between the max and min number
Find the absolute difference between the second and third number
Find the average of all 4 numbers

Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average}
*/

let rnum1 = Math.round(Math.random() * (25 -1) + 1);
let rnum2 = Math.round(Math.random() * (50 - 26) + 26);
let rnum3 = Math.round(Math.random() * (75 - 51) + 51);
let rnum4 = Math.round(Math.random() * (100 - 76) + 76);

console.log(`First random number is: ${rnum1}`);
console.log(`Second random number is: ${rnum2}`);
console.log(`Third random number is: ${rnum3}`);
console.log(`Fourth random number is: ${rnum4}`);
console.log('\n');

let maxNumber = Math.max(rnum1, rnum2, rnum3, rnum4);
let minNumber = Math.min(rnum1, rnum2, rnum3, rnum4);
let AbsDiffMaxMin = Math.abs(maxNumber - minNumber);
let AbsDiffSecondThird = Math.abs(rnum2 - rnum3);
let averageNum = (rnum1, rnum2, rnum3, rnum4) / 4;

console.log(`Difference of max and min = ${AbsDiffMaxMin}`);
console.log(`Difference of second and third = ${AbsDiffSecondThird}`);
console.log(`Average of all = ${averageNum}`);


