/*Task-1
Write a function named countPalindrome() which takes a string and returns the number of  palindrome words.
Note: A palindrome word is a word that reads the same forwards and backwards. Example: level, radar, deed, refer.
Examples:
countPalindrome("Mom and Dad"​) 			-> 2
countPalindrome("See you at noon") 			-> 1
countPalindrome("Kayak races attracts racecar drivers") 	-> 2
countPalindrome("") 				-> 0
countPalindrome("No palindrome here") 		-> 0
*/

function countPalindrome(str){
    str = str.toLowerCase();
    return str.split(' ').reduce((count, i) => {
        let reversedI = i.split('').reverse().join('');
        if (i && reversedI === i) return count + 1;
        else return count; 
    },0)
}

console.log(countPalindrome("See you at noon"));

/*Task-2************++
Write a function named sum() which takes an array of numbers and a boolean value as arguments. 
It will return the sum of the numbers positioned at even indexes if true. And, return sum of numbers positioned at odd indexes if false.
Examples:
sum([1, 5, 10], true) 		-> 11
sum([3, 7, 2, 5, 10], false) 	-> 12
sum([-1, 1, -2, 2], true) 		-> -3
sum([0, -1, 15, 1], false) 		-> 0
sum([1, 2, 3, 4, -4], true) 		-> 0
*/

let total = 0; 
function sum(arr, boolean){
    if (boolean === true){
        for (let i = 0; i <= arr.length - 1; i + 2 ){
            if (i + 2 > arr.length) break;
            total += arr[i];
        }
    }else if(boolean === false){
        for (let i = 1; i <= arr.length - 1; i + 2 ){
            if (i + 2 > arr.length) break;
            total += arr[i];
        }
    }
    return total; 

}
console.log(sum([3, 7, 2, 5, 10], false));

/*Task-3*************
Write a function named nthChars() which takes a string and a number as arguments and 
returns the string back with every nth characters.​
Examples:
nthChars("Java", 2) 		-> "aa"
nthChars("JavaScript", 5)​ 	-> "St"
nthChars("Java", 3)​ 		-> "v"
nthChars("Hi", 4)​ 		-> ""
nthChars("0123456789", 2) 	-> "13579" 
*/

const resultArr = []
function nthChars(str, num){
    const arr = str.split('');
    for (let i = 0; i < str.length; i + num){
        if (i + num > str.length) break;
        resultArr.push(arr[i]);
    }
    return resultArr.join('');
}

console.log(nthChars("JavaScript", 5));

/*Task-4*********
Write a function named canFormString() which takes two string arguments and 
returns true if the second string can be formed by rearranging the characters of first string. Return false otherwise.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
canFormString("Hello", "Hi")​ 			-> false
canFormString("programming", "gaming")​ 		-> true
canFormString("halogen", "hello")​ 			-> false
canFormString("CONVERSATION", "voices rant on")​ 	-> true
canFormString("12", "123") 			-> false
*/

/*Task-5******
Write a function named isAnagram() which takes two string arguments and returns true if the given strings are anagram. Return false otherwise.
NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or phrase. In the context of strings, checking if two strings are anagrams of each other means verifying if they contain the same characters in the same quantities, regardless of the order of those characters.
NOTE: This method is case-insensitive and ignore the white spaces.

Examples:
isAnagram("Apple", "Peach")​ 		-> false
isAnagram("listen", "silent")​ 		-> true
isAnagram("astronomer", "moon starer")​ 	-> true
isAnagram("CINEMA", "iceman")​ 		-> true
isAnagram("123", "1234") 		-> false
*/


/*Task-6
Write a function named count() which takes an array of numbers and a boolean value as arguments. It will return the total count of the even numbers if the boolean value is true. And return the total count of the odd numbers if the boolean value is false. 
Examples:
count([1, 5, 10], true) 		-> 1
count([3, 7, 2, 5, 10], false) 	-> 3
count([-1, 1, -2, 2], true) 		-> 2
count([0, -1, 15, 1], false) 	-> 3
count([1, 2, 3, 4, -4], true) 	-> 3
*/

let tot = 0; 
function count(arr, boolean){
    if (boolean === true){
        for (let i = 0; i <= arr.length - 1; i++ ){
            if (arr[i] % 2 === 0){
                tot += arr[i];
            }
        }
    }else if(boolean === false){
        for (let i = 0; i <= arr.length - 1; i++ ){
             if (arr[i] % 2 === 1){
                tot += arr[i];
            }
        }
    }
    return tot; 

}
console.log(count([3, 7, 2, 5, 10], true));

/*Task-7
Write a function named sumDigitsDouble() which takes a string and returns the sum of the digits in the given String multiplied by 2. 
Return -1 if the given string does not have any digits. Ignore negative numbers.
Examples:
sumDigitsDouble("Javascript") 	-> -1
sumDigitsDouble("23abc45")​ 	-> 28
sumDigitsDouble("Hi-23") 	-> 10
sumDigitsDouble("ab12") 	-> 6
sumDigitsDouble("n0numh3r3") 	-> 12
*/
let doubledTot = 0; 
function sumDigitsDouble(str){
    for (let i = 0; i < str.length; i++){
        if ((str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57)){
            doubledTot += str[i] * 2;
         }
    }
    return doubledTot;  
}

console.log(sumDigitsDouble("Hi-23"));

/*Task-8***********
Write a function named countOccurrence() which takes two string arguments and 
returns how many times that the first string can form the second string.
Examples:
countOccurrence("Javascript", "Java") 	-> 1
countOccurrence("Hello", "World") 		-> 0
countOccurrence("Can I can a can", "anc")​ 	-> 3
countOccurrence("Hello", "l")​ 		-> 2
countOccurrence("IT conversations", "IT")​ 	-> 2
*/

function countOccurrence(str1, str2){
    for (let i = 0; i < str1.length; i++){
        for (let j = 0; j < str.)
    }
}













































