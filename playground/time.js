const moment = require("moment");

// const date = new Date();
// console.log(date.getMonth());

// const date = moment();
// date.add(100, "year").subtract(9, "months");
// console.log(date.format("MMM Do, YYYY"));

// 10:35 am
// padded for minutes
// unpadded hour

const date = moment();
console.log(date.format("h:mm a"));

const createdAt = moment(123);
const someTimeStamp = moment().valueOf();
console.log(createdAt, someTimeStamp);