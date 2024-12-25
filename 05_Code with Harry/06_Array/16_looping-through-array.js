//! for loop
let num = [3, 5, 1, 2, 4];
for (let i = 0; i < num.length; i++) {
  console.log(" num =", num[i]);
}

//! forEach loop
// Example.1
let numb = [3, 5, 1, 2, 4];
numb.forEach((element) => {
  console.log(element * element);
});

// Example.2
const array1 = ["a", "b", "c"];
array1.forEach((element) => {
  console.log(element);
});



//! Array.form
let name = "Ankit";
let arr = Array.from(name);
console.log(arr);

//! for-of loop
// Example.1
let item = [33, 100, 99, 2, 4, 77];
for (let i of item) {
  console.log(i);
}

// Example.2
for (const elem of [{ name: "ankit", age: 24 }]) {
  console.log("elem =", elem);
}

// Example.3
for (const elm of "Ektu"){
    console.log(elm);  
}


//! for-in loop
// Example.1
let car = [1, 33, 55, 99, 10, 56, 77];
for (let i in car) {
  console.log(i);       // kis position pe present hai o output dega (key)
  console.log(car[i]);  // will print the value of the elements
}


// Example.2
let fruits = ["mango", "leechi", "papaya"];
for (const key in fruits) {
  console.log(`key = ${key} & value = ${fruits[key]}`);
}

