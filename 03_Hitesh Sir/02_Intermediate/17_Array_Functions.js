// Example.1
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
marvel_heros.push(dc_heros)

console.log('marvel_heros', marvel_heros);    
// output: ['thor', 'Ironman', 'spiderman', ['superman', 'flash', 'batman']]


console.log(marvel_heros[2]);       // output: spiderman
console.log(marvel_heros[3]);       // output:['superman', 'flash', 'batman]
console.log(marvel_heros[3][1]);    // output: flash


//! concat() => combining 2 or more array without modifying original Array
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); 
// output: ['thor','Ironman','spiderman', ['superman','flash','batman'], 'superman','flash','batman']



//! concat() 2 Array using ...Spread operator ( 3 dot ko spread operator bolte hai )
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);
// output: ['thor','Ironman','spiderman', ['superman','flash','batman'], 'superman','flash','batman']


//! Change Mutliple Array into Single Array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
console.log(another_array);   // output: [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]


const real_array = another_array.flat(2) 
// const real_array = another_array.flat(Infinity)
console.log(real_array);     // output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// console.log(another_array.flat(Infinity));    // shortcut


//! Notes: Array ke ander Array jo hai usko single Array me krne ke liye flat() => method ka use hota hai.

//! Notes: bracket ke ander(Array) jo bracket hai(Array) usko dept bolte hai agar 2 bracket hai toh => flat(2) de denge. Aur agar infinity de denege toh kitna vi rhega o ek me kr dega => flat(infinity) de dete.



/******  Array.is  ******/
console.log(Array.isArray([1, 2, 3]));    // output: true   (because this is Array)
console.log(Array.isArray("Ankit"));      // output: false  (because this is String) 



/*********** Array.from()  *********/
// Example.1   //! Notes: Array me convert krna ho toh Array.from() => ka use hota hai 
console.log(Array.from("kaju"));          // output: ['k', 'a', 'j', 'u']     


// Example.2
console.log(Array.from({name: "Ekta"}));   // output: []
// intresting case bcz yaha bolna padega ki key ya value. nhi toh emplty Array dega.
 

// Exmaple.3
let name = "Iphone"
let newName = Array.from(name)
console.log(newName);            // output: [ 'I', 'p', 'h', 'o', 'n', 'e' ]

console.log(Array.from(name));   // output: [ 'I', 'p', 'h', 'o', 'n', 'e' 


/*****  Array.of *****/
// Example.1
let num1 = 100;
let num2 = 200;
let num3 = 500
console.log(Array.of(num1, num2, num3));  // output: [ 100, 200, 500 ]


// Example.2
let score1 = 'Ram'
let score2 = 200
let score3 = true
let score4
let score5 = {name:'Ankit', age: 23}
let score6 = ['a','e', 'i', 'o','u']

console.log(Array.of(score1, score2, score3, score4, score5 , score6));
//output: ['Ram', 200, true, undefined, { name: 'Ankit', age: 23 }, ['a','e', 'i', 'o','u']]


// Example.3
console.log(Array.of (100, 200, 300, 'Ankit'));   // output: [ 100, 200, 300, 'Ankit' ] 