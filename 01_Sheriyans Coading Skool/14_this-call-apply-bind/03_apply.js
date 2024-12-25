// apply():- Method is used to call a function with a specified this context and arguments provided as an array (or array-like object). It's a part of JavaScript's Function prototype.
// Syntax: function.apply(thisArg, [argsArray])

// Notes: call() ka syntax:-  functionName.call(thisArg, arg1, arg2, ...)
// apply() me argument bhejte time array me kr denge baki sab ohi:-  function.apply(thisArg, [argArray])

// Example.1
const person = {
  name: "Ankit",
};

function user(age) {
  console.log(`Hello my name is ${this.name}, my age is ${age}}`);
}
user.apply(person, [25]);


// Example.2
const user1 = { name: "Alice" };

function introduce(greeting, age) {
  console.log(`${greeting}, my name is ${this.name} and I am ${age} years old`);
}
introduce.apply(user1, ["hello", 25]);
// output: "hello, my name is Alice and I am 25 years old."


// Example.3
const details1 = {
  firstName: "Avinash",
  lastName: "Pandey",
  userDetails: function (greeting, age) {
    console.log(
      `${greeting} my name is ${this.firstName} ${this.lastName}, I am ${age} year old`
    );
  },
};

const details2 = {
  firstName: "Asish",
  lastName: "karn",
};

details1.userDetails.apply(details2, ["hello", 25]);
// Output:- hello my name is Asish karn, I am 25 year old
