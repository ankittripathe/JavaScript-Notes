// Example.1
const name = "Ankit"
const rank = 7;

console.log(name + rank + " Love");      // output: Ankit7 Love
console.log(name, rank);                 // output: Ankit 7
console.log(`Hello my name is ${name} & my rank is ${rank}`);    //?  String Concatination method ``
console.log(name[0]);                   // output: A


// Example.2 
const gameName = new String('ankitTripathi')
// console.log(gameName[0]);              // a
// console.log(gameName[1]);              // n
// console.log(gameName[2]);              // k
// console.log(gameName[3]);              // i
// console.log(gameName[4]);              // t
console.log(typeof gameName);             // output: object


//! String Methods  //
console.log(gameName.__proto__);          //? prototype 

console.log(gameName.length);             // output: 13
console.log(gameName.toUpperCase());      // output: ANKITTRIPATHI
console.log(gameName.charAt(4));          // output: t
console.log(gameName.indexOf('l'));       // output: -1        //? list me nhi hoga toh -1 dega.
console.log(gameName.indexOf('a'));       // output: 0


//! Example //
let game = 'hockeyCricket'
// 1 substring()
const newString = game.substring(0, 4)
console.log('newString =', newString);           // output: hock


// 2 slice()
const anotherString = game.slice(2, 4)         
console.log(anotherString);                     // ck

// Example          
const anotherStr = game.slice(-9,6)   // Es baar ulta count kre last ke taraf se -0, -1, -2 like this 
console.log(anotherStr);             // ey


// 3 trim()
const newStringone = "   ankit  "
console.log(newStringone);

console.log(newStringone.trim());
// console.log(newStringone.trimStart());
// console.log(newStringone.trimEnd());


// 4 replace()
// Example.1
const player = "Ankitdhoni"
console.log(player.replace('Ankit','Ms '));


// Example.2
const url = 'https://ankit.com/ankit%20tripathi'
console.log(url.replace('%20', '-'));


// 5 includes()
const student = 'Ankitdhoni'
console.log(student.includes('Raina'));       // false
console.log(student.includes('Ankitdhoni'));  // true
console.log(student.includes('Ankit'))        // true
console.log(student.includes('A'))            // true


// 6 concat()
let user1 ='Ankit'
let user2 ='Tripathi'
console.log(user1.concat(user2));                    // output: AnkitTripathi
console.log(user1.concat(user2,'07'));               // output: AnkitTripathi07
console.log(user1.concat(user2,'07',' Developer'));  // output: AnkitTripathi07 Developer


// 7 split()
// Example.1
let userName = 'Ankit-tripathi-com'   
console.log(userName.split('-'));        // output:[ 'Ankit', 'tripathi', 'com' ]


// Example.2
let user = 'Ankit tripathi com'
console.log(user.split(' '));           // output:[ 'Ankit', 'tripathi', 'com' ]


// Example.3
let text = "How are you doing today?";
const myArray = text.split(" ");
console.log(myArray);                  // output: [ 'How', 'are', 'you', 'doing', 'today?' ]


//Example.4
const str = 'The quick brown fox jumps over the lazy dog';
const words = str.split(' ');     // tab ka gap hai 
console.log(words);
// output:['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
console.log(words[3]);    // output: fox
console.log(words[7]);    // output: lazy


//Example.5
const str2 = 'Hello jee'
console.log(str2.split(''));       // yaha gap nhi hai.   
// output:- ['H', 'e', 'l', 'l', 'o', '', 'j', 'e', 'e']