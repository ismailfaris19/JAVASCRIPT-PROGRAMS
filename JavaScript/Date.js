// create instance to call date class:
let d = new Date(); // object
let c = Date(); // string
// console.log(d.toString());
// console.log(typeof d);
// console.log(typeof c);

// pass argument as an date and time:
// d = new Date("2019-08-02T11:30:00+10:00");

// to get today's date:
// console.log(d.getDate());

// to get today's day as 0, 1, 2, 3, 4, 5, 6:
// console.log(d.getDay());

// to get current year:
// console.log(d.getFullYear());

// to get today's date:
// console.log(d.getDate());

// to get selected year:
// d = new Date("July 6 1996")
// console.log(d.getFullYear());

// to get month, date and year:
// let [month, date, year] = d.toLocaleDateString("en-IN").split("/");
// let [month, date, year] = [d.getMonth(), d.getDate(), d.getFullYear()];
// console.log(month, date, year);

// to get hour, minutes and seconds:
// const [hour, minutes, seconds] = [d.getHours(), d.getMinutes(), d.getSeconds()];
// console.log(hour, minutes, seconds);

// Date class formats:
// d = new Date();
// d = new Date('December 17, 1995 03:24:00');
// d = new Date('1995-12-17T03:24:00');
// d = new Date(1995, 11, 17) // the month is 0-indexed
// d = new Date(1995, 11, 17, 3, 24, 0)
// d = new Date(628021800000) // passing epoch timestamp
// d = new Date(98, 2) // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
// d.setYear(98);
// d.setFullYear(1998);
// console.log(d);