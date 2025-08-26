//CHECKING THE INVENTORY OF A GIVEN TEXT -- RETURNS BOOLEAN
//startsWit() vs endsWith()

let company = 'TechGlobal';

console.log(company.startsWith('T')); // true
console.log(company.startsWith('Tech')); // true
console.log(company.startsWith('TechGlobal')); // true

console.log(company.startsWith('t')); // true
console.log(company.toLowerCase().startsWith('t')); // true

let address = '123 Main St';

console.log(address.startsWith('123', 6)); //false search starts from index 6
console.log(address.startsWith('Main', 4)); // true searhh starts from index 4


console.log(company.endsWith('l')); // true
console.log(company.endsWith('Global')); // true
console.log(company.endsWith('TechGlobal')); // true

console.log(company.startsWith('') && company.endsWith('')); // true

//includes() method

let quote = `Let's do it`;

console.log(quote.includes('do')); // true
console.log(quote.includes('Do')); // false
console.log(quote.includes('do it')); // true
console.log(quote.includes('')); // true
console.log(quote.includes(' ')); // true
console.log(quote.includes('let')); // false

// TO FIND THE INDEX NUMBERS OF A GIVEN TEXT -- RETURNDS INDEX NUMBER
// search() method

let str = 'abcde';

console.log(str.search('b')); // 1
console.log(str.search('cde')); // 2
console.log(str.search('f')); // -1 (not found)
console.log(str.search('')); // 0 (empty string found at index 0)
console.log(str.search('a')); // 0 (found at index 0)

// indexOf() and lastIndexOf() methods

let today = 'saturday';

console.log(today.indexOf('a')); // 1 (first occurrence)
console.log(today.lastIndexOf('a')); // 6 (last occurrence)
console.log(today.lastIndexOf('t'));

console.log(today.indexOf('z')); // -1 (not found)
console.log(today.indexOf('')); // 0 (empty string found at index 0)
console.log(today.lastIndexOf('')); // 8 (empty string found at the end)

console.log(today.indexOf('r')); // 4
console.log(today.lastIndexOf('r')); // 4


console.log(today.indexOf('sat') !== -1 ); //true
console.log(today.indexOf('sunday') === 0); // false

// if the result of indexOf (or lastIndexOf) is 0 or positive -> We have the substring
// if the result of indexOf (or lastIndexOf) is -1 -> We don't have the substring















