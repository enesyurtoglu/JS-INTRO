
/*TASK-1
Requirement
-Write a program that outputs below sentences
-Double quotations must be displayed in your console when you run the code
-Every line below must be printed with a separate console.log() statement
*/

console.log(`I start to proctice "JavaScript" today, and I like it.`);
//console.log('I start to proctice \"JavaScript\" today, and I like it.');
console.log(`The secret of getting ahead is getting started.`);
console.log(`"Don't limit yourself.`);
//console.log('\"Don\'t limit yourself.\"');
console.log(`Invest in your dreams. Grind now. Shine later.`);
console.log(`It's not the load that breaks you down, it's the way you carry it.`);
console.log(`The hard days are what make you stronger.`);
console.log(`You can waste your lives drawing lines. Or you can live your life crossing them.`);
console.log(`\n`);

/*TASK-2
Requirement
-Write a program that prints the whole below text in ONLY 1 console.log() 
statement (you can use escape sequences to insert line or a tab)
*/

console.log('\tJavaScript is a high-level programming language primarily used to build web applications. It is not limited to the web; it can also be used for the backend development with technologies like Node.js.\n\n\tIt is open source and has a huge community support, which means there are plenty of resources and support available for learning. It uses a syntax like other programming languages and easy to learn.');
console.log(`\n`);

/*TASK-3
Requirement
-Write a program that stores below information with proper data types and output all variables 
with separate console.log() statements.
*/

let myAge = 45;
const myFavoriteNumber = 1; 
let myHegiht = 172;
let myWegih = 77;
const myFavoriteLetter = 'A';

console.log(`I'm ${myAge} years old. My favorite number is ${myFavoriteNumber}. I'm ${myHegiht}cm tall. I weigh ${myWegih}kg. My favorite letter is ${myFavoriteLetter}`);
console.log(`\n`);

/*TASK-4
Requirement
-Create 2 variables called as num1, num2 and and store values of 25, 35 in these variables, respectively. 
Then, output the sum of the numbers with a proper message as given below.

Test Data: 25, 35

Expected output: 
The sum of the numbers = 60
*/

const num1 = 25;
let num2 = 35;
let sum = num1 + num2;
console.log(`The sum of the numbers = `+ (num1 + num2));
console.log(`The sum of the numbers = `+ sum);
console.log(`\n`);

/*TASK-5
Requirement
-Create 2 variables called as n1, n2 and and store values of 5, 7 in these variables, respectively. 
Then, output the product of the numbers with a proper message as given below.

Test Data:5, 7

Expected output: 
The product of the numbers = 35
*/
let n1 = 5;
let n2 = 7;
let product = n1 * n2;
console.log(`The sum of the numbers = `+ (n1 * n2));
console.log(`The sum of the numbers = `+ product);
console.log(`\n`);

/*TASK-6
Requirement
-Create 2 variables called as number1, number2 and and store values of 24, 10 in these variables, respectively.
 Then, output the sum (addition), multiplication, subtraction, division and remainder of these numbers 
 with a proper message as given below.

Test Data:24, 10

Expected output: 
The sum of the numbers is = 34
The product of the numbers is = 240
The subtraction of the numbers is = 14
The division of the numbers is = 2.4
The remainder of the numbers is = 4
*/

let number1 = 24;
let number2 = 10

let sum1 = number1 + number2;
let product1 = number1 * number2;
let subtraction1 = number1 - number2;
let divsion1 = number1 / number2;
let reminded1 = number1 % number2;

console.log(`The sum of the numbers is = ${sum1}
The product of the numbers is = ${product1}
The subtraction of the numbers is = ${subtraction1}
The division of the numbers is = ${divsion1}
The remainder of the numbers is = ${reminded1}`);
console.log(`\n`);

/*TASK-7
Requirement:
- Create 2 variables called as i1, i2 and and store values of 7, 11 in these variables, respectively.
 Then, output the average of the numbers.
Test Data:7, 11
Expected Output:
The average of the numbers is: 9
*/

let i1 = 7;
let i2 = 11;
let average = (i1 + i2) / 2;

console.log(`The average of the numbers is: ${average}`);
console.log(`\n`);

/*TASK-8
Requirement:
- Create 5 variables called as a1, a2, a3, a4, a5 and and store values of 6, 10, 12, 15, 17 
in these variables, respectively. Then, output the average of the numbers.
Test Data: 6, 10, 12, 15, 17
Expected Output:
The average of the numbers is: 12
*/

let count = 0;

let a1 = 6;
count++;
let a2 = 10;
count++;
let a3 = 12;
count++;
let a4 = 15;
count++;
let a5 = 17;
count++

let averageByCount = (a1 + a2 + a3 + a4 + a5) / count;

console.log(`The average of the numbers is: ${averageByCount}`);
console.log(`\n`);

/*TASK-9
Requirement:
- Create 3 variables called as b1, b2, b3 and and store values of 5, 6, 10 in these variables, respectively.
 Then, output the square of each number entered by user.
NOTE: Square of number means number multiplied with itself
Test Data:5, 6, 10
Expected Output:
The 5 multiplied with 5 is = 25
The 6 multiplied with 6 is = 36
The 10 multiplied with 10 is = 100
*/

const b1 = 5;
const b2 = 6;
const b3 = 10;

console.log(`The 5 multiplied with 5 is = ${b1 ** 2}
The 6 multiplied with 6 is = ${b2 ** 2}
The 10 multiplied with 10 is = ${b3 **2}`);
console.log(`\n`);

/*TASK-10
Requirement:
- Create a variable called as side to be assumed as one side of a square 
and store value of 7 in that variable. Then, output the area and perimeter for that square.

NOTE: area of a square = side * side
    perimeter of a square = 4 * side
 
Test Data:7
Expected Output:
The perimeter of the square = 28
The area of the square = 49
*/

let side = 7;

console.log(`The perimeter of the square = ${4 * side}
The area of the square = ${side ** 2}`);
console.log(`\n`);

/*TASK-11
Requirement
-Write a program that stores below information with proper data types and output all variables 
with ONLY one console.log() statement.
	favBook = JS Algorithms & Data Structures
	favColor = Blue
	favNumber = 7

Expected output: 
The favorite book is JS Algorithms & Data Structures 
The favorite color is  Blue
The favorite number is  7
*/

let favBook = 'JS Algorithms & Data Structures';
let favColor = 'Blue';
const favNumber = 7;

console.log(`The favorite book is ${favBook} 
The favorite color is  ${favColor} 
The favorite number is  ${favNumber} `);
console.log(`\n`);

/*TASK-12
Requirement
-Write a program that stores below information with proper data types and 
output all variables with ONLY one console.log() statement.
	firstName = John
	lastName = Doe
	age = 45
	emailAddress = johndoe@gmail.com
	phoneNumber = (123) 123 1234
	address = 123 St Chicago IL 12345
*/

let firstName = 'John';
let lastName = 'Doe';
let age = 45;
let emailAddress = 'johndoe@gmail.com';
let phoneNumber = '(123) 123 1234';
let address = '123 St Chicago IL 12345'; 

console.log('\t' + `User who joined this program is ${firstName}. ${firstName}'s age is ` + age + `. ${firstName}'s emagl address is ${emailAddress}, phone number is ${phoneNumber}, and the address is ${address}.`);





