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
Write a function named checkAge() which takes a number argument to be considered as the yearOfBirth and returns a message below based on the given year.

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




























































































