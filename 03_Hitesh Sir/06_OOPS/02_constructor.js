// /****** Example.1  ******/
// function User(username, loginCount, isLoggedIn) {
//   /*this.username = username
//    lefthand side wala variable hai.Aur righthand side wala arguments hai jo pass krte hai.
//   */
//   this.username = username;
//   this.loginCount = loginCount;
//   this.isLoggedIn = isLoggedIn;
//   this.active = true;
//   this.greeting = function () {
//     console.log(`Welcome ${this.username}`);
//   };
// }

// let userOne = new User("Ankit", 10, true); // constructor invoke with arguments passed
// // console.log(userOne);
// // console.log(userOne.greeting());

// let userTwo = new User("Avinash", 22, false); // constructor invoke with arguments passed
// // console.log(userTwo);

// let userThree = new User(); // constructor invoke  with undefined
// console.log(userThree);
// userThree.username = "Lovely"; // adding value here
// userThree.loginCount = 4;
// console.log(userThree);

// //Notes:constructor property khud hi ke bare me Reference hoti hai.
// console.log(userThree.constructor);
// output:  node Environment me output =>[Function: User]

/************* Class Constructor ************/
/****** Example.1  ******/
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
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
  return `${this.password}abc`;
};
user.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const Tea = new User("Ektu", "ektu@hotmail.com", "12345");
console.log(Tea);
console.log(Tea.encryptPassword());
console.log(Tea.changeUserName());

/****** Example.2  ******/
// class ElectricBike {
//     constructor(brand, milage) {
//       this.brand = brand;
//       this.milage = milage;
//       this.Price = 120000;
//     }

//     TestDrive() {
//       console.log("take a free Demo test Drive");
//     }
//   }

//   let olaEv = new ElectricBike("olaElectric", 120);  //constructor invoke
//   console.log(olaEv);
//   console.log(olaEv.TestDrive());

//   let Ather = new ElectricBike("ather", 70);          //constructor invoke
//   console.log(Ather)
