// Example.1
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is Complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Async 1 resolved");
});

/**** Example.2 Method 2nd (Without delaring variable) ****/
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 completed ");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

/**** Example.3  ****/
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Ankit", Email: "ankit@gmail.com" });
  }, 1000);
});

promiseThree.then(function (data) {
  console.log(data);
});

/**** Example.4  ****/
const ticket = new Promise(function (resolve, reject) {
  const isBoarded = true;
  if (isBoarded) {
    resolve("You are in the Flight");
  } else {
    reject("Your flight has been cancelled");
  }
});

ticket
  .then((data) => {
    console.log("Wohoo", data);
  })
  .catch((data) => {
    console.log("Oh no", data);
  })
  .finally(() => {
    console.log("I will execute either promsie is resolve or rejected");
  });
