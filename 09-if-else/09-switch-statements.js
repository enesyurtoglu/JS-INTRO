import { getRandomNumber } from './../utils/MathHelper.js';

let ran1 = getRandomNumber(1,3);

console.log(`Random number is ${ran1}`);

switch(ran1) {
    case 1:
        console.log('ONE');
        break;
    case 2:
        console.log('TWO');
        break;
    case 3:
        console.log('THREEE');
        break;
}

console.log('The end of the program')















