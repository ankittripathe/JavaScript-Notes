// In JavaScript, classes are used to define the blueprint for objects, allowing developers to create objects that share the same properties and methods. The constructor method is used to initialize the properties of the object. Classes also provide a way to add methods to the object, making it easy to create reusable code

/* Syntax:-
      class Myclass {
            myConstractor(){}
            
            mymethod(){}
        }
     let myObj = new Myclass();     // this is the way to convert class in object
   
*/


//! Example.1
class human {
  // properties
  name = "Ankit";
  age = 25;

  // behaviour or method
  walking() {
    return `I am Walking`;
  }

  running() {
    console.log("I am Running");
  }
}

//! this is the way to convert class into object
const obj = new human();
// console.log(obj);            // output:- human {name: 'Ankit', age: 25}
// console.log(obj.name);       // output:- Ankit
// console.log(obj.walking());  // output:- I am Walking

//! Example.2
class Car {
  fuelType() {
    console.log("diesel");
  }

  size() {
    return `7-seater`;
  }
}

// object-1
const fortuner = new Car();
// console.log(fortuner);
// console.log(typeof fortuner);
// fortuner.fuelType()

// object-2
const safari = new Car();
// console.log(safari);
// console.log(safari.size());

//! Example.3
class clothes {
  color() {
    console.log("available in more than 50 colors");
  }

  quailty() {
    console.log("cotton");
  }

  // method taking arguments
  setBrand(brand) {
    this.brand = brand; // Assign brand to instance property
  }
}

const zara = new clothes(); // Create an instance
// console.log(zara);     // Logs the initial instance with no properties set
// zara.quailty();        // Logs: "cotton"
zara.setBrand("Zara"); // Correctly setting the brand
// console.log(zara);       // Logs the updated instance with `brand` set to "Zara"

//! Example.4
class Person {
  constructor(name, age) {
    this.name = name;       // public property
    this.age = age;          // public property
    this.role = "Engineer";   // public property
  }

  // method 
  greet() {
    console.log(`Hello, my name is ${this.name} ${this.role}`);
  }
}
const user1 = new Person("Shiva", 23);
// console.log(user1);
// console.log(user1.name);

//! Example.5
class twoWheeler {
  constructor(brand = "Apache", milage = "120") {
    this.brand = brand; // Default value if no argument is passed
    this.milage = milage;
    this.Price = 120000;
  }

  TestDrive() {
    return `take a free demo test drive`;
  }
}

const olaEv = new twoWheeler("olaElectric", 120);
console.log(olaEv);
console.log(olaEv.Price);
console.log(olaEv.TestDrive());


//! Example.6
class people {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

const man = new people("Sam");
// man.greet(); // output: Hello, Sam


//! Example.7
class User {
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
    }
  
    encryptPassword() {
      return `${this.password}`;
    }
  
    changeUserName() {
      return `${this.username.toUpperCase()}`;
    }
  }
  
  const chai = new User("Ankit", "ankit@hotmail.com", "123@qwe");
  console.log(chai);
  console.log(chai.encryptPassword());
  console.log(chai.changeUserName());
  

  // behind the Scene (upar wala)
  function user(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  
  user.prototype.encryptPassword = function () {
    return `${this.password}`;
  };
  user.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}`;
  };
  
  const Tea = new User("Ektu", "ektu@hotmail.com", "12345");
  console.log(Tea);
  console.log(Tea.encryptPassword());
  console.log(Tea.changeUserName());
