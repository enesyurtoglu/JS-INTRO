const arr = [ 10, 6, 4, 7, 2 ];

arr.fill(99, 2, 3);

console.log(arr);

/*
TASK: changes the array elements with a new value/element
ARGUMENTS: newValue for replacement, startIndex? = 0, endIndex? = arr.length
RETURN: modified array
STATIC or INSTANCE: instance
DOES IT MODIFY ORIGINAL ARRAY: Yes
*/

//startIndex? = 0, endIndex? = arr.length bunun anlamı:
//startIndex optinal(?).. Eğer verilmezse sıfıra eşittir
//endIndeş optianl (?).. Eğer verilmezse arr.length olarak alınır. 