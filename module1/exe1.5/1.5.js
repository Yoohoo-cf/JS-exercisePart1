"use strict";

const year = parseInt(prompt("Enter a year: "));
let printYear;

if (year % 100 === 0) {
    if (year % 400 === 0) {
        printYear = `Year ${year} is a leap year!`
    } else {
        printYear = `Year ${year} is Not a leap year!`
    }
} else if (year % 4 === 0) {
     printYear = `Year ${year} is a leap year!`
} else {
    printYear = `Year ${year} is Not a leap year!`
}


document.querySelector('#target').innerHTML = printYear;