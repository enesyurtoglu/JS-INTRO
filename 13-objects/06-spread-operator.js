const numbers = [ 5, 10, 20, 15 ];

console.log(Math.max(...numbers)); // array den çıkarıp sadece numaralar haline getiriyor. 
console.log(Math.min(...numbers));


const batch = {
  number: 11,
  program: 'SDET',
  startDate: 'January 20, 2025',
  address: {
    street1: 'Street',
    city: 'Chicago',
    state: 'IL',
    zip: 12345
  }
};

const student1 = {
  fname: 'Ayah',
  lname: 'abc',
  ...batch//elemanları object içinden çıkarıp buraya ekliyor. 
};

const student2 = {
  ...batch,//when we want all the individual elements.
  fname: 'Alina',
  lname: 'abc',
  //...bacth.address// when we want only an individual element
  
};


console.log(student1);
console.log(student2);


const process = {
  url: 'www.techglobal-training.com',
  username: 'TechGlobal',
  password: 'Test1234'
};

const config = {
  env: { ...process }
}
