class Program {
  // static properties or instance variables
  static name = 'SDET';
  static batchNo = 11;

  // instance methods
  funcA() {
    console.log('A');
  }

  static funcB() {// This is a static method so it can be accessed via the Class name i.e: Program.funcB --> B
    console.log('B');
  }
}

//Program.funcA(); // you cannot access instance methods and properties with class name
Program.funcB(); // B
console.log(Program.name);
console.log(Program.batchNo);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Math.PI);

const p1 = new Program();
p1.funcA(); // since fucnA is not static it can still be accessd by any object. i.e: p1
console.log(p1.name); // returns Undefined since this 'name' belongs to Class but not the object i.e: p1