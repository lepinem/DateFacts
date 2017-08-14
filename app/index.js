// app/index.js


const moment = require('moment');

var seconds = moment().seconds();
var minutes = moment().minutes();
var hours = moment().hours();

const secondsOfDay = function secondsOfDay(){
  return ((seconds)+(minutes*60)+(hours*60*60))
}

const response = function response() {
  if (moment().isDST() === true){
    return "is";
  } else {
    return "is not";
  }
}


const leap = function leap() {
  if (moment().isLeapYear() === true){
    return " is";
  } else {
    return " is not";
  }
}


console.log("It is " + moment().format("dddd LL LTS") + ".");
console.log("It is the " + moment().dayOfYear() + "th day of the year.");
console.log("It is " + secondsOfDay() + " seconds into the day.");
console.log("It " + response() + " during Daylight Savings Time.");
console.log("It" + leap() + " a leap year.");
