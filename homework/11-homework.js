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

function isPalindrome(str){
    for(let i = 0; i < str.length; i++){
       if(str.split('')[i] === str.split('').reverse()[i]){
        return true;
    } 
    }
}

let palindromeCounter = 0;
function countPalindrome(str){
    const arr = str.split(' ');
    for (let i = 0; i < arr.length; i++){
        if (isPalindrome(arr[i]) === true){
            palindromeCounter++;
        }
    }
    return palindromeCounter;
}

console.log(countPalindrome("See you at noon"));


































































