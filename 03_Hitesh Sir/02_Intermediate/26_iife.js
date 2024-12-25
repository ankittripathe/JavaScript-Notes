/* Immediately Invoked Function Expression (IIFE) 
   (1) named iife
   (2) simple iife or (unNamed iife)
   (3) unNamed iife with parameters passed
   (4) IIFE Syntax  ()();
   (5) For Example
     (function myFun(){})();
*/


// Example.1
(function chai(){     // named IIFE bolte hai esko (chai joo hai function ke sath) 
    console.log(`Named iife`);
})();  
// output:- Named iife
//! end krne ke liye semi colon ka use krna hoga nhi toh niche wala me error show hoga


// Example.2
( () => {       // simple iife or (unNamed iife)
    console.log(`arrow iife`);
})();
// output:- aarow iife


// Exmaple.3
( (name) => {    // unNamed iife with parameters passed
    console.log(`Connected ${name}`);
})("Ankit");
// output:- Connected Ankit


// Notes: One of the common issues in JavaScript development is global scope pollution, where variables declared in one part of the code can unintentionally affect other parts. IIFE helps mitigate this problem by keeping variables and functions within their own scope, preventing global pollution.

// Exmaple.1    
//! named iife
(function chai(){     
    let name = 'Dhoni'
    console.log(name);  
})();
// output:- Dhoni


//! unNamed iifi
(()=>{
    console.log('Dhoni');
})();
// output:- Dhoni


// Exmple.2
//! named iifi with parameter passed
(function add (num1, num2) {   
    console.log(num1 + num2);
})(10, 100);
// output:- 110


//! unNamed iifi with parameter passed
( (num1, num2)=> {
    console.log(num1 + num2);
})(1, 99);
// output:- 100


// Example.3
//! named iifi
(function logIn(userName = "Sam") {
    console.log(`${userName} just logged in`);
})();


// unNamed iifi
( (userName = 'sharthak')=>{
    console.log(`${userName} just logged in`);
})();


// Example.4
// named iifi with parameter passed
(function addToCart(...items) {
    console.log(items);
})(10, 20, 30, 40);


// unNamed iifi with parameter passed
( (...items)=>{
    console.log(items);
})(1, 2, 3, 4);


// Example.5
// named iifi
(function greet(anyObject){
    console.log(`UserName = ${anyObject.name} & jobRole = ${anyObject.role}`);
})({name:'kriti', role:'Software Engineer'});


// unNamed iifi
( (anyObject)=>{
    console.log(`UserName = ${anyObject.user} & jobRole = ${anyObject.role}`);
})({name: 'kartik', role: 'tester'});
