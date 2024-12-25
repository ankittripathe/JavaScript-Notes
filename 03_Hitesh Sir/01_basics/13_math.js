// Maths  //
console.log(Math);              //? console me karenge toh aur vi bahut value dekhne ko milega.


// (1) absolute () 
//? absolute value will always give positive value. Either the given value is positive or negative 
console.log(Math.abs(-4));      // output: 4


// (2) round()                  //? round it to the nearest one.
console.log(Math.round(6.7));   // output: 7 => round it to 7
console.log(Math.round(6.5));   // output: 7 
console.log(Math.round(6.4));   // output: 6 


// (3) ceil()             //? top value choose krega => jara vi 4 se jada huwa toh 5 choose krega.
console.log(Math.ceil(4.2));             // output: 5
console.log(Math.ceil(4.01));            // output: 5
console.log('ceil =', Math.ceil(3.99));  // output: 4


// (4) floor()            //? niche ka value lega.
console.log(Math.floor(4.9));        // output: 4
console.log(Math.floor(4.99));       // output: 5

     
// (5) min()              //? sabse minimum value kaun sa hai.
console.log(Math.min(4, 2, 9, 10));      // output: 2  
console.log("min value =",Math.min(99, 1000, 101, 22, 33, 0.1));    // output: 0.1


// (6) max()             //? sabse maximum value kaun sa hai.
console.log(Math.max(4, 2, 9, 10));   // output: 10


// (7) random()          //? give random value/number
console.log(Math.random());               // beech ka value dega => 0.01 - 0.99


console.log((Math.random()*10));  
// 10 se multiply krne pe Ek value shift ho jaega(but zero vi aa skta hai esliye +1 krenge taki kavi zero na aaye niche kiya huwa hai ohi)

console.log((Math.random()*10) + 1);     // ab value 1 se se niche kavi nhi aaega.

// console.log(Math.floor(Math.random()*10) + 1);
console.log(Math.round(Math.random()*10) + 1);


// Notes
const min = 10
const max = 20
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)
