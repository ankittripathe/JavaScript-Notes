//! String => denoted by single '' or double quotes "" //
// Example.1
 let name = "Ankit"
 console.log(name.length);  //  string property
 console.log(name[0])    // A
 console.log(name[1])    // n
 console.log(name[2])    // k
 console.log(name[3])    // i
 console.log(name[4])    // t


//! Template literal => denoted by backticks `` this feature is introduced in ES-6  //
// Example.1
let sentence = `Avinash is my bestfriend`
console.log(sentence);

// Example.2
let boy1 = "Avinash"
let boy2 = "Ankit"
console.log(boy1 + " " + boy2);
console.log(`${boy1} ${boy2}`);  // template literal makes it easier


//! Escape Sequence characters  //
// Example.1
let fruit = `Bana\'na`
console.log(fruit);   // output: Bana'na

// Example.2
let fruits = `Bana\"na`
console.log(fruits);  // output: Bana"na

// Example.3
let girl = 'Author\nEkta'
console.log(girl);