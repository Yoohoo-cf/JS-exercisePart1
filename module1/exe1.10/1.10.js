'use strict';

const diceNum = prompt("Enter the number of dice: ");
const sumNum = parseInt(prompt("Enter the sum of the eye numbers: "));

let hits = 0;

for ( let x = 0; x < 10000; x++){
    let total = 0;
    for (let i = 0; i < diceNum; i++) {
        total += Math.floor(Math.random() * 6 + 1)
  }

    if (total == sumNum) {
        hits += 1;
    }
}

const prob = (hits / 10000) * 100;

document.querySelector('#target').innerHTML = `Probability to get sum ${sumNum} with ${diceNum} dice is ${prob.toFixed(2)}%`
