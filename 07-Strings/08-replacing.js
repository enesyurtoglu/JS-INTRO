
let str = '123 Street 123';

let strReplaced = str.replace('123', '###');
let strReplacedAll = str.replaceAll('123','###');

console.log(strReplaced); //replaces onl the first occurance
console.log(strReplacedAll);// replaces all occurances
console.log(str.replace('456', '999')); // nothing changes