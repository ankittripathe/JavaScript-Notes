// Shirf Ek me change krne ke liye (...dot) spread operator ka use hota hai. Jo ki primitive ki tarah behave krwane lagega

//! The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.


//! (...) spread operator with Array
// Example.1  Using Array
var arr1 = [1, 3, 5, 7, 9];
var arr2 = [...arr1];
// ...dot operator ko spread operator bolte => spread operator ka matlab hota hai ki Arr1 ki sari value Arr2 me copy kro.

console.log("Array1 =", arr1); // arr1 = [1, 3, 5, 7, 9]
console.log("Array2 =", arr2); // arr2 = [1, 3, 5, 7, 9]

arr2.pop();
console.log("Array1 =", arr1); // arr1 = [1, 3, 5, 7, 9]
console.log("Array2 =", arr2); // arr2 = [1, 3, 5, 7]


// Example.2
let item1 = [11, 22, 33, 'apple']
let item2 = [10, 20, 30, 'mango']
let item3 = [...item2]

console.log("item2 =", item2);  // item2 = [10, 20, 30, 'mango']
console.log("item3 =", item3);  // item3 = [10, 20, 30, 'mango']

item2.pop()
console.log("item1 =", item1);  // item1 = [11, 22, 33, 'apple']
console.log("item2 =", item2);  // item2 = [10, 20, 30]
console.log("item3 =", item3);  // item3 = [10, 20, 30, 'mango']



// Example.3
let coofeeItems = ['milk', 'sugar', 'coofee']
let vegeTables = ['simlamirch', 'potato', 'tomato']
let fruits = ['apple', 'banana', 'leechi']
console.log(...coofeeItems, ...vegeTables, ...fruits);

console.log([...coofeeItems, ...vegeTables, ...fruits]);


// Example.4
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5]
console.log(numbers);



//! (...) spread operator with Object
// Example.1  (Using Object)
var obj1 = { name: "Ankit", age: 24 };
var obj2 = { ...obj1 };  // {...obj1} using spread operator

console.log("obj1", obj1); // obj1 = {name:'Ankit', age: 24}
console.log("obj2", obj2); // obj2 = {name:'Ankit', age: 24}

obj1.name = "shivangi";
obj1.rank = "Air100";
console.log("obj1", obj1); // obj1 = {name:'Shivangi', age: 24, rank: 'Air100'}
console.log("obj2", obj2); // obj2 = {name:'Ankit', age: 24}


// Example.2 
var student1 = { name: "Aadhya" };
var student2 = { ...student1 }; // {...} using spread operator

console.log("Student1", student1); // student1 = {name:'Aadhya'}
console.log("Student2", student2); // student2 = {name:'Aadhya'}

student2.name = "sanchita";
console.log("Student1", student1); // student1 = {name:'Aadhya'}
console.log("Student2", student2); // student2 = {name:'sanchita'}

// Example.3
const person = { name: 'John', age: 30 };
const updatedPerson = { ...person, age: 31, city: 'New York' };

console.log('updatedPerson =' , updatedPerson); // output: { name: 'John', age: 31, city: 'New York' }
console.log('person =', person);               // output:- { name: 'John', age: 30 }

