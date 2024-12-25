// Example
function addSquare(a, b){
  const sa = square(a);
  const sb = square(b);
  console.log(sa);
  console.log(sb);     //yahi return kr rha hai ohi example ke liye hai

  function square(num) {
     return num * num;
  }
   return sa + sb;
}
console.log(addSquare(3, 4));
