/* filter 
 (1) filter an Array with values that passes a test.
 (2) Return / create a new array list.
 (3) Doesn't modify the original Array list.
*/

// Example.1
const array = [1, 2, 3, 4, 5, 7, 9];

let newArray = array.filter((check)=>{
  return check > 5;
});
console.log(newArray); // output: [7, 9]


// Example.2 (find out the even one)
let arr = [2, 4, 7, 9, 22, 28, 31, 99];

let newArr = arr.filter((num) => {
  return num % 2 === 0;
});
console.log(newArr); // output: [2, 4, 22, 28]


// Example.3 (find out multiple of 5)
let list = [1, 2, 7, 25, 30, 11, 45];

let result = list.filter((val) =>{
  return val % 5 === 0
})
console.log(result); // output: [25, 30, 45]
console.log(list);   // output: [1, 2, 7, 25, 30, 11, 45] (does not modify original Array)


// Example.4 (find out the odd one)
const number = [9, 4, 5, 7, 2, 12, 3]

let final = number.filter(val => val % 2 !== 0)   // using arrow implicit return 
console.log('final =', final);  // output: final = [9, 5, 7, 3]

// Example.5 
const num = [1, 2, 3, 4]
const evens = num.filter(val => val % 2 === 0)
console.log(evens);



