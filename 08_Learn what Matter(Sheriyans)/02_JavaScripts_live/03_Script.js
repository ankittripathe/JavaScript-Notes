// Types in JS  //

/* JavaScripts mein har value do mein se kisi ek type ko belong karti hai they are =>
 1.Primitive data Types
 2.Reference data Types
*/

/* 
 ? 1.Primitive data Types
   Aisi value jinko copy karo toh copy ho jaye aur change karne par shirf us mein changes ho, 
   aisi value primitive kahlaati hai ( In simple agar bracket nhi hai toh primitive value hi hoga )
*/

var x = 10;
var y = x;
console.log("x =", x); // x => 10
console.log("y =", y); // y => 10

x = x + 2;
console.log("x =", x); // x => 12
console.log("y =", y); // y => 10

/*
 ? 2.Reference data Types (Non- primitive) => [], (), {}
   Aisi koie vi value jisko copy krne par real copy ho jaaye wo value reference type value hota hai.
   (matlab agar Array1 me change krenge toh Array2 me vi change hoga )

   Aisi value jinko change karne par copy ki jagah reference pass ho jaye aise value kehlaati hai reference values.
   (In simple reference data types bracket me hi hoga hamesha  =>  [], (), {})
   [] => array.
   {} => object.
   () => function.
*/

var a = [1, 2, 3, 4, 5];
var b = a;

console.log("a =", a);   // a = [1, 2, 3, 4, 5]
console.log("b =", b);   // b = [1, 2, 3, 4, 5]

a.pop();
console.log("a =", a);   // a = [1, 2, 3, 4]
console.log("b =", b);   // b = [1, 2, 3, 4]

// shirf ek me change krne ke liye (...dot)spread operator ka use hota hai. jo ki primitive ki tarah behave krwane lagega.


// Example.1  Using Array
var arr1 = [1, 3, 5, 7, 9];
var arr2 = [...arr1];
// ...dot ko spread operator bolte => spread operator ka matlab hota hai ki Arr1 ki sari value Arr2 me copy kro.

console.log("Array1", arr1); // arr1 = [1, 3, 5, 7, 9]
console.log("Array2", arr2); // arr2 = [1, 3, 5, 7, 9]

arr2.pop();
console.log("Array1", arr1); // arr1 = [1, 3, 5, 7, 9]
console.log("Array2", arr2); // arr2 = [1, 3, 5, 7]


// Example.2  Using Object
var obj1 = { name: "Ankit", age: 24 };
var obj2 = { ...obj1 };   // {...obj1} using spread operator in object as well.

console.log("obj1", obj1); // obj1 = {name:'Ankit', age: 24}
console.log("obj2", obj2); // obj2 = {name:'Ankit', age: 24}

obj1.name = "shivangi";
obj1.rank = "Air100";
console.log("obj1", obj1); // obj1 = {name:'Shivangi', age: 24, rank: 'Air100'}
console.log("obj2", obj2); // obj2 = {name:'Ankit', age: 24}


// Example.3   Using Object
var student1 = { name: "Aadhya" };
var student2 = { ...student1 }; // {...} using spread operator

console.log("Student1", student1); // student1 = {name:'Aadhya'}
console.log("Student2", student2); // student2 = {name:'Aadhya'}

student2.name = "sanchita";
console.log("Student1", student1); // student1 = {name:'Aadhya'}
console.log("Student2", student2); // student2 = {name:'sanchita'}
