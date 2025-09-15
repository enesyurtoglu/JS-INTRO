const book = {
  author: {
    fname: 'Stefan',
    lname: 'Zweig'
  },
  title: 'Amok',
  pages: 62
};

Object.freeze(book); //freezes only the main objects 

book.title = 'new title';// being frozen
book.author.fname = 'first name changing';// sub elements are not being frozen, still changeable
book.author.lname = 'last name changing'; // sub elements are not being frozen, still changeable
// to freeze the sub elements "Object.freeze(book.author)" must be used

console.log(Object.isFrozen(book)); // true

console.log(book);
