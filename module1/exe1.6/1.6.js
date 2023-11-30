"use strict";

const answer = confirm("Should I calculate the square root?");
const result = document.querySelector('#target');

if (answer) {
    const number = parseFloat(prompt("Enter a number: "));
    if (number >=0) {
        result.innerHTML = `The square root of ${number} is ${Math.sqrt(number)}`
    } else {
        result.innerHTML = "The square root of a negative number is not defined"
    }
} else {
    result.innerHTML = "The square root is not calculated."
}