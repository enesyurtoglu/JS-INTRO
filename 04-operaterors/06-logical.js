
// NOT (!), OR (||), AND (&&)

console.log(3 **2 < 10 || 5 > 2); // true
console.log(3 ** 2 < 10 && 5 > 2); // true
console.log(3 ** 2 < 10 && 5 < 2); // false
console.log(3 ** 2 < 10 || 5 < 2); // true  

console.log(!(3 ** 2 < 10)); // false
console.log(!(3 ** 2 < 10 || 5 > 2)); // false
console.log(!(3 ** 2 < 10 && 5 > 2)); // false
console.log(!(3 ** 2 < 10 && 5 < 2)); // true
console.log(!(3 ** 2 < 10 || 5 < 2)); // false

