/*Task-1
Write a function named as tripleWord() which takes a string word as an argument and returns the given word back tripled when invoked.
*/

const tripleWord = (text) => console.log(text + text + text);
tripleWord('üç');

/*Task-2
Write a function named as has4() which takes a string word as an argument and returns true if given string has at least 4 characters, and false otherwise when invoked.
*/

const has4 = (str) => str.length >= 4;
console.log(has4('abcd'));

/*Task-3
Write a function named as celciusToFahrenheit() which takes a number to be considered as Celcius value and returns the Fahrenheit value when invoked.

Conversion Formula: The function uses the formula (celsius * 9) / 5 + 32 to perform the conversion from Celsius to Fahrenheit.
Multiply the Celsius temperature by 9.
Divide the result by 5.
Add 32 to the result.

Examples:
celciusToFahrenheit(20) 	-> 68
celciusToFahrenheit(25) 	-> 77
celciusToFahrenheit(0) 	-> 32
celciusToFahrenheit(-10) 	-> 14
*/

let celciusToFahrenheit = (celc) => (celc * 9) / 5 + 32;
console.log(celciusToFahrenheit(25));

/*Task-4
Write a function named as kgToPounds() which takes a number to be considered as Kilograms value and returns the Pounds value when invoked.

Conversion Formula: The function uses the formula kilogram * 2.2 to perform the conversion from Kilograms to Pounds.
Multiply the Kilograms value by 2.2.

Examples:
kgToPounds(1) 	-> 2.2
kgToPounds(20) 	-> 44
*/

function kgToPounds(kilogram) {
    return kilogram * 2.2;
};
console.log(kgToPounds(20));

/*Task-5
Write 2 functions named as rectangleArea() and rectanglePerimeter() which calculate the area and perimeter of a rectangle when invoked.

NOTE: Assume the sides of the rectangle are x and y.

Conversion Formula:
Area: x * y
Perimeter 2 * (x + y)
*/

const rectangleArea = (x,y) => x * y;
const rectanglePerimeter = (x,y) => 2 * (x + y);

console.log(rectangleArea(2,3));
console.log(rectanglePerimeter(2,3));

/*Task-6
Write 2 functions named as squareArea() and squarePerimeter() which calculate the area and perimeter of a square when invoked.

NOTE: Assume the side of the square is x.

Conversion Formula:
Area: x * x
Perimeter 4 * x
*/

const squareArea = (x) => x * x;
const squarePerimeter = (x) => 4 * x;

console.log(squareArea(2));
console.log(squarePerimeter(2));











































































