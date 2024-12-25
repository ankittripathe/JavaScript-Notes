/* Inheritance:- The way to create a new class that inherits properties and methods from an existing class.
For Example:- Jaise hmko apne parent se property filti hai oise hi samjho

syntax:- 
      class parent {}
      class Child extends Parent {}
*/

//! Example.1
class parent {
  greet() {
    return `Happy New Year`;
  }
}

class child extends parent {}

// user-1
const obj = new child();
// console.log(obj);
// console.log(obj.greet());    // output:- Happy new Year

//! Example.2 (Overriding Methods)
// The child class can override methods of the parent class by redefining them.
// parent class
class person {
  eat() {
    console.log("can eat");
  }

  sleep() {
    console.log("can sleep");
  }

  work() {
    console.log("retaired from work");
  }
}

// child class-1
class engineer extends person {
  work() {
    console.log("solve problems, bulid somethings");
  }
}

// child class-2
class doctor extends person {
  work() {
    console.log("treat patients");
  }
}

// object-1
const person1 = new engineer();
// console.log(person1);
// person1.work()   // output:- solve problems, bulid somethings"

// Notes:if child & parent have same method/ function, child's method will be used [Method overRiding]
// person1.eat()   // output:- can eat

//object-2
const person2 = new doctor();
// console.log(person2);
// person2.eat()
// person2.work()

//! Example.3
class human {
  constructor() {
    this.species = "Homo Sapiens";
  }

  eat() {
    console.log("can eat");
  }

  work() {
    console.log("retaired");
  }
}

class farmer extends human {
  work() {
    return `farming`;
  }
}

let user1 = new human();
console.log(user1);
console.log(user1.species);

let user2 = new farmer();
console.log(user2);
console.log(user2.species);
