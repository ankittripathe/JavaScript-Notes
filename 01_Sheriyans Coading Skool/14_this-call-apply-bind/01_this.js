//! this ki value baar baar badal sakti hai alag alag condition mein.
// sare value browser me dekhe node me alag ho skta hai

// (1) global me :- window object
console.log(this);

// (2) function(ES-5):- window object
// Example.1
function greet() {
  console.log(this);
}
greet();

// (3) function(ES-6):- window object
const store = () => {
  console.log(this);
};
store();

//! method => kisi object ke ander koie function define hai usko method bolte hai
// (4) method:- same object
const obj = {
  name: "Ankur",
  age: function () {
    console.log(this); // same object
    console.log(this.name); // Ankur
  },
};
obj.age();

//! function inside method => method ke ander Ek aur function
// (5) function inside method (es-5):-  window
const obj2 = {
  name: function () {
    console.log(this); // object
    console.log(this.age); //  25

    function child() {
      console.log(this); // window
      console.log(this.age); // undefined
    }
    child();
  },
  age: 25,
};
obj2.name();

//! function inside method => method ke ander Ek aur function
// (5) function inside method (es-5):- object
const obj3 = {
  userName: function () {
    console.log(this); // object
    console.log(this.age); //  25

    const child = () => {
      console.log(this); // window
      console.log(this.age); // undefined
    };
    child();
  },
  age: 25,
};
obj3.userName();

// (6) constructor function mein this ki value:- new blank object {}
function add() {
  console.log(this);
}
const answer = new add();
console.log(answer);

// (7) Event Listner mein this ki value:- that Element jispar listner laga ho
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log(this);
});
