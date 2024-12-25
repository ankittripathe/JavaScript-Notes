// (1) Arithmatic operatoer
let a = 45;
let b = 4;
console.log("a + b = ", a + b);
console.log("a - b = ", a - b); 
console.log("a * b = ", a * b); 
console.log("a / b = ", a / b); 
console.log("a ** b = ", a ** b);
console.log("a % b = ", a % b); 


// (2) Assignment operator
let x = 1;
x += 5; // means x = x+5
console.log("x is now =", x);   // output: 6


// new value x = 6
x -= 5; // means x = x-5
console.log("x is now =", x);  // output: 1

// new value x = 1
x *= 5; // means x = x*5
console.log("x is now =", x);  // output: 5

// new value x = 5
x /= 5; // means x = x/5
console.log("x is now =", x);  // output: 1


// new value x = 1
x %= 5; // means = x%5
console.log("x is now =", x);  // output: 1


// (3) Comparison operator
let comp1 = 6;
let comp2 = "7";
console.log("comp1 == comp2", comp1 == comp2);  // false
console.log("comp1 != comp2", comp1 != comp2);  // true
console.log("comp1 === comp2", comp1 === comp2);// false
console.log("comp1 !== comp2", comp1 !== comp2);// true
console.log("comp1 > comp2", comp1 > comp2);    //false
console.log("comp1 < comp2", comp1 < comp2);    // true

// (3) Logical operator
let m = 5;
let n = 6;

// (a) logical And => if both the condition is true then output => true , otherwise gives => false
console.log(m < n && m == 5); //dono true hoga toh output = true

// (b) logical OR => anyone of the gives condition is true then output is true
console.log(m > n || m == 5); // Ek vi ture hoga toh output => ture
console.log(m > n || m == 6); // dono false huwa toh output => false  

// (c) logical Not => true ko false & false ko true me change kr dega
console.log(!true);
console.log(!false);


/* pre & post increment & decrement */
let num = 10
// (1) pre-increment (pahle +1 increment kr dega print hone se pahle)
console.log("++num = ", ++num);  // output: 11
console.log("num =", num);       // output: 11

// (2) post-increment (pahle print krega uske badd +1 increment krega)
console.log("num++ = ", num++);  // output: 11
console.log("num =", num);       // output: 12


let k = 100
// (3) pre- decrement
console.log("--k = ", --k);  // output: 99
console.log("k = ", k);      // output: 99

// (4) post-decrement
console.log("k-- = ", k--); // output: 99
console.log("k = ", k);     // output: 98