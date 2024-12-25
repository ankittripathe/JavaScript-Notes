//! Example.1
class person {
  constructor() {
    // console.log("Enter parent constructor");
    this.species = "homo sapiens";
  }

  work() {
    return "retaired form job";
  }
}

class Engineers extends person {
  constructor(branch) {
    // console.log("Enter child constructor");
    super();
    // To invoke parent class constructor:- super() call krna padega
    // Notes:sabse pahle child constructor me Enter krenge phir Super() ko invoke krte hi parent constructor me chala jaenge phir wapas aaenge child constructor me aur baccha huwa kaam ko pura krenge.
    this.branch = branch;
    // console.log("Exit child constructor");
  }

  work() {
    return "Innovate somethings";
  }
}

const objEngineer = new Engineers("CSE");
// console.log(objEngineer);
// console.log(objEngineer.branch);
// console.log(objEngineer.species);


//! Example.2
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    return `${this.username} is loggedIn`;
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    return `A new course was added by ${this.username}`
  }
}

// user1
// let chai = new Teacher("Ankit", "ankit@gmail.com", "12345");
// console.log(chai);
// console.log(chai.logMe());
// console.log(chai.addCourse());

// user2
// let masalaChai = new User("kadakChai");
// console.log(masalaChai);
// console.log(masalaChai.logMe());



