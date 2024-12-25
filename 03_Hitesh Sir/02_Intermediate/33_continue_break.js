//! break  Statement
// Example.1
for (let i= 1; i <= 10; i++) {
  if (i == 5) {
    console.log(`Detected 5. Yahi break laga do aage nhi jaane doo ab`);
    break;
  }
  console.log(`value of i = ${i}`);
}
console.log('');


//! continue Statement
// Example.1
 for (let i = 1; i <= 8; i++) {
    if(i == 5){
        console.log(`Detected 5. Ek Baar Maaf kr doo aur aage jane doo`);
        continue;
    }
     console.log(`val of i = ${i}`);
 }

