// for-in loop => (object or Array) ke liye
//! Notes: for-in loop is used to iterate over the keys (or properties) of an object or the indices of an array.

// Exmaple.1
let student = {
  name: "ankit",
  age: 24,
  cgpa: 7.9,
  isPass: true,
};

for (let key in student) {
  // console.log("key =", key, "value =", student[key]);
  console.log(`key =${key}, value = ${student[key]}`);
}
// output are:-
// key = name value = ankit
// key = age value = 24
// key = cgpa value = 7.9
// key = isPass value = true


// Example.2
for (let key in "Ankit") {
  console.log(key);
}
// output are:-
// 0
// 1
// 2
// 3
// 4



// Example.3
let portfolio = {
  name: "aadhya",
  age: 29,
  cgpa: 8.9,
};
for (let key in portfolio) {
  console.log(`key = ${key} value = ${portfolio[key]}`);
}
// output are:-
// key = name value = aadhya
// key = age value = 29
// key = cgpa value = 8.9


// Example.4
let item = ['milk', 'Egg', 'butter', 'coffee']
for (const key in item) {
  console.log(`key = ${key} & value = ${item[key]}`)
}
// output are:-
// key = 0 & value = milk
// key = 1 & value = Egg
// key = 2 & value = butter
// key = 3 & value = coffee


// Example.1 


for (const element of name) {
  console.log(element);
  
}