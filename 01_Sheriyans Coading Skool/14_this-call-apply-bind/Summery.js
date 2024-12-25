/* Key Differences Between .call(), .apply(), and .bind()
  
  Method     Invokes the Function Immediately?	   Allows Setting this       Allows Passing Arguments
 .call()	           Yes	                             Yes                     Passed individually
 .apply()            Yes                               Yes                     Passed as an array
 .bind()	           No	                               Yes	                   Passed individually
*/

// (1) call() :- invoke immediately, passed arguments individually
const user = { name: "Ankit" };

function introduce(role) {
  console.log(`My name is ${this.name}, I am ${role}`);
}
introduce.call(user, "FrontEnd Developer");
// output:- My name is Ankit, I am FrontEnd Developer


// (2) apply():- invoke immediately, passed arguments as Array[]
// Similar to .call(), but it accepts arguments as an array.
const person = { name: "Anand" };

function intro(greeting, role) {
  console.log(`${greeting}, My name is ${this.name}, I am ${role}`);
}
intro.apply(person, ['Hello', "backend Engineer"]);
// output:- Hello, my name is Anand, I am backend Engineer


// (3) bind():- return new function store in variable and the invoke, passed indivaidaully
const human = {name: 'shivangi'}

function data(greeting, role){
  console.log(`${greeting}, I am ${this.name}, I am a ${role}`);
}
const storeKaro  = data.bind(human, 'Hi', 'Tecaher')  // store in variable then call 
storeKaro();
// output:- Hi, I am shivangi, I am a Tecaher


