
let str1 = 'Today is Sunday';

const words = str1.split(' '); // boşluk ile ayırma yapıyor. 

console.log(words); //[ 'Today', 'is', 'Sunday' ]

console.log(words[0]); //Today

console.log(words[2].slice(0,3)); //Sun

let str2 = '+1 (312) 000 0000';

console.log(str2.split(' '));

console.log(str2.split(' ')[0] === '+1'); // true so it is a USA number

let str3 = 'C:\\Users\\techglobal\\Desktop\\MyFolder';

console.log(str3.split('\\')); // it takes the \\ and replaces it with the splitter
//[ 'C:', 'Users', 'techglobal', 'Desktop', 'MyFolder' ]

let str5 = 'Apple';

console.log(str5.split('')); //[ 'A', 'p', 'p', 'l', 'e' ]

// convert a date format from YYYY-MM-DD to MM/DD/YYYY

const actualDate = '2025-02-14';
const appDate = actualDate.split('-');

let expectedDate = `${appDate[1]}/${appDate[2]}/${appDate[0]}`;
console.log(expectedDate);

console.log(expectedDate === '02/14/2025');

















