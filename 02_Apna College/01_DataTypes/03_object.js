/* Non-Primitive data Types:- 
  (1) object
  (2) Array
  (3) function
  (4) date

*/

// object:- => collection of different variables (key value pairs)

// Example.1
const student = {
  name: "Aadhya",
  age: 22,
  cgpa: 8.3,
  isPass: true,
};

// way to update the value of existing object
student.age = 24; // (method 1)
student["isPass"] = false; // (method 2)

// way to add New key value pair
student.rollNo = 44;

// way to access the value of object
console.log(student.name); // method 1
console.log(student["name"]); // method 2

console.log(student.age);

console.log(student.isPass);

console.log(student["cgpa"]);

console.log("student =", student);
// output:- { name:'Aadhya', age:24, cgpa:8.3, isPass:false, rollNo:44 }

// Example.2
const player = {
  name: "Ankit",
  age: 24,
  isWinner: true,
  average: 60,
};
console.log(player); // output:- { name: 'Ankit', age: 24, isWinner: true, average: 60 }

// Updating the value of existing object
player.name = "Dhoni";
player["age"] = 43;

// Add new key value pair
player.century = 25;

console.log("player =", player);
// output:- player = { name: 'Dhoni', age: 43, isWinner: true, average: 60, century: 25 }

console.log(player.name); // output:- Dhoni
console.log(player.century); // output:- 25
console.log(player["age"]); // ou 43

console.log(typeof player); // output:- object
console.log(typeof player.name); // output:- string
console.log(typeof player["average"]); // output:- number

// Example.3
const myFriend = {
  name: "Shivangi",
  age: 24,
  cgpa: 7.8,
};
console.log(myFriend); // output:- { name: 'Shivangi', age: 24, cgpa: 7.8 }
console.log(typeof myFriend); // output:- object

console.log(myFriend.name); // output:- Shivangi
console.log(myFriend["name"]); // output:- Shivangi

// updating value
myFriend.age = 26;
console.log("myFriend =", myFriend); // output:-{ name: 'Shivangi', age: 26, cgpa: 7.8 }

myFriend["age"] = 23;
console.log(myFriend); // output:- { name: 'Shivangi', age: 23, cgpa: 7.8 }

// Adding new key value pair
myFriend.nickName = "Uma";
console.log(myFriend); // output:- { name: 'Shivangi', age: 23, cgpa: 7.8, nickName: 'Uma' }

console.log(myFriend.nickName); // output:- Uma
console.log(typeof myFriend.nickName); // output:- string
console.log(typeof myFriend["age"]); // outptut:- number

//! Example.4 (intresting)
const apple = {
  color: "Green",
  price: { bulk: "$3/kg", smallQty: "$4/kg" },
};
console.log(apple.color);       // output:- Green
console.log(apple.price.bulk);  // output:- $3/kg


//! Example.5 (delete property)
const person = {
  name: "Smile",
  age: 23,
  hobby: "contant creation",
  goal: "software Engineer"
};

//! delete property of obejct
// delete person['hobby']
delete person.hobby; 

console.log(person); // output: { name: 'Smile', age: 23, goal: 'software Engineer' }

