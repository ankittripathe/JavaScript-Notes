/*  Syntax :-
    const Promise1 = new Promise((resolve, reject)=> {})

     Promise1.then((result) =>{
         console.log(result)
     }).catch((error) =>{
         console.log(error)
     })

     There are 3 state of promise:-
     (1) pending
     (2) fullfilled
     (3) rejected
*/

/*************************************************************************************************/
// Example.1
// const promise1 = new Promise((resolve, reject) => {
//   console.log("promise-1");
// });
// console.log(promise1);
// console.log(typeof promise1);

/*
  PromiseState: pending
  promiseResult: undefined 
*/

// Example.2:- resolve()
// let promise2 = new Promise((resolve, reject) => {
//   console.log("promise-2, undefined type");
//   resolve();
// });
// console.log(promise2);

/*
  PromiseState: fullfilled
  promiseResult: undefined (resolve ko call krte time kuch diya nhi gaya Esliye undefined)
*/

// Example.3:- resolve()
// let promise3 = new Promise((resolve, reject) => {
//   console.log("promise-3, defined type");
//   resolve("promise resolved");
//   // resolve(100) // string ya number kuch vi assign ho skta hai
// });
// console.log(promise3);
// 
/*
  PromiseState: fullfilled
  promiseResult: promise resolved
*/

/************************************************************************************************/

// Example.4:- reject()
// let promise4 = new Promise((resolve, reject) => {
//   console.log("reject-1");
// });
// console.log(promise4);

/*
 PromiseState: pending
 promiseResult: undefined
*/

// Example.5:- reject()
// let promise5 = new Promise((resolve, reject) => {
//   console.log("reject-2");
//   reject();
// });
// console.log(promise5);
/*
 PromiseState: rejected
 promiseResult: undefined
 (reject hoga toh red color ka uncaught aaega console broswer me)
*/

// Example.6:- reject()
// let promise6 = new Promise((resolve, reject) => {
//   console.log("reject-3");
//   reject("Server error");
// });
// console.log(promise6);
/*
   PromiseState: rejected
   promiseResult: server error
   (reject hoga toh red color ka uncaught aaega console broswer me)
*/

/************************************************************************************************/
// Example.7
// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(()=>{
//     console.log("async task-1");
//   }, 1000);
// });
// console.log(promiseOne);

// promiseOne.then(() => {
//   console.log("promise is fullfilled");
// });

/* Notes:-
    .then() wala part yaha print hi nhi hoga:- Eska direct connection hai resolve() se agar resolve ko call nhi krenge toh .then() wala part kavi execute nhi hoga
  */

// Example.8
// const promiseTwo = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("async task-2");
//     resolve('task resolved'); // reslove ka conection hai .then() ke sath
//   }, 1000);
// });
// promiseTwo.then((data) => {
//   console.log(data);
// });
// console.log(promiseTwo);
