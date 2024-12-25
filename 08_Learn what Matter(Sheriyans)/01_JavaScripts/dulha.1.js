/** 1. Word vs Keyword **/
/*
 Word => Anythings which doesn't have any meaning in language is Word.
 for E.g => Ankit, chacha, ramu, good, sona etc
 */
/*
 keyword => Anythings which has some meaning in language is keyword.
 for E.g => for, else, let, var, const, etc...
*/
/** 2. Variable and Constant **/
// var, const, let
// code me koie vi data store krne ke liye jiska use hota hai usee varibale kahte hai.
// (varibale jiska value badle) => var , let
var dulha = "Shyam";
var dulhan = "Sakshi";
console.log(`${dulha} weds ${dulhan}`);
// console.log(dulha +' weds '+ dulhan);
var dulha = "Avinash";
console.log(`${dulha} weds ${dulhan}`);
// constant jiska value change na hoo. => const
const boy = "Amit";
const girl = "Shivangi";
console.log(`${boy} weds ${girl}`);
// Hoisting= > variable and function are hoisted which means there decleration is moved on the top of the code
console.log(a);
var a = 10; /*Es line ko niche wale line me break kr dega */
var a;
a = 10;
