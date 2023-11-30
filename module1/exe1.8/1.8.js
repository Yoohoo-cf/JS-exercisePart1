"use strict";

const startYear = prompt("Enter the start year: ");
const endYear = prompt("Enter the end year: ");
const printYear = document.querySelector("#target")

for (let year = startYear; year <= endYear; year++) {
    if ( year % 400 === 0 || (year % 4 ===0 && year % 100 !== 0 )) {
        printYear.innerHTML += `<li>${year}</li>`
    }
}