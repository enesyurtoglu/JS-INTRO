const arr1 = []; // creating an array with array templates
const arr2 = new Array(); // creating an array with Array() constructor

let cities = ['Chicago', 'Miami', 'Des Plaienes'];

console.log(cities);

const order1 = {
    productName: 'Lego',
    price: 10.99
}

const order2 = {
    productName: 'phone',
    price: 20.99
}


const orders = [
    {
    productName: 'Lego',
    price: 10.99
},
{
    productName: 'phone',
    price: 20.99
}
]

console.log(orders[0].price);//10.99

const favorites = [
    ['Salmon', 'Salad'],
    ['coffee', 'Tea'],
    ['Banana', 'Apple', 'Cherry'],
    ['Ali', 'Veli', 'Deli', 'Dumrul']
]

favorites.length;//4
favorites[2].length;//3 Length is a property not a function. No parenthesis. 

//Basics of Arrays
const numbers = [10, 5, 7, -3, 15];

//Get the size of the arrayusing thength property
let size = numbers.length;//5

//Get the elements in an array using index (indeşing start from ZERO)
numbers[0];//10
numbers[3];//-3

numbers[-1];// undefined
numbers[5];// undefined

//How to dynamically get the first and last elements in an array using property access --> []

const names = ['Jhon', 'Jane', 'MAx', 'Alex'];

names[0]; // always returns the first element
names[names.length - 1]; // always returns the last element




