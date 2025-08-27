const animals = ['Lion', 'Bird', 'Tiger'];

animals.push('Rabbit');
animals.push('Monkey', 'Fish');

console.log(animals);

/*
TASK: add one or more elements to the tail (end) of the array 
ARGUMENTS: one or more elements
RETURN: it returns a new length of the array
STATIC or  INSTANCE: instance
DOES IT MODIFY ORIGGNAL ARRAY: Yes
*/


const numbers = [5, 10, 100, 7, 20];

numbers.pop();//20
numbers.pop();//7

console.log(numbers);


/*
TASK: removes the last element of the array 
ARGUMENTS: one args
RETURN: it returns the removed element 
STATIC or  INSTANCE: instance
DOES IT MODIFY ORIGGNAL ARRAY: Yes
*/

console.log([].pop());// undefined

