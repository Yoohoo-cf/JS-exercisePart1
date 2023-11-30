"use strict";

const int1 = parseInt(prompt("Input the first integer: "));
const int2 = parseInt(prompt("Input the second integer: "));
const int3 = parseInt(prompt("Input the third integer: "));

const sum = int1 + int2 + int3;
const average = (int1 + int2 + int3) / 3;

document.querySelector('#sum').innerHTML = `The sum of the three number is ${int1 + int2 + int3}`;
document.querySelector('#product').innerHTML = `The product of the three number is ${int1*int2*int3}`;
document.querySelector('#average').innerHTML = `The average of the three number is ${(int1 + int2 + int3)/3}`;