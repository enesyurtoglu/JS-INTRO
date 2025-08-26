
//Create a function that returns true if the num is even else false

function isEven(number){
    return number % 2 === 0;
}

console.log(isEven(6));

/*
Write a function named initials which takes 2 arguments as fname and lname and 
return initials

initials('John', 'Doe')      -> 'J.D.'
initials('Adam', 'Smith')    -> 'A.S.'
initials('Max', 'Smith')     -> 'M.S.'
*/

function initials(fname,lname){
    return `${fname.at(0)}.${lname.at(0)}.`.toLocaleUpperCase;
}

initials('enes', 'ihsan');

function inits (fullName){
    //return `${fullName[0]}${fullName[fullName.indexOf(' ') + 1]}`.toLocaleUpperCase();
    let fulllName = fullName.split(' ');
    return (fullName[0][0] + fullName[1][0]).toLocaleUpperCase();
}   

console.log(inits('ihsan şahin'));





