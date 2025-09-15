/*TASK-1
You are given a JS Array below:
•	Count how many users are older than 30   			-> 2
•	Count how many users live in Chicago     			-> 2
•	Count how many users live in IL     				-> 3
•	Count how many users’ emails has Gmail domain  		-> 2
•	Find and store all the users name younger than 35   -> [ 'Tech', 'Jane', 'Alex' ]
•	Find average of ages of all users    				-> 37.333333
*/


const users = [
    {
        firstName: 'Tech',
        lastName: 'Global',
        email: 'tech.global@techglobal.com',
        age: 3,
        address: {
            street_line_1: '2800 S River Rd',
            street_line_2: 'Suite 310',
            city: 'Des Plaines',
            state: 'IL',
            zip: '60018'
        }
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        age: 47,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@gmail.com',
        age: 30,
        address: {
            street_line_1: '123 Abc St',
            street_line_2: '',
            city: 'Chicago',
            state: 'IL',
            zip: '12345'
        }
    },
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'alexsmith@outlook.com',
        age: 32,
        address: {
            street_line_1: '456 Xyz St',
            street_line_2: '',
            city: 'Miami',
            state: 'Florida',
            zip: '67890'
        }
    }
];

//console.log(users[0].age);

let countAge = 0;
let countChicago = 0;
let countIl = 0;
let countGmail = 0;
const youngUsers = [];
let userAgeTotal = 0;
let averageAge = 0;

for (let i = 0;  i < users.length; i++){
    userAgeTotal += users[i].age;
    averageAge = userAgeTotal / i;
    if (users[i].age > 30){
        countAge ++;
    }
    if (users[i].address.city === 'Chicago'){
        countChicago ++;
    }
    if (users[i].address.state === 'IL'){
        countIl ++;
    }
    if (users[i].email.includes('gmail')){
        countGmail ++;
    }
    if (users[i].age < 35){
        youngUsers.push(users[i].firstName);
    }
}
console.log(countAge);
console.log(countChicago);
console.log(countIl);
console.log(countGmail);
console.log(youngUsers);
console.log(averageAge);


/*TASK-2
You are given a JS Array below:
•	Find the most expensive product   			-> MacBook Pro 16-inch
•	Find the least expensive product   			-> AirPods Pro
•	Find the product with the biggest quantity   -> AirPods Pro
•	Find the product with the smallest quantity  -> MacBook Pro 16-inch
•	Find all the product names   			-> [ 'iPhone 14 Pro', 'MacBook Pro 16-inch', 'iPad Air', 'Apple Watch Series 7', 'AirPods Pro' ]
*/

const appleStore = [
    {
        productName: "iPhone 14 Pro",
        quantity: 50,
        price: 1099.99,
    },
    {
        productName: "MacBook Pro 16-inch",
        quantity: 30,
        price: 2399.99,
    },
    {
        productName: "iPad Air",
        quantity: 75,
        price: 599.99,
    },
    {
        productName: "Apple Watch Series 7",
        quantity: 100,
        price: 399.99,
    },
    {
        productName: "AirPods Pro",
        quantity: 200,
        price: 249.99,
    },
];

const mostExpensiveProductPrice = appleStore.reduce((acc, curr) => acc > curr.price ? acc : curr.price,0);
console.log(mostExpensiveProductPrice);

let mostExpensiveProduct;
let biggestQuantityProduct;
let smallestQuantityProduct;
let mostExpensivePrice = 0;
let biggestQuantity = 0;
let smallestQuantity = Infinity;
const allProductNames = [];


for (let i = 0; i < appleStore.length; i++){
    allProductNames.push(appleStore[i].productName);

    if(appleStore[i].price > mostExpensivePrice){
        mostExpensiveProduct = appleStore[i].productName;
    }
    if(appleStore[i].quantity > biggestQuantity){
        biggestQuantityProduct = appleStore[i].productName;
    }
    if(appleStore[i].quantity < smallestQuantity){
        smallestQuantity = appleStore[i].quantity
        smallestQuantityProduct = appleStore[i].productName;
    }
}

console.log(mostExpensiveProduct);
console.log(biggestQuantityProduct);
console.log(smallestQuantityProduct);
console.log(allProductNames);

/*TASK-3
You are given a JS Array below:
•	Find the cheapest book in the bookstore  	    -> To Kill a Mockingbird
•	Find the most expensive book in the bookstore  	-> Harry Potter and the Sorcerer's Stone
•	Find all Classic books   			    	    -> [ 'The Great Gatsby', 'To Kill a Mockingbird' ]
*/

const bookstore = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        price: 9.99
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        price: 7.99
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
        genre: "Science Fiction",
        price: 12.49
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        price: 14.99
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genre: "Mystery",
        price: 10.99
    }
];

let cheapestBookPrice = Infinity;
let cheapestBookTitle;
let mostExpensiveBookPrice = 0;
let mostExpensiveBookTitle;
const allClassicBooks = [];

for (let i = 0; i < bookstore.length; i++){
    if (cheapestBookPrice > bookstore[i].price){
        cheapestBookPrice = bookstore[i].price;
        cheapestBookTitle = bookstore[i].title;
    }
    if (mostExpensiveBookPrice < bookstore[i].price){
        mostExpensiveBookPrice = bookstore[i].price;
        mostExpensiveBookTitle = bookstore[i].title;
    }
     if (bookstore[i].genre === 'Classic'){
        allClassicBooks.push(bookstore[i].title);
    }
}

console.log(cheapestBookTitle);
console.log(mostExpensiveBookTitle);
console.log(allClassicBooks);

/*TASK-4
You are given a JS Array below:
•	Calculate the total price of products in the cart   -> 1647
•	Find the brands of all the products in the cart  	-> [ 'Dell', 'Apple', 'Sony' ]
•	Find all the items in the cart with their quantity 	-> [ 'Laptop, 1', 'Smartphone 2', 'Headphones, 3' ]
*/

const shoppingCart = {
    userId: 12345,
    items: [
        {
            productId: 1,
            productName: 'Laptop',
            price: 999.00,
            quantity: 1,
            specifications: {
                brand: 'Dell',
                screen: '15.6 inches',
                processor: 'Intel Core i7'
            }
        },
        {
            productId: 2,
            productName: 'Smartphone',
            price: 499.00,
            quantity: 2,
            specifications: {
                brand: 'Apple',
                model: 'iPhone 12',
                color: 'Space Gray'
            }
        },
        {
            productId: 3,
            productName: 'Headphones',
            price: 149.00,
            quantity: 3,
            specifications: {
                brand: 'Sony',
                type: 'Over-ear',
                wireless: true
            }
        }
    ],
    shippingAddress: {
        street: '123 Main Street',
        city: 'Anytown',
        zipCode: '12345'
    },
    orderDate: '2023-08-29'
};

let totalPrice = 0;
const allBrands = [];
const allItemQuantity = [];

for (let i = 0; i < shoppingCart.items.length; i++){
    totalPrice += shoppingCart.items[i].price;
    //allBrands.push(Object.values(shoppingCart.items[i].specifications.brand));
    allBrands.push(shoppingCart.items[i].specifications.brand);
    // allItemQuantity.push(Object.values(shoppingCart.items[i].productName));
    // allItemQuantity.push(Object.values(shoppingCart.items[i].quantity));
    allItemQuantity.push(shoppingCart.items[i].productName);
    allItemQuantity.push(shoppingCart.items[i].quantity);

}
console.log(totalPrice);
console.log(allBrands);
console.log(allItemQuantity);

























































