
/*Task - 1
Write a program that extracts expected values from a given String 
using JS String functions.

"I like apples and oranges" 			-> "APPLE"
"JavaScript is not a scripting programming language"  	-> "JavaScript”
"I don't like books" 	-> "I like books"
*/

let text1 = 'I like apples and oranges';
let text2 = 'JavaScript is not a scripting programming language';
let text3 = 'I don\'t like books';

console.log(text1.slice(text1.indexOf('apples'),text1.indexOf('s ')).toUpperCase());
console.log(text2.slice(text2.indexOf('JavaScript'),text2.indexOf(' is')));
console.log(text3.slice(text3.indexOf('I'),text3.indexOf(' don')) + text3.slice(text3.indexOf(' like')));

/*Task - 2
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters 	
	-if it has any vowel, then print true
	-Else, print false
	Vowels = a, e, i, u, o, A, E, I, U, O

    Test Data 1:
let s1 = "JavaScript";
Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true
*/

let s1 = 'JavaScript';

console.log(s1.length);
console.log(s1[0]);
// console.log(s1.at(0));
// console.log(s1.charAt(0));
console.log(s1.charAt(s1.length -1));
console.log(s1.includes('a'|| 'e'|| 'i'|| 'u'|| 'o'|| 'A'|| 'E'|| 'I'|| 'U'|| 'O'));// Returns true or false
console.log(s1.search('a'|| 'e'|| 'i'|| 'u'|| 'o'|| 'A'|| 'E'|| 'I'|| 'U'|| 'O')); //Returns 1 if exists, -1 if not

/*Task-3 and 4
Assume that you are given a String of any odd length. 
Find the middle character for the given String. 

Assume that you are given a String of any even length. 
Find the 2 middle characters for the given String. 
*/

function middleChars(str){
	if (str.length % 2 === 1){
		console.log(str.at(str.length / 2));
	}
	else{
		console.log(str.at((str.length / 2) - 1) + str.at(str.length / 2));
	}
}

middleChars('serven');

/*Task-5
Write a program that divides the given String. Assume the length of the String will at least 
be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters
*/

function firstTwoChars(str){
	console.log(str.slice(0,2));
}
firstTwoChars('even');

function lastTwoChars(str){
	console.log(str.slice(-2));
}
lastTwoChars('even');

function middleTwoChars(str){
	console.log(str.slice(1,3));
}
middleTwoChars('even');

/*Task-6
you are given a String that has at least 2 characters. 
If first 2 and last 2 characters are same, then print true. Otherwise, print false.
*/

function firstAndLastSame(str){
	if(str.length >= 2){
		if(str.slice(0,2) === str.slice(-2)){
			console.log('TRUE');
		}else{
			console.log('FALSE');
		}
	}else{
		console.log('Please enter a word more than 2 chars');
	}
};

firstAndLastSame('astas');

/*Task-7
Write a program that gets rid of first and last characters of given two String values. 
Then, add these two String values to each other and print the result. 
*/

let st1 = '12345';
let st2 = 'abcde';

let st1Cut = st1.slice(1,st1.length-1);
let st2Cut = st2.slice(1,st2.length-1);

console.log(st1Cut);
console.log(st2Cut);
console.log(st1Cut + st2Cut);

/*Task-8
Write a program that checks if a given String starts and ends with xx. 
-If given String starts and ends with xx, then print true. 
-Otherwise, print false 
*/

const xx = (str) => str.startsWith('xx') && str.endsWith('xx');
console.log(xx('ax aa xx'));

/*Task-9
Write a program that swaps the first and last word of a given sentence as a String.  
*/

const swapfirstAndLastChar = (str) =>  str.at(-1) + str[0];
console.log(swapfirstAndLastChar('xaueau aueauy'));

/*Task-10
Write a program that counts the number of words in a given sentence as a String. 
Assume you will not be given redundant whitespaces and at least one word.
*/

let text = 'I am a good student';
console.log(text.split(' ').length);









































































