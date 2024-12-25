// Example.1
const temperature = 41 
if(temperature < 50){
    console.log("Less than 50");
}else{
  console.log('Temperature is greater than 50');  
}
console.log("Executed Always");


// Example.2
const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User power: ${power}`);
}
// console.log(`User Power: ${power}`);    //  error because of block scope


// Example.3
const scores = 100
if(scores > 50){
    var grade = 'A Grade'
    console.log(`congratulation ${grade}`);
}
console.log(`Congratulation ${grade}`);    
// var ke condition me code execute hoga because it follow global scope


// Exmaple.4
const marks = 100
if(marks > 50) console.log("test");  // implicit scope


// Example.5
const balance = 800
if (balance < 500){
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else{
    console.log("less than 1200");
}


// Example.6
const userLogIn = true
const debitCard = true

if(userLogIn && debitCard && 2==2){  // && ke case me Ek vi condtion false huwa toh code execute nhi hoga.
    console.log("Allow to bye course"); 
}


// Example.7
const logInFromGoogle = false
const logInFromEmail = true

if(logInFromGoogle || logInFromEmail){   // OR ke case me Ek vi condition true huwa toh print hoga.
    console.log("User logged in");
}