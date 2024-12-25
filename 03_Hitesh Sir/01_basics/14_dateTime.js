//! Dates

// Example.1
let myDate = new Date()
console.log(myDate);                      // output: 2024-07-21T04:57:13.469Z
console.log(typeof myDate);               // output: object

console.log(myDate.toString());           // output: Sun Jul 21 2024 10:42:13 GMT+0545 (Nepal Time)

console.log(myDate.toDateString());       // output: Sun Jul 21 2024

console.log(myDate.toLocaleString());     // output: 21/7/2024, 10:42:13 am

console.log(myDate.toJSON());

console.log(myDate.toISOString());

console.log(myDate.toTimeString()); 

console.log(myDate.toUTCString());

console.log(myDate.getTimezoneOffset());


// Example.2
let myCreatedDate = new Date(2024, 6, 28)
console.log(myCreatedDate.toDateString());           // Month 0 se start hote hai javaScripts me 


// Example.3
let holeDate = new Date(2024, 6, 21, 14, 21 ,55)
// let holeDate = new Date("2024-07-21")
// let holeDate = new Date("07-21- 2024")
console.log(holeDate.toLocaleString());


//Example.4
let myTimeStamp = Date.now();
console.log('myTime =',myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log((Date.now()/1000));                      // second m convert krne ke liye
// console.log(Math.round(Date.now()/1000));            // round kr denge taki decimal value na aaye.


//Example.5
let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth());         // zero se start hota hai aur avi kya chal rha hai o batega
console.log(newDate.getMonth() + 1);     // ab jan = 1 , feb = 2 sahi ho gaya 

console.log(newDate.getDay());           // sunday = 0 se start hota hai  ,monday = 1

console.log(newDate.getMinutes());

console.log(newDate.getTime());


//customize kr skte hai 
newDate.toLocaleString('default',{
    weekday: "narrow",
    // weekday: 'long',
    // timeStyle: "full",
    // timeZoneName: 'short'        // E sab features hai  
})

console.log(newDate);