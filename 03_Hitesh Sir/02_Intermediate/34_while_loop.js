/* while loop syntax

  while (condition) {
       /// code to be executed 
       increament
   }
*/

// Example.1
let index = 0
while (index <= 10) {
    console.log(`Value of index = ${index}`);
    index = index + 2
}

// Example.2 (Array wala Example)
let myArray = ['Batman','Shaktiman','spiderman']

let arr = 0
while(arr < myArray.length) {
     console.log(`Value = ${myArray[arr]}`);
     arr++
}

// Example.3
let Array = ['Andre', 'pollard', 'Bravo', 'Smith']
let i = 0;
while( i < Array.length ){
   console.log(`value = ${Array[i]}`);
   i++
}
