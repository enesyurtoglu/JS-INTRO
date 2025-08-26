/*Task-1
Assume you are given 2 numbers to be 0 or 1.

Print true if they are same number.
Otherwise, print false
*/

let n1 = 3;
let n2 = 3;
console.log(n1 === n2);

/*Task-2
Assume you are given a single character.
Find if the given character is a letter or digit.
NOTE: if the character is not a letter or digit, print "INVALID INPUT"
*/
const typeOfChar = (character) => 
    typeof(character) === typeof(5) ? console.log(`Given char is a NUMBER`)
    :typeof(character) === typeof('') ? console.log(`Given char is a STRING`)
    : console.log(`INVALID CHAR`);

typeOfChar(6);

/*Task-3
Assume you are given a single character.
Find if the given character is a lowercase or an uppercase letter.
NOTE: if the character is not a letter, print "INVALID INPUT"
*/

function lowerOrUpperCase(char){
    if (typeof(char) === typeof('')){
        if (char === char.toLowerCase()){
            console.log(`The char is ALL LOWERCASE`);
        }
        else if (char === char.toUpperCase()){
            console.log(`The char is ALL UPPERCASE`);
        }
        else {
            console.log(`The char is either ALL LOWERCASE or ALL UPPERCASE`);
        }
    }else{
        console.log(`INVALID INPUT`);
    }
};

lowerOrUpperCase('AAA');

/*Task-4
Assume you are given a single character.
Find if the given character is a special character or not.
*/

//33-47 58-64 91-97 123-126
function isSpecialCharacter(char) {
  if (char.length !== 1) {
    throw new Error('Input must be a single character');
  }

  const code = char.charCodeAt(0);

  // Check if character is A-Z (65-90), a-z (97-122), or 0-9 (48-57)
  const isSpecialChar = 
    (code >= 33 && code <= 47) || 
    (code >= 58 && code <= 64) || 
    (code >= 91 && code <= 97) || 
    (code >= 123 && code <= 126);
  };  
   
  isSpecialCharacter('&');

/*Task-5
Assume you are given a single character.
Find if the given character is a vowel or not.

NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
*/

function isVowel(char){
    if(typeof(char) !== typeof('')){
        console.log(`INVALID INPUT`)
    }
    else if( 
        char === 'a' || 
        char === 'e' || 
        char === 'i' || 
        char === 'o' || 
        char === 'u' || 
        char === 'A' || 
        char === 'E' || 
        char === 'I' || 
        char === 'O' || 
        char === 'U'){
        console.log(`vowel`)
    }
    else
    {
        console.log(`not vowel`);
    }
};

isVowel('A');












































































