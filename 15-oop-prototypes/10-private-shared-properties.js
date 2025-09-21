class Citizen {
  // public property
  country = 'US';
  batch = 11;

  // private properties - encapsulation
  #SSN;
  #secret = 'secret info';

  constructor(fullname, age) {
    this.fullname = fullname;
    this.age = age;
  }

  // getters and setters for private properties which provides in-direct access This is called ENCAPSULATION
  getSSN(adminPassword) {// So this is a READ ONLY
    if(adminPassword === 'SecretPassword') return this.#SSN;
    throw new Error('You are not authorized!!!');
  }

  setSSN(ssn) {// So this is WRITE ONLY
    if(ssn.length === 9) this.#SSN = ssn;
    else throw new Error('The SSN is not correct!');
  }

  getSecret() { // So this is a READ ONLY since it is already provider in the class. No need for setter method
    return this.#secret;
  }
}

const c1 = new Citizen('John Doe', 25);
const c2 = new Citizen('Jane Doe', 25);

c1.country = 'Canada';
c1.age = 30;
c1.setSSN('123121234');

console.log(c1);
console.log(c2);

// 
c1.setSSN('123121234');
console.log(c1.getSSN('SecretPassword'));

console.log(c2.getSecret());