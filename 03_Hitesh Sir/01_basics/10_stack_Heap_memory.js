// Stack & Heap Memory

/*
 (1) Stack memory are used in => (Primitive data types) 
  jo vi variable decleared kiya hai uska copy milta hai.
*/
//? Primitive types (Stack memory) => Varibale ka copy milta hai na ki original me changes hota hai.

// Example.1
let myName = "Shivangi";
let nickName = myName;

console.log(myName);     // output: shivangi
console.log(nickName);   // output: shivangi

nickName = "Uma";
console.log(myName);    // output: shivangi
console.log(nickName);  // output: Uma


/*
 (2) Heap memory are used => (Non-Primitive) 
  :- Reference milta hai original value me n(Agar ek me change krenge toh dusre me vi change hoga).
  :- Reference:- Ek dusre ko refer krte hai value
*/

//? Reference type (Heap memory) => Varibale ka original copy milta hai, Ek me change krenge toh dusre me vi same changes hoga.

// Example.1
let userOne = {
  email: "ankit@gmail.com",
  password: "hackme@123",
};

let userTwo = userOne;
console.log(userOne);        // output: { email: 'ankit@gmail.com', password: 'hackme@123' }
console.log(userTwo);        // output: { email: 'ankit@gmail.com', password: 'hackme@123' }


userTwo.email = "avinash@hotmail.com";  // value change krne ka tarika hai
userTwo.password = "123@qwe"

console.log(userOne);   // output: { email: 'avinash@hotmail.com', password: '12234' }
console.log(userTwo);   // output: { email: 'avinash@hotmail.com', password: '12234' }


// Example.2
let array1 = ['gaikwad', 'jadega', 'dube', 'ms-dhoni']
console.log('array1 =', array1);     // output: [ 'gaikwad', 'jadega', 'dube', 'ms-dhoni' ]

let array2 = array1
console.log('array2 =', array2);    // output: [ 'gaikwad', 'jadega', 'dube', 'ms-dhoni' ]

array1[1] = ['conway', 'pathirana']
console.log(array1);   // output: ['gaikwad', ['conway', 'pathirana'], 'dube', 'ms-dhoni']
console.log(array2);   // output: ['gaikwad', ['conway', 'pathirana'], 'dube', 'ms-dhoni']