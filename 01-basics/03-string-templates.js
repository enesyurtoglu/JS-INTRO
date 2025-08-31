
const person = {
    fname: 'John',
    lname: 'Doe',
    age: 30,

};

let years = 5;

console.log(person.fname + ' ' + person.lname + ' will be ' + years);


let price = 5;
let quantity = 10;

let total = price * quantity;

console.log (total);

//The total price is = $25

console.log(`The total price is = $${price * quantity}`); // Using template literals for string interpolation


if(price > 5){
    console.log('çok pahalı');
}else{
    console.log('ucuzmuş')
};


