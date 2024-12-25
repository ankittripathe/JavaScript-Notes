/*
   (1) Synchronous:- Store in Main stack
   (2) Asynchronous: stored in Side stack, always return a promise

   (3) Async-Await:- async function always return a promise

   (4)  Syntax:- async function myFunc(){....}
 
   (5) Await:- A keyword used to pause the execution of an async function until the Promise is settled (either resolved or rejected).

   (6) Benefits of Using Async-Await:-
    :- Async-Await ka use hum krte hai Asynchronous ko Synchronous ki tarah Behave krwane ke liye.
    :- With Async-Await aap synchronous code bhi aise likh skte ho jaise ki aap noraml Synchronous code likhe rahe ho.
    :- Await ka matalb hai agli line tab ka na execute kro jabtak agle ka answer na aa jaye.
    :- Await ko work krwane ke liye Await ke parent function me Async lagana padega.
*/

//! Example.1
async function getData() {
  // get request:- async (async hai toh aage await laga denge toh synchronous ke tarah behave krega)
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  // parse json:- async
  const data = await response.json(); //converting in JSON format
  console.log(data);
}
// getData();

//! Example.2
async function fetchWithErrorHandling() {
  try {
    const response = await fetch("invalid-url");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
// fetchWithErrorHandling();

/* Notes:
    In async-await if condition is true code will execute & if condition is false then error occur to overcome this problem we always use try catch method.
*/

//! Example.3
const promiseOne = new Promise((reslove, reject) => {
  setTimeout(() => {
    if (true) {
      reslove({ userName: "Ankit", password: "12345" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

async function consumePromiseOne() {
  try {
    let result = await promiseOne;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
// consumePromiseOne();

//! Example.5
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Weather data");
      resolve(200);
    }, 1000);
  });
}

async function getWetherData() {
  let result = await api();
  console.log(result);
}
// getWetherData();

