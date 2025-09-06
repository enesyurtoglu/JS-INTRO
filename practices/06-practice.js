/*
Task-1
Write a function named as firstPos() which takes an array as an argument and returns the first positive element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one positive element in the given array.
 
Examples:
firstPos([0, 3, -9,  5, 8]) 		-> 3
firstPos([-2, 0, -7, 10, -5]) 	-> 10
firstPos([1, 2, 3, -2])                        	-> 1
*/

const nums = [0, 3, 0, 5, -8, 7];
function firstPos(nums){
    for (const num of nums){
        if (num > 0){
            //firstPos = num;
            console.log(num);
            break;
        };
    }
    //console.log(firstPos);
};
firstPos(nums);

/*
Task-2
Write a function named as lastNeg() which takes an array as an argument and returns the last negative element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
NOTE: Assume there is at least one negative element in the given array.
 
Examples:
lastNeg([0, 3, -9,  5, 8]) 		-> -9
lastNeg([-2, 0, -7, 10, -5]) 	-> -5
lastNeg([1, 2, 3, -2])                        	-> -2
*/

function lastNeg(nums){
    for(let i = nums.length -1; i > 0; i--){
        if(nums[i] < 0){
            console.log(nums[i]);
            break;
        }
    }
};
lastNeg(nums);

/*
Task-3
Write a function named as firstLongest() which takes an array ["Apple", "Banana", "Orange"] as an argument and returns the longest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only string elements.
NOTE: If there are 2 element having the longest count of characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"]) 	-> "yellow"
firstLongest(["Apple", "Banana", "Orange"]) 	-> "Banana"
firstLongest(["purple", "yellow", "orange"]) 	-> "purple"
*/
/*
const fruits = ["Apple", "Banana", "Orange"];
function firstLongest(arr){
    let longestWord = ''; 
    for(let i = 0; i <= arr.length; i++){
       if(arr[i].length > longestWord.length){
        longestWord = arr[i];
       }
    }
    return longestWord;
};
const result = firstLongest(fruits);
console.log(result);
*/

const words = ["Apple", "Banana", "Orange"];
function findLongestWord(arr) {
  let longestWord = '';
  for (let word of arr) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const longest = findLongestWord(words);
console.log(longest);  // Output: Banana

/*
Task-4
Write a function named as lastShortest() which takes an array as an argument and returns the shortest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only string elements.
NOTE: If there are 2 element having the shortest count of characters, always return the last occurrence.
 
Examples:
lastShortest(["red", "blue", "yellow", "white"]) 	-> "red"
lastShortest(["Apple", "Banana", "Mango"]) 	-> "Mango"
lastShortest(["white", "yellow", "brown"]) 	-> "brown"
*/

const wordy = ["Apple", "Banana", "Orange"];
let shortestWordy = wordy[0];

for (let i = 1; i < wordy.length; i++) {
  if (wordy[i].length < shortestWordy.length) {
    shortestWordy = words[i];
  }
}

console.log(shortestWordy); // Outputs: Apple

/*
Task-5
Write a function named as max() which takes an array as an argument and returns the greatest element when invoked.
NOTE: Assume you will not be given an empty array, and it contains only number elements.
 
Examples:
max([0, 3, -9,  5, 8]) 	-> 8
max([-2, 0, -7, 10, -5]) 	-> 10
max([1, 2, 3, -2])                 -> 3
*/

function max(arr){
    for
}

































