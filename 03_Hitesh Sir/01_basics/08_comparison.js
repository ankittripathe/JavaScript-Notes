console.log('2 > 1 =', 2 > 1);        // output: true
console.log(2 >= 1);                  // output: true      
console.log(2 < 1);                   // output: false
console.log(2 == 1);                  // output: false
console.log(2 != 1);                  // output: true
console.log(`"02" > 1 =`, "02" > 1);  // output: true

console.log(null > 0);                // output: false 
console.log(null == 0);               // output: false
console.log(null >= 0);               // output: true


/* Note:
   The reason is that an equality check == and comparisons > < >= <= work differently.
   Comparisons convert null to a number, treating it as 0.
   Thats why (3) null >=0 is true.
   And  (1) null > 0 is false.
*/


console.log(undefined == 0);     // false
console.log(undefined > 0);      // false
console.log(undefined < 0);      // false    undefined compared with  Zero <,>or == always gives => false


// Value and Data Types Check (===)  strict check (also check data Types)
console.log(2 === 2);       // true
console.log("2" === 2);     // false => because both have differnt data Types

