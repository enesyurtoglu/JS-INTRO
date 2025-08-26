const date = new Date();

console.log(date.getFullYear()); //2025
console.log(date.getDay()); //current day (0-6)
console.log(date.getHours()); //current hours (0-24)
console.log(date.getMinutes()); // current minutes (0-60)
console.log(date.getSeconds()); // current seconds
console.log(date.getTime()); // alltiem passed since the start of the year
console.log(date.getDate()); // day of the month


let dayOfTheWeek = date.getDay(); // 0-sunday 6-saturday

/*
Write a program that tells if the day is WEEKEND or a WEEKDAY
0 or 6 -> WEEKEND 
1-5    -> WEEKDAY
*/

if(dayOfTheWeek === 0 || dayOfTheWeek === 6) {
  console.log('WEEKEND');
}
else {
  console.log('WEEKDAY');
}

switch(true) {
  case dayOfTheWeek === 0 || dayOfTheWeek === 6:
    console.log('WEEKEND');
    break;
  default:
    console.log('WEEKDAY');
}

switch(dayOfTheWeek){
  case 0:
  case 6:
      console.log('WEEKEND');
      break;
  default:
      console.log('WEEKDAY');
}


let result = dayOfTheWeek === 0 || dayOfTheWeek === 6 ? 'WEEKEND' : 'WEEKDAY';
console.log(result);













