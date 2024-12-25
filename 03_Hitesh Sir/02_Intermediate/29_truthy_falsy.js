//! Truthy & Falsy value

/* truthy aur falsy => true aur false se alag hai.
  JavaScripts mein kuch vi likho wo mainly do prakaar mein se kisi Ek prakaar ko belong karti hai.
  (truthy or falsey)
*/

/*
Notes: falsy values
1. false
2. 0
3. -0
4. BigInt 0n   (zero n hai )
5. "" , ''  empty string
6. null
7. undefined
8. NaN
9. document.all
 /// Notes: En sbko convert kroge tab hamsea false aaega. Eske alawa sari value truthy hai.
*/

/* 
Notes: Truthy values
1. true
2. 1
3. -1
4. "0"            // string ke ander kuch vi likha hoga = truthy value hoga 
5. 'false'        // string ke ander kuch vi likha hoga = truthy value hoga
6. "  "           // sring ke ander koie vi value agar hai toh o truthy hoga jaise esme space hai
7. []             // empty Array
8. {}             // empty object 
9. function(){}   // empty function
*/

// Example.1
// const userEmail = "emart@gmail.com"    // truthy value
// const userEmail = ""                   // falsey value=> because this is empty string
const userEmail = " ";                    // truthy value=> because there is space inside empty string
// const userEmail = []                   // truthy value

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// Exmaple.2
// const userId = [10, 4, 0]
const userId = [];
if (userId.length === 0) {
  console.log("Array is Empty");
}

// Example.3  => object me ho toh Aise kre
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("object is empty");
}

//! Truthy value Example
// Example.1
if (7) {
  console.log(" 7 is Truthy value");
} else {
  console.log(" 7 is falshy value");
}


// Example.2
if (-1) {
  console.log("-1 is Truthy value");
} else {
  console.log("-1 is falshy value");
}


// Example .3
if ("Ankit") {
  console.log(`"Ankit" = truthy value`);
} else {
  console.log(`"Ankit" = falsy value`);
}

// Exmaple.4
if('false'){      // anything inside string is truthy value for eg. "chacha",  " ", "true", "false" , "0"
  console.log(`'false' = truthy value because this is string`);
} else {
  console.log(`'false' = falsy value`);
}

// Example.5
if(" "){
  console.log(`"  " = truthy value`);
} else {
  console.log(`"  " = falsey value`);
}

// Exmple.6
if({}) {
  console.log(`{} = truthy value`);
} else{
  console.log(`{} = falsey value`);
}

//! falshy value Example
// Example.1
if (false) {
  console.log(`false = truthy value`);
} else {
  console.log(`false = falshy value`);
}

// Example.2
if (0) {
  console.log(`0 = truthy value`);
} else {
  console.log(`0 = falshy value`);
}

// Example.3
if (-0) {
  console.log(`-0 = truthy value`);
} else {
  console.log(`-0 = falshy value`);
}

// Exmaple.4
if ("") {
  console.log(`"" = truthy value`);
} else {
  console.log(`"" = falshy value`);
}

// Example.5
if (null) {
  console.log(`null = truthy value`)
} else {
  console.log(`null = falshy value`)
}

// Example.6
if (undefined) {
  console.log(`undefined = truthy value`)
} else {
  console.log(`undefined = falshy value`)
}

// Example.7
if (NaN) {
  console.log(`NaN = truthy value`)
} else {
  console.log(`NaN = falshy value`)
}

//! Tricky Question
// Example.1
if(false == 0) {      
  console.log(`false == 0 is true`);
} else {
  console.log(`false == 0 is  false`); 
}
// output:- true


// Example.2
if(false === 0) {       // here false = boolean data type & 0 = number data type
  console.log(`false === 0 is true`);
} else {
  console.log(`false === 0 is  false`); 
}
// output:- false


// Example.3
if(false == ''){
  console.log(`false == '' is true`); 
} else {
  console.log(`false == '' is false`);
}
// output: true


// Example.4
if(false === ''){      // here false = boolean data type & ''= string data type
  console.log(`false === '' is true`); 
} else {
  console.log(`false === '' is false`);
}
// output: false


// Example.5 
if(0 == ''){
  console.log(`0 == '' is true`); 
} else {
  console.log(`false == '' is false`);
}
// output: true

// Example.6
if(0 === ''){      // here 0 = number data type & '' = string data type
  console.log(`0 === '' is true`); 
} else {
  console.log(`false === '' is false`);
}
// output: false

/* Notes
  1. false == 0  => true
  2. false == '' => true
  3. 0 == ''  => true
*/