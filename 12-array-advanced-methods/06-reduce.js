const numbers = [ 3, 6, 10, 4 ];
let max = numbers.reduce((acc, curr) => curr > acc ? curr : acc, -Infinity);
console.log(max);
// count even
let countEven = numbers.reduce((evens, curr) => curr % 2 === 0 ? evens + 1 : evens, 0);

console.log(countEven); // 3

let sum = numbers.reduce((acc, curr) => {
  return acc + curr;
});

console.log(sum);

// curr = 3, 6, 10, 4
// acc = 720

let product = numbers.reduce((acc, curr) => {
  return acc * curr;
}, 1);

console.log(product); // 720

// curr = 3, 6, 10, 4
// acc = 3

let max = numbers.reduce((acc, curr) => curr > acc ? curr : acc, -Infinity);


const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];

// Find shortest fruit -> Kiwi

console.log(fruits.reduce((acc, curr) => acc.length < curr.length ? acc : curr));


/*
reduce(callback)
  - it runs the callback for each array element, and collects an accumulated value
  - it returns a single value 
  - if initialValue is not provided, then the first array element is considered as initialValue by default
  use this as a format:  numbers.reduce((acc, curr) => {}, 0)  --> The acc = 0
*/


