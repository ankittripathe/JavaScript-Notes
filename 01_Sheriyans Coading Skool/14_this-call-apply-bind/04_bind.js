// bind():- The .bind() method in JavaScript creates a new function that, when called, has its this keyword set to the provided value. Does not execute the function immediately; it returns a new function that can be invoked later.
// Stntax:- function.bind(thisArg, ...args)

// Example.1
const person = {
  name: "Ankit",
};

function user(age) {
  console.log(`Hello my name is ${this.name}, my age is ${age}}`);
}
// user.bind(person, 25);  // this will not work 

// Notes: bind bilkul call ki tarah hai lakeen uska answer turant nhi milta. bind return new function baad me chalane ke liye jo ki dusre variable me jake store hoga. (like baadmeChalaneKeliye) jab esko hum call tab chalega.
const baadmeChalaneKeliye = user.bind(person, 25)
baadmeChalaneKeliye()  // function call

