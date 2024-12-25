/* An array in JavaScript is a special type of object that stores a collection of more than one elements. These elements can be of any data type, including numbers, strings, objects, or even other arrays. Arrays in JavaScript are dynamic, meaning they can grow or shrink in size dynamically as elements are added or removed.

In JavaScript, we can create an array using
(1) Array Literal Notation '[]'
(2) Array constructor
*/


/*
Array => Arrays is a collection of more than one items ( matlab jab aapko ek ya ek se jaada value ek saath rakhi ho tab use hota hai Array)
why we use array => a lot of times data is in the shape of more than one member, to contain all data altogether, we save it in array
*/

/* Array => Kaie logo ka data rakhna ho
   Object => Ek bande ka kaie sara data(details)
 */

   
//! (1) Array Literal Notation [] => We can create arrays using array literal notation, which involves enclosing a comma-separated list of elements within square brackets '[]'.

// Example.1
const users = ["harsh", "harshita", "nishi"];
console.log(users); // output: [ 'harsh', 'harshita', 'nishi' ]
console.log(typeof users); // output: object

// Method to acess the value of the given array
console.log(users[0]); // output: harsh
console.log(users[1]); // output: harshita
console.log(users[2]); // output: nishi
console.log(users[3]); // output: undefined (because index 3 doesn't exist in the given array list)
console.log(users[5]); // output: undefined (because index 5 doesn't exist in the given array list)


// Example.2
const array = [1, "3", function () {}, [], { name: "Ankit" }, "Smile"];
console.log("array =", array); // output: [1, "3", function(){}, [], {name:'Ankit'}, 'Smile']
console.log(array.length); // output: 6 (proprty of array)

console.log(array[0]); // output: 1
console.log(array[1]); // output: 3
console.log(array[2]); // output: [Function (anonymous)]
console.log(array[3]); // output: []
console.log(array[4]); // output: {name: 'Ankit}
console.log(array[5]); // output: Smile

//! Example.3
const cars = []; // Create an empty array

// assining the value in the empty array
cars[0] = "audi"; // Assign a value at index 0
cars[1] = "punch"; // Assign a value at index 1
cars[3] = "pajero"; // Assign a value at index 3
console.log(cars); // output: ['audi', 'punch', <empty item>, 'pajero']


// Example.4
const sample = [
  "apple",
  5,
  true,
  { name: "Ram" },
  function greet() {
    console.log("Hello");
  },
];
console.log(sample); // output: ['apple', 5, true, { name: 'Ram' }, [Function: greet]]
console.log(sample[4]); // output: [Function: greet]


// Example.5 ( Array are mutuable so it's value can change.)
let arr = [99, 66, 44, 33, 27];
console.log("arr", arr); // output: [99, 66, 44, 33, 27]

console.log(arr[0]); // output: 99
console.log(arr[1]); // output: 66
console.log(arr[2]); // output: 44
console.log(arr[3]); // output: 33

// Changing the value of Array (This is possible because Array are immutable)
arr[0] = "Ankit";
arr[5] = false;
arr[6] = "loveJs";
console.log(arr); // output: [ 'Ankit', 66, 44, 33, 27, false, 'loveJs' ]

// String => are immutable (No change)
// Array => are mutuable (can change)

// Example.6
const myArray = [99, 44, "shaktimaan", 9, "Shyam"];
console.log(myArray); // output: [99, 44, "shaktimaan", 9, "Shyam"];
console.log(myArray[4]); // output: shyam
// console browser me dekenge toh waha Prototype milta hai Array me vii.

// updating the prperty of array
myArray[2] = "Gita";
console.log(myArray); // output: [ 99, 44, 'Gita', 9, 'Shyam' ]

// Adding new key value pair
myArray[7] = "jeevan";
console.log(myArray); // output: [ 99, 44, 'Gita', 9, 'Shyam', <2 empty items>, 'jeevan' ]

myArray[5] = function () {};
console.log(myArray);
// output:[ 99, 44, 'Gita', 9, 'Shyam', [Function (anonymous)], <1 empty items>, 'jeevan' ]



// Example.7
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Accessing the first element of the array
console.log(fruits[0]);                    // apple

// Accessing the third element of the array
console.log(fruits[2]);                    // orange

// Accessing the last element of the array
console.log(fruits[fruits.length - 1]);        // kiwi

// Accessing an element using a variable
const index = 1;
console.log(fruits[index]);               // banana



//! (2) Array Constructor => We can also create arrays using the Array constructor. The Array constructor can be called with or without the new keyword.

// Example.1 (Creating an array of numbers using Array constructor)
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Example.2 (Creating an array of strings using Array constructor)
const fruitsItem = new Array('apple', 'banana', 'orange');
console.log(fruitsItem); // Output: ['apple', 'banana', 'orange']

// Example.3 (Creating an empty array using Array constructor)
const emptyArray = new Array();
console.log(emptyArray); // Output: []


// Example.4 
const array1 = new Array(1, 2, "lovely", true);
console.log("array1 =", array1); // output: array1 = [ 1, 2, 'lovely', true ]
console.log(array1[0]); // output: 1
console.log(typeof array1); // output: object


// Example.5
var arr = [22, 55, 66, 88];
console.log(typeof arr); // Output: Object
arr[-1] = 100;
console.log(arr)   // Output: [ 22, 55, 66, 88, '-1': 100 ]



/*
Notes:
() paranthesis
[] bracket
{} braces / curly braces
*/
