
const person = {
    fname: 'John',
    lname: 'Doe',
    age: 30,
    isStudent: false
};


let fname = person.fname; // Accessing properties
console.log(fname); // Output: John
console.log(typeof fname);

const program = {
    name: 'SDET',
    start: 'Jan 20, 2025',
    duration: '6 months'
};

console.log(program);

program.strat = 'Jan 15';
program['duration'] = '7 months';

console.log(program); // Output: { name: 'SDET', start: 'Jan 15', duration: '7 months' }

const studernt = {
    fullName: 'Jane Smith',
    courses: ['JavaScript', 'Python', 'Java'],
    address: {
        city: 'Los Angeles',
        state: 'CA',
        zip: '90001'// Preferred to be a string
    },
};

console.log(studernt); // Output: { fullName: 'Jane Smith', courses: ['JavaScript', 'Python', 'Java'], address: { city: 'Los Angeles', state: 'CA', zip: '90001' } }

studernt.age = 25; // Adding a new property
console.log(studernt); // Output: { fullName: 'Jane Smith', courses:

delete student.age; // Deleting a property
console.log(studernt); // Output: { fullName: 'Jane Smith', courses: