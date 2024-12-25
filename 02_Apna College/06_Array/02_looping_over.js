// Looping through Array
// Example.1
let heros = ["ironman", "spiderman", "thor", "hulk"];
for (let i = 0; i < heros.length; i++) {
  console.log(heros[i]);
}
// output are:-
// ironman
// spiderman
// thor
// hulk

// for of loop se
for (let val of heros) {
  console.log(val);
}


// Example.2
let cities = ["pune", "chennai", "mumbai"];

// for of loop => use to get the value from an Array
for (let city of cities) {
  console.log(city);
}
// output are"
// pune
// chennai
// mumbai


// for in loop => use to get key from Array
for (let city in cities) {
  console.log(city);
}
// output are:
// 0
// 1
// 2

