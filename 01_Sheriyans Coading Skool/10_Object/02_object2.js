/*
 (1) There can be typically four ways to create an Object in JavaScript.
    (a) Using object literal
    const user = {}  //! (empty obejct) or (object literal) or (non singleton object)
 
    (b) Using new keyword
    const user = new Object()     //! this is singleton object

    (c) Using Object.create() method
    Object.create => kr ke vi object bana skte hai but i.e is constructor method hai

    (d) Using Factory functions
    (e) Using Constructor functions
        
 */

// (1) Using object literal => Object literal is a list of key-value pairs enclosed in curly braces '{}'.
// Example.1  
const jsUSer = {
  name: "Ankit",
  age: 23,
  "county": 'India',
  lastLoginDays: ["Monday", "Saturday"],
};
console.log(jsUSer)

console.log(jsUSer.name);    // Output: Ankit
console.log(jsUSer['name']); // Output: Ankit

// Object.freeze(jsUSer)    //! freeze krne ke badd jsUser me kuch change nhi hoga

// (a) Modifying the property object
jsUSer.age = 24; //! change krne ke liye upar freez ko hatana padega       
jsUSer['county'] = 'Nepal'

console.log(jsUSer);

// (b) Adding property ( freeze ko hataenge tavi add/chnage/modifty hoga nhi toh nhi hoga)
jsUSer.salary = "50k";
console.log(jsUSer);

// Adding function in Same object as key value pair => jaise key value add kiye hai.
jsUSer.greetingOne = function () {
  return ("Hello jee");
};

jsUSer.greetingTwo = function () {
  return (`Hello, ${this.name}`)  // same object ko reference krna ho toh .this ka use hota hai
};

jsUSer.greetingThree = function (num1, num2) {
  return num1 + num2;
};

console.log(jsUSer);  // object me function vi add kr skte hai => they are called method

console.log(jsUSer.greetingOne);
console.log(jsUSer.greetingOne());
console.log(jsUSer.greetingTwo());
console.log(jsUSer.greetingThree(100, 100));


// Example.2
const obj = {
  name: 'Alice',
  age: 25
}

Object.seal(obj);
// In case of object.seal => It basically doesn't allow you to add new property but you can still modify exisisting property.
obj.age = 40;
obj.city = 'New York'

// In case of object.freeze => It freezing the object at the point of time you cann't add or modify existing property.
Object.freeze(obj);
obj.age = 30;

console.log('obj =', obj);  // Output: {name: 'Alice', age: 40} 



// Example.3
const tinderUser = {}; //! this is empty object
console.log(typeof tinderUser);  // Output: Object

// (1) adding properties
tinderUser.name = "Ankit";
tinderUser.isMarried = false;
tinderUser["nickName"] = "maahi";

console.log(tinderUser);  // Output: {name: 'Ankit', isMarried: false, nickName: 'maahi}

console.log(Object.keys(tinderUser));   // output: ['name',  'isLoggedIn',  'nickName']
console.log(Object.values(tinderUser)); // output: ['Ankit', false, 'maahi']
console.log(Object.entries(tinderUser)); // Array ke Ander Array milega

// Notes: object me E wala properties exist krta hai ya nhi  => (true or false)
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // output: false
console.log(tinderUser.hasOwnProperty("isMarried"));  // output: true


// Exmaple.4  //! (Nested object)
const userDetails = {
  email: "google.com",
  fullname: {
    userfullname: {
      firstname: "Ankit",
      lastname: "Tripathi", // object ke andre object ki nesting
    },
  },
};
console.log(userDetails);

console.log(userDetails.email);  
// Output: google.com

console.log(userDetails.fullname); 
// Output: {userfullname:{ firstname: 'Ankit', lastname: 'Tripathi'}}

console.log(userDetails.fullname.userfullname); 
// output: { firstname:'Ankit', lastname: 'Tripathi'}

console.log(userDetails.fullname.userfullname.firstname); 
// output: Ankit


//! Adding anonomus function as key value pair in object
userDetails.greet = function () {
  return `Hello ${this.fullname.userfullname.lastname} ji`;
};
console.log(userDetails.greet()); // Output: Hello Tripathi ji
console.log(userDetails);


// (2) Using new keyword => We can use the new keyword along with the Object constructor to create an empty object and then add properties and methods to it.

// Example.1
let person = new Object();
console.log(person); // Output : {}

// Adding Properties
person.firstName = "Mayank";
person.lastName = "Pandey";
person.age = 21;
person.hobbies = ["reading", "sleeping", "writing"];

console.log(person);

/* Output :
{
  firstName: 'Mayank',
  lastName: 'Pandey',
  age: 21,
  hobbies: [ 'reading', 'sleeping', 'writing' ]
}
*/