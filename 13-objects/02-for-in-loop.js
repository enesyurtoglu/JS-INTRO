const batch = {
  number: 11,
  program: 'SDET',
  numberOfStudents: 20
};

// for...in loop
for(const key in batch) {
  console.log(key);// returns the key itself
  console.log(batch[key]);// returns the key value
  console.log(key, batch[key]);
}

const arr = [ 'Rome', 'Berlin', 'Chicago' ];

for(const key in arr) {
  console.log(key, arr[key]);
}