const students = [
  ['A', 'B', 'C'],
  ['X', 'Y', 'Z'],
  ['K', 'L'],
  ['D']
];

console.log(students);
console.log(students.flat());

const numbers = [
  [1, 2, 3],
  [4, 5, [6, 7, [8, 9]]]
];

console.log(numbers);
console.log(numbers.flat());
console.log(numbers.flat(2));
console.log(numbers.flat(3));

//flat içindeki numara bizim kaçıncı dereceye katdar flat yapacağımızı belirler. 
// içi içe 3 array varsa ve parantez içini 3 yaparsak, tüm elemanlar flat olur.

/*
TASK: flattens nested-arrays
ARGUMENTS: it can take an optional depth argument 
  NOTE: by default it is 1
RETURN: a new array which flattened
STATIC or INSTANCE: Instance
DOES IT MODIFY ORIGINAL ARRAY: No
*/