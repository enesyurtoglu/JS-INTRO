
// 1. Fucntion Declaration - tradational way

function sum1(num1,num2){
    return num1 + num2;
}

console.log(sum1(2,4));

// 2. Function declaration

const sum2 = function (num1,num2){
    return num1 + num2;
}

console.log(sum2(2,4));

// 3. Arrow Function  - ES6 feature

const num3 = (num1, num2) => {
        return num1 + num2;
}

console.log(num3(2,4));

const isEven = (number) => number % 2 === 0;

console.log(isEven (3));

/*Createa function called isWİN()
This takes 2 number args and return true if sboth numberar positive 
else ti  will return false
*/

const isWin = (num1, num2) => num1 >0 && num2 > 0;
console.log(isWin(1,2));
console.log(isWin(0,2));
console.log(isWin(-1,3));

/*Createa function called theEnd()
This takes 2 param called str; bool
if bool is true, return the first letter
else return return the last letter  
*/

if ()











