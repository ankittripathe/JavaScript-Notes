//  const user = {}    (this is empty obejct)
//  Object.create => kr ke vi object bana skte hai but i.e is constructor method hai

// Example.1  (object literal)
const jsUSer = {
  name: "Ankit",
  "full name": "Ankit Tripathi",
  age: 23,
  email: "ankit@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
console.log(jsUSer);

console.log(jsUSer.email); // output: ankit@gmail.com
// console.log(jsUSer["email"]);     // output: ankit@gmail.com (E vi Ek tarika hai Esse Error nhi aata)

// console.log(jsUSer.age);          // output: 23
// console.log(jsUSer["age"]);       // output: 23

console.log(jsUSer["full name"]); // output: Ankit Tripathi

//? Changing the value of object //

jsUSer.email = "ankit@hotmail.com";
// Object.freeze(jsUSer)                //! freeze krne ke badd jsUser me kuch change nhi hoga

jsUSer.email = "ankit@outlook.com"; //! change krne ke liye upar freez ko hatana padega

console.log(jsUSer);

// Adding new key value pair (freeze ko hataenge tavi add hoga nhi toh nhi hoga. Because freeze lagane se nahi change hoga nahi add )
jsUSer.salary = "50k";
console.log(jsUSer);

// Adding function in Same object as key value pair => jaise key value add kiye hai.
jsUSer.greetingOne = function () {
  console.log("Hello jee");
};

jsUSer.greetingTwo = function () {
  console.log(`Hello jee, ${this.name}`);
  // same object ko reference krna ho toh this. ka use hota hai
};

jsUSer.greetingThree = function (num1, num2) {
  return num1 + num2;
};

console.log(jsUSer); // object me function vi add kr skte hai
console.log(jsUSer.greetingOne);
console.log(jsUSer.greetingOne());
console.log(jsUSer.greetingTwo());
console.log(jsUSer.greetingThree(100, 100));

// Example.2
const mySym = Symbol("key");

const user = {
  name: "Babu",
  age: 22,
  [mySym]: 44,
};
console.log(user);
console.log(user[mySym]); //Symbol ke square bracket ke ander hi kr ke access krte hai

//! Example.3 (intresting)
const apple = {
  color: "Green",
  price: { bulk: "$3/kg", smallQty: "$4/kg" },
};
console.log(apple.color); // => Green
console.log(apple.price.bulk); // => $3/kg

//! Example.5 (delete property)
const person = {
  name: "Smile",
  age: 23,
  hobby: "contant creation",
  goal: "software Engineer",
};

//! delete property of obejct
// delete person['hobby']
delete person.hobby;

console.log(person); // output: { name: 'Smile', age: 23, goal: 'software Engineer' }
