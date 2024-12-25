// The console.time() and console.timeEnd() methods are used for measuring the time it takes to execute a block of code. They help developers understand the performance of specific sections of code and are particularly useful for debugging and optimization

// Example.1 (Measuring Function Execution Time)
console.time('loopTime');

let sum = 0;
for (let i = 0; i < 1_000_000; i++) {
  sum += i;
}

console.timeEnd('loopTime'); // output: loopTime: XX ms


// Example.2
console.time('Ankit');    // time start

console.log("React");
console.log("Tailwind");
console.log("NextJs");

console.timeEnd("Ankit"); // time end



