// Arrow function syntax //
() => {
  console.log("Expression here");
}; // curly bracket ke ander hota hai arrow function

() => {
  return something; // return likhna padta hai arrow function me
};

// Example.1
const greet = () => {
  console.log("Smile Please");
};
greet();     // Smile Please

// Example.2
const square = (num) => {
  return num * num;
};
console.log(square(5));  // 25


// Example.3
const hello = () => {
  console.log("Hello");
  return "Ankit ";
};
let results = hello();
console.log(results);

// Arrow implict function syntax  //
// (parameter)=> expression    //implict function

() => console.log("Expression Here"); // curly bracket ki jarurt nhi hai arrow implict function me

() => sometthing; // return nhi likhna padta hai implict function me o apne aap maan leta hai.

// Example.1
const multiply = (num) => num * num;
console.log(multiply(10));

// Example.2
const check = () => console.log("Love Forever 7");
check();
