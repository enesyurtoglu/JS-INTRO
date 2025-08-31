const names = ['Alex', 'John', 'Jane'];

let namesStr1 = names.toString();
let namesStr2 = names.join();
let namesStr3 = names.join(' | ');
//Difference between join and toString: join allows us to separate the elements by given symbol etc. 

console.log(namesStr1); // Alex,John,Jane
console.log(namesStr2); // Alex,John,Jane
console.log(namesStr3); // Alex-John-Jane


const date = [2025, 2, 23];
console.log(date.join('/'));
console.log(date);

/*
join()
TASK: it converts our array to a string with a defined separator if given
ARGUMENTS: An optional separator
RETURN: returns a string
STATIC or INSTANCE: instance
DOES IT MODIFY ORIGINAL ARRAY: No
*/