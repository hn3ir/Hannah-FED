let val;

const today = new Date();
val = today;

let birthday = new Date();
// we can manually change date and time ourselves
birthday = new Date('9-9-1999 11:25:00'); 
birthday = new Date('September 9, 1999');

val = birthday;

val = today.getMonth();
    // just like arrays, getMonth method is zero based
// to get day of month
val = today.getDate();
val = today.getDay();
    // in JS the week starts on Sundays, just like arrays, getDay method is zero based.
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();

val = birthday;
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1218);
birthday.setHours(3);
birthday.setMinutes(45);
birthday.setSeconds(30);


//output
console.log(val);

