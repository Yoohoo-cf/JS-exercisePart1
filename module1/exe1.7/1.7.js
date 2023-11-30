"use strict";

const diceNum = prompt("Enter your the number of dice rolls: ")
let sum = 0;

for ( let i =0; i < diceNum; i++) {
    const dice = Math.floor(Math.random() * 6 + 1);
    sum += dice
}

document.querySelector('#target').innerHTML = `The sum of of dice rolls is ${sum}`