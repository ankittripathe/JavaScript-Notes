//! forEach => forEach Method modify the original Array list. 

// Example.1
let arr = [1, 2, 3, 4, 5];

// forEach using Normal function
arr.forEach(function printVal(val){ //val at each index
  console.log("val =", val);
});
// output are:-
// 1
// 2
// 3
// 4
// 5


// Example.2
const brand = ["vivo", "iphone", "moto"];

// generally callback function pass krte hai in the form of arrow function.
brand.forEach((index) => {
  console.log("index =", index);
});
// output are:
// vivo
// iphone
// moto


// Example.3
const cities = ["pune", "chennai", "mumbai"];

cities.forEach((val, index, array) => {
  console.log(val.toLocaleUpperCase(), index, array);
});


// Example.4
let aaray = ["pune", 2, 3, 4, 5];

aaray.forEach((val) => {
  console.log('val =', val * val);
});
// output are:-
// NaN
// 4
// 9
// 16
// 25
