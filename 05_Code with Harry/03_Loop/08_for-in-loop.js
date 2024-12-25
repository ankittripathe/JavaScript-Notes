//! for-in loop => (object & Array) ke liye

//! for-in loop (object ke liye)
// Example.1
let myObject = {
  js: "javaScripts",
  cpp: "C++",
  rb: "ruby",
  py: "python",
};

// how to acess key
for (const key in myObject) {
  console.log("key =", key); // key aise nikalte hai object ka
}

// how to acess value
for (const key in myObject) {
  console.log("value =", myObject[key]); // value aaise nikalte hai object ka
}

// Exmaple.2
let student = {
  name: "ankit",
  age: 24,
  cgpa: 7.9,
  isPass: true,
};

// how to acess both key & value
for (let key in student) {
  console.log(`key: ${key}, value: ${student[key]}`);
}

// Example.3
let obj = {
  Ankit: 90,
  Ram: 95,
  Ekta: 99,
};
for (let a in obj) {
  // console.log("Marks of " + a + " are " + obj[a]);
  console.log(`marks of ${a} is ${obj[a]}`); // new method
}

//! for-in-loop (Array ke liye)
// Example.1
let car = [1, 33, 55, 99, 10, 56, 77];
for (let i in car) {
  console.log(i); // numbering kitna hai output dega (key )
  console.log(car[i]); // elements print krne ke liye e line krne padega
}

// Example.2
let fruits = ["mango", "leechi", "papaya"];
for (const key in fruits) {
  console.log(key); // how to access key (for-in-loop Array ke liye)
}

// Example.3
let statrup = ["blinkit", "Zepto", "Zomato"];
for (const key in statrup) {
  console.log(statrup[key]); // how to access value (for-in-loop Array ke liye)
}

// Example.4
const programming = ["js", "kotlin", "java", "go-lang"];
for (const key in programming) {
  console.log(`index: ${key}  value ${programming[key]}`);
}

// Example.5
let num = [1, 33, 55, 99, 10, 56, 77];
for (let i in num) {
  console.log(num[i]);
}


//! for-in-loop (string ke liye)
// Example.1
let name = "Ektuuu";
for (const key in name) {
  console.log("key =", key); // shift key matalb index pata chalega.
  console.log(name[key]); // shirf value dega.
  //  console.log(`key = ${key} & value = ${name[key]}`);
}

// Example.2
let bestFriends = "avinash";
for (const key in bestFriends) {
  console.log(`index = ${key}`, `value = ${bestFriends[key]}`); // key aur value
}
