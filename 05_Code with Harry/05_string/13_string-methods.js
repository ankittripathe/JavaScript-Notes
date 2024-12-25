// String Methods 
var name = "Ankit tripathi"

// (1) length
console.log(name.length);   // output: 14

// (2) toUpperCase() 
console.log(name.toUpperCase());   // output: ANKIT TRIPATHI

// (3) toLowerCase()
console.log(name.toLowerCase());  // output: ankit tripathi

/*  Important Notes.
In JavaScript numbering positions start from zero
First position is 0
Second position is 1 ...so on
*/

// (4) slice(start, end)
//This method takes 2 parameters: starting position, & ending position (but end positon not included)
var name = 'Ankit Tripathi'
console.log(name.slice(2, 4)); 
console.log(name.slice(-3, -1));

// (5) replace("Ankit", "Ram")
console.log(name.replace("Ank", "Ek"));
console.log(name.replace("Ankit", "Avinash"));

// (6) replaceAll(" ", " ")
let text = "I love Cats. Cats are very easy to love. Cats are very popular."
console.log(text.replaceAll("Cats","Dogs"));

// (7) Concat()
let name1 = "Ram"
let name2 = "Shyam"
console.log(name.concat(" is a friend of ",  name1));

// (8) trim()
let friend = "      shivangi     "
console.log(friend.trim());

// (9) trimStart()
console.log(friend.trimStart());

// (10) trimEnd()
console.log(friend.trimEnd());


// Example 
let dost = "Ankit" + "Aviansh" + "Vivek"
console.log(dost);
console.log(dost[0]);
console.log(dost[1]);
console.log(dost[2]);
console.log(dost[3]);
console.log(dost[4]);
console.log(dost[5]);
console.log(dost[16]);