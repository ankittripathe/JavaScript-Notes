/* Nullish Coalescing Operator
nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, otherwise returns its left-hand side operand.
It’s commonly used to provide default values for variables.

syntax
variable ?? default_value
Nullish Coalescing Operator (??): null nudefined
*/

// Example.1
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15    // null aur undefiend ke liye nullish opeartor bana hai
val1 = null ?? 100 ?? 20
console.log(val1);

// Example.2
let message = undefined ?? 40
console.log(message);


// Example.3
function foo(bar) { 
    result = bar ?? 99; 
    console.log(result); 
} 
foo(null);    // 55 
foo(22);      // 22 


// Example.4
function chai(arg){
    result = arg ?? 'Ankit'
    console.log(result);
}
chai(undefined)
chai('murli')