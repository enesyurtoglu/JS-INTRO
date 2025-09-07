const numbers = [1, 2, 3];

const newNumbers = numbers.reverse();//mutates the array numbers

console.log(newNumbers); // [ 3, 2, 1 ]
console.log(numbers); // [ 3, 2, 1 ]

// When you reverse an array you lose the original array. now it is actualy mutatetd to the reversed version
/*
What if I need both my original array as well as reversed version of the array
*/

const arr1 = ['Jane', 'John', 'Alex'];
const arr2 = new Array(...arr1);

console.log(arr2.reverse());
console.log(arr1);


/*
TASK: reverses the array
ARGUMENTS: no args
RETURN: returns the same array with modification
STATIC or INSTANCE: instance
DOES IT MODIFY ORIGINAL ARRAY: Yes
*/

let str = 'javascript';

let str2 = str.split('').reverse().join('');

console.log(str2);
