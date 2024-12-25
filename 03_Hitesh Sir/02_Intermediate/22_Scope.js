/* block scope & global scope  
  (1) let, const follow => block scope
  (2) var follow => global scope
*/

// Example.1
let a = 7;
let b = 14;

if (true) {
  let a = 10;    //! {} curly Braces ke ander wala Block scope hai => let, const follow this rule
  const b = 20;
  var c = 1994;  //! E bahar jake print hoga because var follow global Scope rule
  console.log("Inner", a);
  console.log("INNER", b);
  console.log("Innner", c); //! yaha print hoga hi aur bahar vi hoga jake.
}
console.log(a); // output: 7
console.log(b); // output: 14
console.log(c); // output: 1999 ( will print because var follow global scope )

//! Notes: This is the Biggest Reason to avoid the use of var because it does not follow block scope rule


// Example.2
var c = 200;
if (true) {
  var c = 30; //! E wala value toh shirf scope ke ander hi print hona chaiye tha, But E value bahar vi print ho rha hai. Beacuse var follow global scope rule
  console.log("Inner =", c); // output: 30
}
console.log("OutSide =", c); // output: 30


// Example.3
function one() {
  const username = "Ankit";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);   // error
  two();
}
one();


// Example.4
if (true) {
  const username = "Raashi";
  if (username === "Raashi") {
    const website = " youtube";
    console.log(username + website);
    // console.log(`${username} ${website}`);
    
  }
  // console.log(website);    //! error because => const follow block scope
}
// console.log(username);     //! error because => const follow block scope
