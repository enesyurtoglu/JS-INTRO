
let city1;
let 2city1;// Invalid variable name (starts with a number)

let $city1; // Valid variable name (starts with a dollar sign)
let _city1; // Valid variable name (starts with an underscore)
let city-1; // Invalid variable name (contains a hyphen)        

let cityName; // Valid variable name (camelCase)
let CityName; // Valid variable name (PascalCase)
let city_name; // Valid variable name (snake_case)

var let = 'invalid'; // Invalid variable name (keyword used as variable name)

console.log(let); // Output: invalid
//Don't use reserved keywords as variable names

