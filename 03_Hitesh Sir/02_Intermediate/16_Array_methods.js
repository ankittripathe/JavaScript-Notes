// 1 push(jo add krna hai) =>  add one elements at last in Array list.
const arr = ['apple','ball', 'cat', 'dog']
arr.push(99)                                // add one elements at last in Array list.
console.log(arr);                           // will modift the original Array.
// output:[ 'apple', 'ball', 'cat', 'dog', 99 ] 

console.log(arr.push());        // output: 5       ( return the length of Array after push )
console.log(arr.push(100));     // output: 6       ( now length become = 6 )
console.log(arr);               // output: [ 'apple', 'ball', 'cat', 'dog', 99, 100 ]



// 2 pop() => remove last elements form Array list.
let myName = ['ram', 'shyam', 'ravi', 'hari']
myName.pop()
console.log(myName);      // output: [ 'ram', 'shyam', 'ravi' ]


// ab yaha yahi bacha hoga Esi me se deleted item khojana hai  ['ram', 'shyam', 'ravi']
let delItem = myName.pop() 
console.log('delItem =', delItem);             // output: ravi
console.log('deletedItem =', myName.pop());    // output: shyam  ( this is sortcut to find deleted item )
console.log(myName);                           // output:  [ 'ram' ]



// 3. unshift() => add one elements at the starting of the Array
const myHero = ['Antman', 'Batman','Superman']
myHero.unshift('shaktiman')
console.log(myHero);             // output: [ 'shaktiman', 'Antman', 'Batman', 'Superman' ]

console.log(myHero.unshift());  // output: 4  (return the total lenth of Array After unsfift)

console.log(myHero.unshift('Jadu'));  // output: 5  (return the total lenth of Array After unsfift)
console.log(myHero);   // output: [ 'Jadu', 'shaktiman', 'Antman', 'Batman', 'Superman' ]



// 4. shift => remove one starting  elements 
const myNum = [1, 2, 3, 4, 5, 6,]
myNum.shift()
console.log(myNum);                           // output: [ 2, 3, 4, 5, 6 ]
  
let deletedItem = myNum.shift()    
console.log('deletedItems =', deletedItem);    // output: 2

console.log('deleted Item', myNum.shift());    // output: 3  (shortcut me upar wala line)
console.log(myNum);                            // output: [ 4, 5, 6 ]



// 5. includes() => true or false me answer aaega
const myVal = [10, 20, 30, 40, 50]
console.log(myVal.includes(30));      // output: true
console.log(myVal.includes(99));      // output: false


// 6. indexOf(xyz) => give index numbering of that value if value exist in Array list, otherwise it give (-1)
const myIndex = [22, 33, 1000, 11, 44]
console.log(myIndex.indexOf(33));            // output: 1
console.log(myIndex.indexOf(11));            // output: 3
console.log(myIndex.indexOf(17));            // output: -1  (because it doesn't exist in Array list)


// 7. join() => Adds all the elements of Array into an String.

// Example.1
const Array = [1, 2, 3, 4, 5]
console.log(Array);               // output: [ 1, 2, 3, 4, 5 ]
console.log(typeof Array);        // output: object

const newArray = Array.join()
console.log(newArray);               // output: 1,2,3,4,5
console.log(typeof newArray);        // output: string   (string me change ho gaya) 

 console.log(Array.join());             // output: 1,2,3,4,5
// console.log(typeof Array.join());    // output: string    (shortcut)


//Example.2
const demo = ['ram','krishna']       
console.log(demo.join());              // output: ram, krishna
console.log(typeof (demo.join()));     // output: string


// 8. slice (startpoint, endpoint but not included)
const Array1 = [44, 22, 26, 11, 9]
console.log("Array1 =", Array1);     // output: [ 44, 22, 26, 11, 9 ]

const myA1 = Array1.slice(1, 3)
// const myA1 = Array1.slice(2)
console.log(myA1);                            // output: [22, 26]
console.log("Array after slice =", Array1);   // slice does not modify original Array
// output: [44, 22, 26, 11, 9]  


// 9. splice()
const Arr = [2, 4, 6, 8, 10, 12, 14]
console.log('Arr =', Arr);         // output: [2, 4, 6, 8, 10, 12, 14]

const myA2 = Arr.splice(1, 3)      // starting and ending point print hoga baki sab gayab ho jaega
console.log(myA2);                 // output: [4, 6, 8]
console.log("C =", Arr);           // splice modify original Array => slice wala part gayab ho jaega.
// output: [2, 10, 12, 14]



// 10. concat() => adding 2 or more Array .this method returns a new array without modifying original Array
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);     // output: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// console.log(marvel_heros.concat(dc_heros));   // without declearing variable


//...spred operator => adding two or more  Array using spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); // output: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Example 2
const teacher = ['Ram', 'Shyam']
const subject = ['biology', 'maths']
const students = ['aadhya','yashan' ,'Sam', 'Pyush']

const final = [...teacher, ...subject, ...students]
console.log(final);
// output: [ 'Ram', 'Shyam', 'biology', 'maths', 'aadhya',  'yashan', 'Sam', 'Pyush']

console.log([...teacher, ...subject, ...students , 'Acer']);  // Aise vi add kr skte hai.
// output: [ 'Ram', 'Shyam', 'biology', 'maths', 'aadhya',  'yashan', 'Sam', 'Pyush',  'Acer']


