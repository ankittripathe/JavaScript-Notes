// const tinderUser = new Object()     //! this is singleton object
// const tinderUser = {}               //! (object literal) or (non singleton object)

// Example.1
const tinderUser = {};         //! this is empty object
tinderUser.id = "mahi7781";
tinderUser.name = "Ms Dhoni";
tinderUser.isLoggedIn = false;
tinderUser["nickName"] = "Maahi";

// output :-
console.log(tinderUser);
console.log(tinderUser.id); // output: mahi7781

console.log(Object.keys(tinderUser));     // output: ['id', 'name',  'isLoggedIn',  'nickName']
console.log(Object.values(tinderUser));   // output: ['mahi7781', 'Ms Dhoni', false, 'Maahi']

console.log(Object.entries(tinderUser)); // Array ke Ander Array milega

// Notes: object me E wala properties exist krta hai ya nhi  => (true or false)
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // output: true
console.log(tinderUser.hasOwnProperty("isLogged"));   // output: false



//! (Nested object)
// Exmaple.2
const userDetails = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Ankit",
      lastname: "Tripathi", // object ke andre object ki nesting
    },
  },
};
console.log(userDetails);

console.log(userDetails.fullname);
// output: { userfullname: { firstname: 'Ankit', lastname: 'Tripathi' } }

console.log(userDetails.fullname.userfullname);
// output:  { firstname: 'Ankit', lastname: 'Tripathi' }

console.log(userDetails.fullname.userfullname.firstname);
// output: Ankit


//! Adding anonomus function as key value pair in object
userDetails.myFun = function () {
  return `Hello ${this.fullname.userfullname.lastname} ji`;
};
console.log(userDetails.myFun()); // output: Hello Tripathi ji

console.log(userDetails);



// Example.3
const obj1 = { 1: "Ankit", 2: "Amit" };
const obj2 = { 3: "Avinsah", 4: "Vivek" };
const obj3 = { 5: "Chandu", 6: "Asish" };

// const objFinal = {obj1, obj2, obj3}

// const objFinal = Object.assign({}, obj1, obj2, obj3)
// const objFinal = Object.assign(obj1, obj2, obj3)
// Notes: object.assign(source=>{}esko de ya na dee, target)

const objFinal = { ...obj1, ...obj2, ...obj3 }; // yahi jada tar use hoga 90% time (...spread operator)
console.log(objFinal);



// Example.4
const users = [
  { id: 1, email: "one@gmail.com" },
  { id: 2, email: "two@gmail" },
  { id: 3, email: "three@gmail" },
];

console.log(users[0].id);      // output: 1
console.log(users[0].email);   // output: one@gmail.com

console.log(users[1].id);      // output: 2
console.log(users[1].email);   // output: two@gmail.com


