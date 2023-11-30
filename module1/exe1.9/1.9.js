"use strict";

const num = prompt("Enter an integer: ");

let prime = true;

for (let i = 2; i < num; i++) {
    if ( num % i === 0) {
        prime = false;
        break;
    }
}

if (prime) {
    document.querySelector('#target').innerHTML = `${num} is a prime number`
} else {
    document.querySelector('#target').innerHTML = `${num} is NOT a prime number`
}


