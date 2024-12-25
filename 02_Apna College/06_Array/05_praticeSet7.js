/* (1) Create a n array to store comapnies => 'bloomberg', 'microsoft', 'uber', 'google', 'IBM' 'netflix'
   (a) Remove the first company from the array
   (b) Romove uber & add ola in its place
   (c) Add Amazon at the end
*/

// solution (a)
const companies = [
  "Bloomberg",
  "Microsoft",
  "Uber",
  "Google",
  "IBM",
  "Netflix",
];
companies.shift();
console.log(companies); // output: ['Microsoft', 'Uber', 'Google', 'IBM', 'Netflix']


// solution (b)
companies.splice(1, 1, "ola");
console.log(companies); // output: ['Microsoft', 'ola', 'Google', 'IBM', 'Netflix']

// solution (c)
companies.push("Amazon");
console.log(companies); // output: ['Microsoft', 'ola', 'Google', 'IBM', 'Netflix', 'Amazon']


// 2D Array Problem
// const winPatterns = [[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8], [2,4,6], [3,4,5],[6,7,8]];
const winPatterns = [
  ["ram", "shyam", "hari"],
  ["sita", "kali", "durga"],
  ["swift", "kotlin", "java"],
];

for (let pattern of winPatterns) {
  console.log(pattern);
  console.log(pattern[0], pattern[1], pattern[2], pattern[3]);
}
