// Example.1
const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  console.log("Happy Birthday!");
}

// Example.2
setTimeout(() => {
  console.log("this is the first message");
}, 5000);
setTimeout(() => {
  console.log("this is the second message");
}, 3000);
setTimeout(() => {
  console.log("this is the third message");
}, 1000);

// Examle.3  (Agrument type)
let sum = (a, b, c) => {
  console.log("Yes I am Running " + (a + b + c));
  a + b + c;
};
setTimeout(sum, 1000, 1, 2, 7);

/*
Don't do this
setTimeout("console.log('Hello World!');", 500);

Do this instead
setTimeout(() => { 
  console.log("Hello World!");
},500);

*/

// clearTimeout(timerId)
