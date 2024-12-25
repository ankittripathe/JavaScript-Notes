/* Objects :- Collection of different variables (key value pairs)
  (1) Objects are more complex data types in JavaScript. They are composed of key-value pairs, where the keys are strings and the values can be any data type (including primitives and other objects, functions, arrays).

  (2) Objects are mutable, which means that they can be changed after they are created.

  (3) There are several other data types in JavaScript that are classified as objects, including
    arrays, functions, dates. These data types behave similarly to objects in that they are mutable and can be modified after they are created.

  (4) We can access the properties of an object using
  (a) Dot notation
  (b) Bracket Notation

  (5) We can also dynamically add, modify and delete the properties in the objects.

  (6) Objects can also contain functions as properties. These functions are often referred to as methods.

  (7) There can be typically four ways to create an Object in JavaScript.
    (a) Using object literal
    (b) Using new keyword
    (c) Using Object.create() method
    (d) Using Factory functions
    (e) Using Constructor functions
*/

// Example.1
let person = {
  name: "Mayank",
  age: 21,
  country: "India",
};

// Dot Notation
console.log(person.name); // Output: Mayank
console.log(person.age); // Output: 21
console.log(person.country); // Output: India

// Bracket Notation
console.log(person["name"]); // Output: Mayank
console.log(person["age"]); // Output: 21
console.log(person["country"]); // Output: India

console.log(person); // Output: {name: 'Mayank, age: 21, country: 'India}

//! We can also dynamically add, modify and delete the properties in the objects.//

// (1) Adding a property
person.isSleeping = false; // dot Notation
person["isMarried"] = true; // bracket notation

// (2) Modifying a property
person.name = "Ankit"; // dot Notation
person["age"] = 30; // bracket notation

//! Notes: In this example, the "age" property of the "person" object is changed from 21 to 30. This changes the value of the object itself, rather than creating a new object.

// (3) Deleting a property
delete person.country; // dot Notation
// delete person['country']     // bracket Notation

console.log("person =", person);
// Output: { name: 'Ankit', age: 30, isSleeping: false, isMarried: true }

//! Objects can also contain functions as properties. These functions are often referred to as methods //
// Example.2
const student = {
  name: "Adhya",
  age: 22,
  country: "India",
  message: function () {
    return `Hello, my name is ${this.name}`;
  },
};
console.log(student.message()); // Output: Adhya

console.log(typeof student); // Output: Object
console.log(typeof student.name); // Output: String
console.log(typeof student["age"]); // Output: number
console.log(typeof student.country); // Output: String
console.log(typeof student.message); // Output: function
console.log(typeof student.message()); // Output: String

// Example.3
let product = {
  Company: "zomato",
  price: 999,
  "item-Name": "T-shirt",
  displayPrice: function () {
    console.log(`price of the product is ${this.price}`);
  },
};
product.displayPrice(); // Output: Price of the product is 999
console.log(product["item-Name"]); // Output: T-Shirt

// Example.3
let userDetails = {
  name: "Ankit",
  age: 24,
  salary: 30000,
  "company-Name": "wipro",
};
console.log(userDetails);      // Output: {name: 'Ankit', age: 24, salary: 3000, company-Name: wipro}

console.log(userDetails.name);           // Output: Ankit
console.log(userDetails.age);            // Output: 24
console.log(userDetails.salary);         // Outpit: 3000
console.log(userDetails["company-Name"]);// Output: wipro

// Modifying value
userDetails.salary = 50000;
console.log(userDetails.salary);   // Output: 50000

// delete the property
delete userDetails.age;
delete userDetails["company-Name"];

console.log(userDetails); // Output: { name: 'Ankit', salary: 5000}


//! Example.4 (intresting)
const apple = {
  color: "Green",
  price: { bulk: "$3/kg", smallQty: "$4/kg" },
};
console.log(apple.color);       // => Green
console.log(apple.price.bulk);  // => $3/kg

