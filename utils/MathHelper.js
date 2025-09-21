/** 
 * returns a random number between given two numbers
* @param {*} start starting number, inclusive
* @param {*} end ending number, inclusive
*/

function getRandomNumber(start, end){
    let max = Math.max(start, end);
    let min = Math.min(start, end);

    return Math.round(Math.random() * (max - min) + min);
}

module.exports.getRandomNumber = getRandomNumber;















