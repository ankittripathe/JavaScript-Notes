/* 
(1) Return function ke ander lagta hai.
(2) Return ka matlab hua, jaha par bhi return lagega uske aage jo bhi likhoge wo jaayega jaha se function call huwa tha. 
(3) Aaisa function jo  kuch nhi return krta hai Wo bhi undefined return krta hai.
*/

// Example.1
function abcd() {
  return 12;
}
let result = abcd();
console.log(result);   // output: 12

console.log(abcd());   // output: 12  (E wala direct method hai bina variable declare kiye)


// Example.2
function greet() {
  return;
}
console.log(greet()); // output: undefined


// Example.3
let a = () => {
  return 100;
};
let answer = a();
console.log(answer); // output: 100  (by declearing varibale)
console.log(a());    // output: 100  (direct method)
