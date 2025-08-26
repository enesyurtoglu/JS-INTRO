
//Convert string to a number

let price = '100';

let newPrice = parseFloat(price) + 10; // + hariç diğer operatorler çalışır fakat + concatination yapar
// parseFloat converts the string to a floating-point number
// parseInt would convert it to an integer
console.log(newPrice);

//Convert number to a string - rarely used

let count = 10;

console.log(count.toString()); // "10" - converts number to string
console.log(count.toString() + 5 ); // "105" - concatenates string and number, result is a string