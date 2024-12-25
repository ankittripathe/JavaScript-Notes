// Ques.1 Create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string.
function countVowels(str) {
  count = 0;
  for (const char of str) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      count++;
    }
  }
  return count;
}
let result = countVowels("cricket");
console.log(result);  // output: 2


// Ques.2 Create the arrow function to perform the same task.
let countVow = (str) => {
  count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
return count++
};
console.log(countVow('captain')); // output: 3


