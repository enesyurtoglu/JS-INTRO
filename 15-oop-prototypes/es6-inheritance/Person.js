class Person {
  constructor(fullname, age) {
    this.fullname = fullname;
    this.age = age;
  }
  eat(str = 'food') {// if not provider any str it is going to be food. if provided food will be replaced by  the provide str.
    console.log(`${this.fullname} eats ${str}.`);
  }
  sleep(num = 8) {
    console.log(`${this.fullname} sleeps ${num} hours.`)
  }
  walk() {
    return false;
  }
}

module.exports = Person;
