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



/* 
  ! HEAP Memory:-
  Heap memory:- Jitne bhi variables ya data hum banaate hai unhe store kahi to krna padta hai uske liye hota hai Heap memory.
  For Example:- 1+2+3+4+5 
  (heap memory me intermediate data store hota hai aur final answer hmko print hote dikh jaega).
*/

/* 
1+2 = 3      
3+3 = 6        baki sare intermediate data hai 
6+4 = 10
10+5 = 15
final ans  = 15 will print 
*/



/*
 ! Execution context:-
  Execution context:- Execution context is a container where a function's code is executed and it's  created whenever a function is called.
  It contains 3 things below.
  (1) variables 
  (2) function 
  (3) lexical environment of that function
*/

/* execution context matlab jab bhi ham function chalaayenge function apna Ek khudka EK imaginary container(dabaa) bana lega jismein uski teen cheeje hongi.
1. variables
2. functions inside that parent function
3. lexical environment of that function
ye jo container hai imaginary ise hi hum execution context kahte hai
*/

function abc() {
  var a = 100;
  function def() {
    var b = 200;
  }
}
abc();

/* lexical environment hota hai ek chart jisme ye likha hota hai ki aapka particular function
   ki cheeje ko access kar sakta hai and kinko nahi, matlab ki it holds it's scope chain.
*/