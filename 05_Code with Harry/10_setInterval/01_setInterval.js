
// Example 1
let sum = (a,b,c)=>{
    alert("Yes I am Running " +(a + b + c) );
    a+b+c
}
setTimeout(sum, 1000, 1,2,7);
setInterval(()=> {
    alert("setInterval")
}, 3000);


// Example2
setTimeout(() => { 
    alert("Hello World!");
},500);
setInterval(()=> {
    alert("setInterval")
}, 3000);

// clearInterval(timerId)

