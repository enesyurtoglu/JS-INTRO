
let school = 'TechGlobal School';

let s1 = school.slice(0,4); // Tech
let s2 = school.slice(4,10); // Global
let s3 = school.slice(0,10); // TechGlobal
let s4 = school.slice(11,17); // School
let s5 = school.slice(11); //School start from 11 to tne end of the index

console.log(school.slice(4));
console.log(school.slice(-1)); // Gives the last index, useful..
console.log(school.slice(-2)); // Gives the last two index.. 





console.log('Apple'.slice(2,10)); //ple 10 is not an index but still accepted..
console.log('Apple'.substring(2,10)); //ple
console.log('orange'.slice(-10,10)); //Orange
console.log('Orange'.substring(2,10)); //orange

console.log('Banana'.slice(1,-1));//anan 
console.log('Banana'.slice(1,-2));//ana
console.log('Banana'.slice(0,-5));//'B'
console.log('Banana'.slice(1,-6));//''
console.log('Banana'.slice(1,0));//''
console.log('Banana'.slice(-2,-4));//''

console.log('Banana'.substring(1,-5)); //B
console.log('Banana'.substring(2,-2)); //Ba
console.log('Banana'.substring(2,0)); //Ba
console.log('Banana'.substring(2,1)); //a
console.log('Banana'.substring(2,3)); //n
console.log('Banana'.substring(2,5)); //n

// We will always use slice() method to extract substirgns
//If you have 2 posizive index:
   // if startındex < endIndex, then the resilt is a substring including startIndex, excluding endIndex
   // if startındex >= endIndex, then the resilt is always ''












