
//Multiple names, numbers, booleans, and other data types can be declared in arrays
const names = ['Enes', 'Deniz', 'Semih']; // Array of names
const numbers = [1, 2, 3, 4, 5]; // Array of numbers
const booleans = [true, false, true]; // Array of booleans
const mixed = ['Alice', 42, true, null]; // Array with mixed

//arrays are declared using square brackets []
//elements can be of different data types, including strings, numbers, booleans, and even other arrays
//arrays can be empty, or contain any number of elements
const emptyArray = []; // Empty array   

// const is used to declare arrays that won't be reassigned
//let can be used if you plan to reassign the array later

console.log(names); // Output: ['Enes', 'Deniz', 'Semih']
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(booleans); // Output: [true, false, true]
console.log(mixed); // Output: ['Alice', 42, true, null]
console.log(emptyArray); // Output: []  

console.log(typeof names); // Output: object (arrays are objects in JavaScript)
console.log(typeof numbers); // Output: object
console.log(typeof booleans); // Output: object
console.log(typeof mixed); // Output: object
console.log(typeof emptyArray); // Output: object

// Accessing elements in an array
console.log(names[0]); // Output: Enes (first element)
console.log(numbers[1]); // Output: 2 (second element)
console.log(booleans[2]); // Output: true (third element)
console.log(mixed[3]); // Output: null (fourth element) 

//Assigning new values to array elements
names[1] = 'Deniz Updated'; // Update second element
console.log(names); // Output: ['Enes', 'Deniz Updated', 'Semih']

// Adding new elements to an array
names.push('New Name'); // Add a new name to the end of the array
console.log(names); // Output: ['Enes', 'Deniz Updated', 'Semih', 'New Name']

// Removing the last element from an array
names.pop(); // Remove the last element
console.log(names); // Output: ['Enes', 'Deniz Updated', 'Semih']

// Finding the length of an array
console.log(names.length); // Output: 3 (number of elements in the array)   

const ids = [0, 1, 3, 3];
let lastElement = ids[ids.length - 1]; 

console.log(lastElement);











// Iterating through an array
for (let i = 0; i < names.length; i++) {
    console.log(names[i]); // Output each name
}   
// Using forEach to iterate through an array
names.forEach((name) => {
    console.log(name); // Output each name
}); // Output: Enes, Deniz Updated, Semih

