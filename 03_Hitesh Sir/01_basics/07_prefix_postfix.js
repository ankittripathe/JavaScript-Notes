/* prefix & postfix */

//! postfix
// Example.1
let gameCounter = 100
console.log(gameCounter++ );   // 100  /* postfix increments and returns the value before incrementing. */
console.log(gameCounter);      // 101

// Example.2
let x  = 3;
const y = x++
console.log(`x:${x} & y:${y}`);
// output: x = 4  & y = 3


//! prefix
// Example.1
let chessScore = 200
console.log(++chessScore);  // 201   /* prefix  increments annd  returns the value after incrementing. */
console.log(chessScore);    // 201


// Example.2
let a = 10;
const b = ++a
console.log(`a:${a} & b:${b}`);
// output: a = 11 & b = 11

