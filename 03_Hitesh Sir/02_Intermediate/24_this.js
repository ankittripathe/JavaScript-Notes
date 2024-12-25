// Example.1
const user = {
  name: "Ankit",
  price: 199,
  greetMsg: function () {
    console.log(this.name); // Ankit
    console.log(this); // refer to the same object
  },
};
// user.greetMsg()

// Example.2
const users = {
  username: "Sam",
  price: 199,

  greetMessage: function () {
    console.log(`${this.username}, welcome to Our Home`);
    console.log(this);
  },
};
// users.greetMessage()

// users.username = "Raina"      //  In object here the value of username is changed.
// users.greetMessage()

// Example.3
function chai() {
  console.log(this); // global object:- window
}
// chai()

// Example.4
function demo() {
  let username;
  console.log(this.username); // undefined
  //! this jo hai o object me hi kaam krta hai. Aaise function me aake access nhi kr skte hai => object ke ander hi function hoga (method vi bolte hai) tab vi acess hoga)
}
// demo()

// Example.5
function one() {
  let username = "Ankit";
  console.log(this.username); // undefined
  console.log(this); // global object
}
// one()

// Example.6
const two = function () {
  let username = "Ankit";
  console.log(this.username); // undefined
  console.log(this); // object global
};
// two()

// Example.7 (Arrow function)
const coffee = () => {
  let username = "Ankit";
  console.log(this.username); // undefined
  console.log(this); // empty object => console browser me window object hota hai {}
};
// coffee();

/* Notes
  (1) regular function & arrow function me scope ke ander ==> console.log(this.username) ka value => undefined aaega.
  (2) regular function me scope ke ander ==> console.log(this) ka value => global object aaega.
  (3) arrow function me scope ke ander ==> console.log(this) ka value => empty objct {} 
  (matlab console me krnge toh window object {} aaega)

  (4) node environment me => console.log(this) ka value => {} empty object 
  (5) console browser me  => console.log(this) k value => window object {}
*/
