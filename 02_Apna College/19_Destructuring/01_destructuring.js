//! Destructuring is a concise way to extract values from objects or arrays and assign them to variables.

//! Destructuring in Object
//  Example.1
const course = {
  courseName: "Javascript",
  price: "999",
  courseInstructor: "Hitesh",
};
// console.log(course.courseName);            // output : JavaScripts
// console.log(course.price);                 // output: 999
// console.log(course.courseInstructor);      // output: Hitesh


// Destructuring Here (You can use object destructuring to extract the properties into variables)
const {courseName, price, courseInstructor, duration} = course

console.log(courseName);       // output: javaScripts
console.log(price);            // output: 999
console.log(courseInstructor); // output: Hitesh
console.log(duration);         // output: undefined (because object me kahi define hi nhi huwa hai)

// Notes: Destructuring krne se hamesha (object.key kr ke print nhi krna padega)

// Re-structure here
const { courseInstructor: Teacher, price: Amount, duration:Time } = course;
console.log(Teacher);    // output: Hitesh
console.log(Amount);     // output: 999
console.log(Time);       
// output: undefined (obejct me defined nhi hai toh Re-structure krte time vi undefined hoga)


// Example.2
const person = {
  name: 'Sanchita',
  age: 24,
  city: 'Mumbai'
};

const {name, age, city} = person
console.log(name);       // output: Sanchita
console.log(age);        // output: 24
console.log(city);       // output: Mumbai


const{name: personName, age:personAge, city: personCity} = person
console.log(personName);       // output: Sanchita
console.log(personAge);        // output: 24
console.log(personCity);       // output: Mumbai

//! Default values
const { name: firstName,  middleName,  lastName = 'Ugle',  address = 'London'} = person;
console.log(firstName);    // output: Sanchita
console.log(middleName);   // output: undefined
console.log(lastName);     // output: ugle
console.log(address);      // output: London


// Example.3 (Nested objects)
const employee = {
  id: 1,
  details: {Name:'Ankit', Position:'Developer'}
};

//! destructuring & re-structuring here
const { details: { Name:employeeName,  Position: role } } = employee;
console.log(employeeName); // output: Ankit
console.log(role);         // output: Developer

// Example.4
const human = {
  name: "kabir",
  grade: "A",
};

// You can rename the variables if needed & set default variable as well
const { name: myBoy, grade: marks, currentCity = 'Noida'} = human;
console.log(myBoy); // 'Tom'
console.log(marks); // '22'
console.log(currentCity); // noida


//! Destructuring in Array
// Example.1
const array = [1, 2, 3];
let [a, b, c] = array;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// Example.2
let items = [10, 20, 30, 40];
let [, second, , fourth] = items;   // You can skip elements in the array using commas:

console.log(second); // output:- 20
console.log(fourth); // output:- 40

// Example.3
let array1 = ['milk', 'paneer', true];
let [one, two, three = 2] = array1;

console.log(one);   // milk
console.log(two);   // paneer
console.log(three); // (default value)

// Example.4
let array2 = [1, 2, 3, 4, 5];
let [firstOne, secondOne, ...rest] = array2;

console.log(firstOne);  // 1
console.log(secondOne); // 2
console.log(rest);      // [3, 4, 5]

