const {getRandomNumber} = require('./../utils/MathHelper.js');

/* Task-1
Write a  program that generates 3 random numbers between 1 to 100 (1 and 100 are included)

Print true if the average of the random numbers is greater or equals 50. 
Print false if the average of the random numbers is less than 50.
*/

let n1 = getRandomNumber(1,100);
let n2 = getRandomNumber(1,100);
let n3 = getRandomNumber(1,100);
console.log(n1,n2,n3,(n1 + n2 + n3)/3);

if((n1 + n2 + n3)/3 >= 50){
    console.log('TRUE')
}
else{
    console.log('FALSE')
};

/* Task-2 
Write a  program that generates 3 random numbers between 1 to 3 (1 and 3 are included)

-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print “DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH”
*/

let num1 = getRandomNumber(1,3);
let num2 = getRandomNumber(1,3);
let num3 = getRandomNumber(1,3);

let match = num1 === num2 || num1 === num3 || num2 == num3;
let tripleMacth = num1 === num2 && num1 === num3 && num2 === num3;

if(tripleMacth){
    console.log(`TRIPLE MATCH`);
}
else if(match){
    console.log(`DOUBLE MATCH`);
}
else{
    console.log(` NO MACTH`);
}

/* Task-3 
Write a function named as hasA() which takes a string word as an argument and 
returns true if given string has a character "a" or "A", and false otherwise when invoked.

NOTE: Assume you will not be given an empty word.
Examples:
hasA("Tech") 	-> false
hasA("Global") 	-> true
hasA("") 		-> false
hasA("Apple") 	-> true
*/

const hasA = (str) => str.includes('a') || str.includes('A');
console.log(hasA('eat'));

/* Task-4 
Write a function named as doubleOrTripleWord() which takes a string word as an argument and 
returns the given word back tripled if the string length is even or doubled if the string length is odd when invoked.

Examples:
doubleOrTripleWord("Tech") 	-> "TechTechTech"
doubleOrTripleWord("Apple") 	-> "AppleApple”
doubleOrTripleWord("") 		-> ""
doubleOrTripleWord(" ") 		-> " "
doubleOrTripleWord("1") 	-> "11"
doubleOrTripleWord("22")    -> "222222"
*/

function doubleOrTripleWord(str1){
    if (str1.length % 2 === 0){
        console.log(str1 + str1 + str1);
    }else {
        console.log(str1 + str1);
    }
    };

doubleOrTripleWord('11');

/* Task-5 
Write a function named as firstWord() which takes a string word as an argument and 
returns the first word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstWord("Hello World") 		-> "Hello"
firstWord("I like JavaScript") 	-> "I"
firstWord("Hello") 		-> "Hello"
firstWord("") 		-> ""
firstWord("    ") 		-> ""
*/

function firstWord(str2){
    if(str2.length > 0){
        console.log(str2.at(0));
    }
    else{
        console.log('');
    }
};

firstWord('Hello');

/* Task-6 
Write a function named as lastWord() which takes a string word as an argument and 
returns the last word from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
lastWord("Hello World") 		-> "World"
lastWord("I like JavaScript") 	-> "JavaScript”
lastWord("Hello") 		-> "Hello"
lastWord("") 		-> ""
lastWord("    ") 		-> ""
*/

function lastWord(str2){
    if(str2.length > 0){
        console.log(str2.at(-1));
    }
    else{
        console.log('');
    }
};

lastWord('Hello');

/* Task-7 
Write a function named as firstlastWord() which takes a string word as an argument and 
returns the first and last words from the given string when invoked.

NOTE: Return empty string if the given string does not have any word.

Examples:
firstLastWord("Hello World") 	-> "HelloWorld"
firstLastWord("I like JavaScript") 	-> "IJavaScript”
firstLastWord("Hello") 		-> "HelloHello"
firstLastWord("") 		-> ""
firstLastWord("    ") 		-> ""
*/

function firstLastWord(str){
    if(str.length > 0){
        console.log(str.split(' ')[0] + str.split(' ')[str.split(' ').length-1]);
    }
    else{
        console.log('');
    }
};

firstLastWord('Hello World');

/* Task-8 
Write a function named as startVowel() which takes a string word as an argument and 
returns true if given string starts with a vowel, and false otherwise when invoked.

NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
Examples:
startVowel("Hello") 	-> false
startVowel("Apple") 	-> true
startVowel("orange") 	-> true
startVowel("") 	-> false
startVowel("    ") 	-> false
startVowel("123") 	-> false
*/

function startWowel(str){
    if(str.at(0) === ('a' || 'e' || 'i' || 'o' || 'u' || 'A' || 'E' || 'I' || 'U' || 'O')){
        console.log('TRUE');
    }else{
        console.log('FALSE');
    }
}

startWowel('ankara');

/* Task-9 
Write a function named as swap4() which takes a string word as an argument and 
returns the string back with its first and last 4 characters swapped when invoked.

NOTE: Return empty string if the given string does not have 8 or more characters.

Examples:
swap4("abc") 	-> ""
swap4("JavaScript") 	-> "riptScJava"
swap4("TechGlobal") 	-> "obalGlTech"
swap4("") 		-> ""
swap4("    ") 		-> ""
swap4("Apple") 	-> ""
*/

function swap4(str){
    if (str.length >=8){
        return str.slice(-4) + str.slice(0,4);
    }else{
        return console.log('');
    }
};

console.log(swap4('takapppptuka'));

/* Task-10 
Write a function named as swapFirstLastWord() which takes a string word as an argument and 
returns the string back with its first and last words swapped when invoked.

NOTE: Return empty string if the given string does not have 2 or more words.

Examples:
swapFirstLastWord("Hello World") 	-> "World Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar") 	-> "bar bar foo foo"
swapFirstLastWord("") 		-> ""
swapFirstLastWord("    ") 		-> ""
swapFirstLastWord("Hello") 	-> ""
swapFirstLastWord("Hello   ") 	-> ""
*/

function swapFirstLastWord(str){
    if (str.split(' ').length >= 2){
        return str.split(' ')[str.split(' ').length-1] + str.split(' ')[0];
    }else{
        console.log('');
    }
}

console.log(swapFirstLastWord('One two Three'));























































































