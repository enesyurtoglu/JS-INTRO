/*Task-1
Write a function named hasLowerCase() which takes a string argument and 
returns true if there is a lowercase letter and false if it there isn’t. 
Examples:
hasLowerCase("") 		-> false
hasLowerCase("JAVASCRIPT") 	-> false
hasLowerCase("hello") 		-> true
hasLowerCase("125$") 		-> false
hasLowerCase("   a   ") 		-> true
*/

function hasLowerCase(str) {
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    // Check if charCode is in the range of uppercase letters (A-Z)
    if (charCode >= 97 && charCode <= 122) {
      return true;
    }
  }
  return false;
}

console.log(hasLowerCase('JAVA'));

/*Task-2
Write a function named noZero() which takes an array of numbers as argument and 
returns the array back with all zeros removed.
Examples:
noZero([1]) 		-> [1]
noZero( [1, 1, 10]​) 	-> [1, 1, 10]​
noZero([0, 1, 10]) 	-> [1, 10]
noZero([0, 0, 0]) 	-> []
noZero([10, 100 0]) 	-> [10, 100]
*/

const newArr = [];
function noZero(arr){
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== 0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(noZero([0, 1, 10]))

/*Task-3
Write a function named numberAndSquare() which takes an array of numbers as argument and 
returns a multidimensional array with all numbers squared. 
Examples:
numberAndSquare([1, 2, 3]) 	-> [[1, 1], [2, 4], [3, 9]]
numberAndSquare([0, 3, -6]) 	-> [[0, 0], [3, 9], [-6, 36]]
numberAndSquare([1, 4]) 	-> [[1,1], [4, 16]]
numberAndSquare([0, 0, 0]) 	-> [[0, 0], [0, 0], [0, 0]]
numberAndSquare([0, 1, -10]) 	-> [[0, 0], [1, 1], [-10, 100]]
*/

const resultArr = [];
let num; 
let sqrNum;
function numberAndSquare(arr){
    const arr1 = new Array(arr.length);
    for (let i = 0; i < arr.length; i++){
        num = arr[i];
        sqrNum = arr[i] ** 2;
        arr1.push(num, sqrNum);
       
    }
    return arr1; 
}

console.log(numberAndSquare([0, 3, -6]))

/*Task-4
Write a function named containsValue() which takes a string array and a string as arguments and 
returns a boolean value. Search the string variable inside of the array and return true if it exists in the array. 
If it doesn’t exist, return false. ​

NOTE: Assume that array size is at least 1.​
NOTE: The method is case-sensitive.
Examples:
containsValue(["abc", "foo", "javascript"], "hello") 			-> false
containsValue(["abc", "def", "123"], "Abc") 			-> false
containsValue(["abc", "def", "123", "Javascript", "Hello"], "123") 	-> true
*/

let result1 = false;
function containsValue(arr, str){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === str){
            result1 = true;
        }
    }
    return result1;
}

console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123"));

/*Task-5
Write a function named reverseSentence() which takes a string as argument and 
returns the words in reverse order.​ If there is no enough words reverse, return "There is not enough words!".
Examples:
reverseSentence("Hello") 		-> "There is not enough words!"
reverseSentence("Javascript is fun") 		-> "Fun is javascript"
reverseSentence("This is a sentence") 	-> "Sentence a is this"
*/

function reverseSentence(str){
    const arr = str.split(' ')
    if (arr.length === 1){
        return 'There is not enough words!';
    }else
    {
    return arr.reverse().join(' ');
    }
}
console.log(reverseSentence('fun'));

/*Task-6
Write a function named removeStringSpecialsDigits() which takes a string as argument and 
return a string without the special characters or digits.
Examples:
removeStringSpecialsDigits("123Javascript #$%is fun") 	-> "Javascript is fun" 
removeStringSpecialsDigits("Cypress") 		-> "Cypress"
removeStringSpecialsDigits("Automation123#$%") 	-> "Automation"
*/

const newArr1 = [];
function removeStringSpecialsDigits(str){
      for (let i = 0; i < str.length; i++){
        if (!(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) &&
            !(str.charCodeAt(i) >= 33 && str.charCodeAt(i) <= 47)) {
            newArr1.push(str[i]);
        }
    }
    return newArr1.join('');
}
console.log(removeStringSpecialsDigits("Automation123#$%"));

/*Task-7
Write a function named removeArraySpecialsDigits() which takes a string array as argument and 
return back without the special characters or digits.
Examples:
removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]) 	-> ["Javascript", "is", "fun"]
removeArraySpecialsDigits(["Cypress", "123$%", "###"]) 	-> ["Cypress", "", ""]
removeArraySpecialsDigits(["Automation", "123#$%tool"]) 	-> ["Automation", "tool"]
*/

const newArr2 = [];
function removeArraySpecialsDigits(arr){
    for (let i = 0; i < arr.length; i++){
        if (!(arr[i].toString().charCodeAt(o) >= 33 && arr[i].toString().charCodeAt(o) <= 47)) {
            newArr2.push([i]);
        }
    }
    return newArr2.join('');
}






































































