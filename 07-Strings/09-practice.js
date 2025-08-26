
/*
Get the last 5 chans from it
Morning
Saturday
Hello
*/

let str1 = 'Morning';

let res1 = str1.slice(-5);
console.log(res1);

/*
Get the first 3 and last 3 chans from it and concatanate them
Morning
Saturday
Hello
*/

let str2 = 'Morning';

let res2 = str2.slice(0,3) + str2.slice(-3);
console.log(res2);

if (str2.length < 3){
    throw new Error('The text has lest than 3 chars');
} 
else{
    let res2 = str2.slice(0,3) + str2.slice(-3);
    console.log(res2);
}
// repeat() method

console.log(str2.repeat(3));// repeats and concatanates the string 3 times.























