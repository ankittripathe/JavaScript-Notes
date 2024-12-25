/* for loop Syntax   
    for (let index = 0; index < array.length; index++) {
       const element = array[index];
    }
*/

// Example.1
for (let i = 0; i < 7; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is best number");
  }
  console.log(element);
}

// Example.2
for (let i = 0; i <= 3; i++) {
  console.log(`outer loop value ${i}`);

  for (let j = 0; j <= 3; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Example.3
let myArray = ["Batman", "Superman", "Spiderman", "Shaktimaan"];
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
  console.log(myArray[index]);    //shortcut upar wale line ka
}

// Example.4
let Array = ["Bat", "ball", "cat", "dog", "elephant"];
console.log(Array.length);   // 5
// console.log(Array[0]);
// console.log(Array[1]);
// console.log(Array[4]);

for (let i = 0; i < 5; i++) {
  console.log("i =", Array[i]);
}

// Example.5
let num = 7
for (let i = 1; i <= num; i++){
  console.log(i); 
}

// Example.6 (print the number from 55 to 50)
for(let i = 55 ; i >= 50; i--){
  console.log(i);
}

// Example.7 (print the number form 99 to 105)
for(let i = 99; i <= 105; i++){
  console.log('i =', i);
}

// Example.8 (print out the table of 3)
for(let i = 1; i <= 10; i++){
  console.log('3*i =',3*i);
}

// Example.9 (print out the Even or odd number from 5 to 50)
for(num = 5; num <= 30; num++){
  if(num % 2  === 0){
    console.log('Even number ', num); 
  } else{
    console.log('odd number ', num);
  }
}