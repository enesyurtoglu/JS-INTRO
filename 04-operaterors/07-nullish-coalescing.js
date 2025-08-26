/* Falsy values: 0, "", null, undefined, NaN
   * Nullish values: null, undefined
 
   * let result = value1 || value2;
   * If value1 is falsy (0, "", null, undefined, NaN), then the resiult is always value2.
   * If value1 is truthy, then the result is value1.
   * 
   * let result = value1 ?? value2;
   * If value1 is nullish (null, undefined), then the resiult is always value2.
   * If value1 is truthy, then the result is value1.
 */

let nameInTheServer = 0;

let name = nameInTheServer || "Guest";
console.log(name); // "Guest"


let nameInTheServer1 = null || undefined;
let name1 = nameInTheServer1 ?? "Guest";
console.log(name1); // "Guest"