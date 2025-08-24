"use strict";

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

console.log("Fruits:", fruits);
console.log("Length of Fruits:", fruits.length);
console.log("Element at Index 2:", fruits[2]);
console.log("Last Element of Fruits:", fruits[fruits.length - 1]);


const vihannekset = [];

for (let i = 0; i < 3; i++) {
  const vihannes = prompt("Anna vihannes:");
  vihannekset.push(vihannes);
}

console.log("Vihannekset:", vihannekset);
console.log("Vihanneksia yhteensä:", vihannekset.length);
