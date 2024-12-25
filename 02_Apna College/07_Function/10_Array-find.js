//! find() => find() method returns the value of first element in Array list that satisfy the porviding testing condition, otherwise it return undefined.
// Doesn't modify the original Array list. Return new array list

// Example.1
const grade = [2, 3, 5, 7, 9]
const found = grade.find((val)=> val > 3)
console.log(found); // output:- 5

// Example.2 
const number = [7, 20, 22, 11, 2]
const save = number.find(val => val%2 === 0)
console.log(save);   // output:- 20


