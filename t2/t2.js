"use strict";

const numbers = [];

for (let i = 1; i <= 5; i++) {
  const num = Number(prompt("Anna luku " + i + ":"));
  numbers.push(num);
}

console.log("Luvut:", numbers);

const searchNum = Number(prompt("Anna haettava luku:"));
if (numbers.includes(searchNum)) {
  console.log("Luku " + searchNum + " löytyy taulukosta.");
} else {
  console.log("Lukua " + searchNum + " ei löydy taulukosta.");
}

numbers.pop();
console.log("Päivitetyt luvut:", numbers);

numbers.sort(function(a, b) {
  return a - b;
});
console.log("Luvut järjestettynä:", numbers);
