/*  (1) undefined => undefined is a value
    Ye value tab di jati hai jab varibale ko koie value na mili ho, Eska matlab hai, ye ek garbage value ki tarah treat ki jaati hai, Aap ishe default value vi kah skte ho. 
*/
// Example.1
let a;
console.log('a =', a); // output: undefined

// Example.2
let val = undefined
console.log('val =', val); // output: undefined


/* (2) not-defined => not-defined is an error
    koie particular elements/identity ko use karna without it's declaration gives an error, and that error is not defined error.
*/
// Example.1
console.log(name);  // output: name is not-defined


/* (3) null => null is also a value
   :- this is a value which resole like, not found.
   :- null is received when something is not found 
   :- null is standalone value
*/
