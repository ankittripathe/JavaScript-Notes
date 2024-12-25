// (1) for loop  //
// Example.1
for(let i = 0; i < 6; i++){
    console.log('i =', i);
}

// Example.2
for(let i = 0; i <=5; i++){
    console.log(i);
}

// Example.3
for(let i = 0; i < 6; i = i+2){
    console.log('i =', i);
}

// Example.4  (find Sum of First 5 natural number)
let sum = 0;
for (let i=0; i<5; i++) {
    sum = sum +(i+1)    
}
console.log("Sum of First 5 natural number =", sum);
