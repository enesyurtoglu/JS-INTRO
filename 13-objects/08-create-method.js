const person = {
  fname: 'John',
  lname: 'Doe',
  age: 25
};

const person2 = Object.create(person);//copies the prototype of person object to the person2
console.log(person2) // returns {} since it is a prototype of person object
// when person has a change the change is applied to person2 as well

person.isAlive = true;// only changing person2, but person is not affected by this change.

console.log(person);

console.log(person2.age);
console.log(person2.fname);
console.log(person2.isAlive);
console.log(person2.address);//undefined