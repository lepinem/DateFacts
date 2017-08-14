// app/index.js


const moment = require('moment');
const chalk = require ('chalk');


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


console.log("It is " + chalk.blue.bold(moment().format("dddd LL LTS")) + ".");
console.log("It is the " + chalk.magenta.bold(moment().dayOfYear()) + chalk.magenta.bold("th") + " day of the year.");
console.log("It is " + chalk.cyan.bold(secondsOfDay()) + " seconds into the day.");
console.log("It " + chalk.green.bold(response()) + " during Daylight Savings Time.");
console.log("It" + chalk.red.bold(leap()) + " a leap year.");
