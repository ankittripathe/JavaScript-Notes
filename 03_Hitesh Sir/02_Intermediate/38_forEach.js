// Example.1
const coading = ["kotlin", "java", "ruby"];

//! method 1
coading.forEach(function (item) {
  // console.log(item); // for Each call back function hai toh => function greet(){} greet hat jaega.
});

//! method 2
coading.forEach((item) => {
  // console.log(item); // yaha pe vi arrow function greet = ()=>{}  aage ka greet hat jaega.
});

//! method 3
function myfun(item) {
  // console.log(item);
}
coading.forEach(myfun); // myfun() aaise nhi krna hai. Bas reference dena hai.

//! method 4
coading.forEach((item, index, arr) => {
  console.log(item, index, arr);
});


// Example.2
const myCoading = [
  {
    languageName: "JavaScripts",
    languageFileName: "js",
  },

  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoading.forEach((item) => {
  console.log(item);
  // console.log(item.languageName);
  // console.log(item.languageFileName);
});


// Example.3
let details = [
  { name: "Ankit", age: 23 },
  { name: "Aryan", age: 24 },
];

details.forEach((item, index, arr) => {
  console.log(item, index, arr)
  // console.log(item.name);
});


// Example.4
let friuts = ["apple", "leechi", "orange", "papaya"];

friuts.forEach((val) => {
  console.log(val);
  return val;
});
 

// Example.5
let psuStocks = ["ircon", "hudco", "texmaco", "rvnl", "ntpc"];
const final = psuStocks.forEach((items) => {
  console.log(items);
});
console.log(final); // kuch return nhi hota hai forEach me


// Example.6
let tataStocks = ["chemicals", "power", "consumer", "tele"];
const result = tataStocks.forEach((items) => {
  console.log(items);
  return items;
  //yaha return likhne pe vi return nhi hoga kuch kauki forEach kuch nhi return krta hai => undefine aa jaega de dega bas
});
console.log(result);

// Notes: forEach() me koie vi value return nhi hota hai, Esliye koie value nhi return ho rha hai
