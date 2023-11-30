"use strict";

const stuName = prompt("Enter your name: ");
let printRoom = `Welcome, ${stuName} is in class `;
const ranNum = Math.floor(Math.random() * 4 + 1);

switch(ranNum) {
    case 1:
        printRoom += 'Gryffindor';
        break;
    case 2:
        printRoom += 'Slytherin';
        break;
    case 3:
        printRoom += 'Hufflepuff';
        break;
    case 4:
        printRoom += 'Ravenclaw';
        break;
}

document.querySelector('#target').innerHTML = printRoom;



