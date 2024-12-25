//! Arrays is a collection of more than one items //
// Example.1
const marks = [80, 85, 90, 95, 100]
console.log(marks);

// Example.2
const a = [7, "Ekta", false, null]
console.log(a);

// this is the method to acess the value of item
console.log(a[0]);  // 7
console.log(a[1]);  // Ekta
console.log(a[2]);  // false
console.log(a[3]);  // null
console.log(a[4]);  // undefined  (because index 4 is not defined in the given list)

// Example.3
const cars = [];
cars[0]= "audi";
cars[1]= "punch";
cars[2]= "pajero";
console.log(cars);  // output: ['audi', 'punch', 'pajero']


// Finding length
let number = [1, 2, 7 ,9 ]
console.log(number.length);

// Array are mutuable so it's value can change while string is immutable so it's value can't change 
// Example.1
let num = [1, 32, 7, 6]
num [3] = 'java'
console.log(num);

// Example.2
let girls = ["Nandini", "Aaradya", "Nidhi", "kavya"]
girls[1] = "Jeeva"
console.log(girls);



//Summery of above
let mark = [90, 77, 30, false, "Absent", "fail"]
console.log(mark[0]);
console.log(mark[1]);
console.log(mark[6]);     // undefined index 6 does not exists  
console.log(mark.length); // length of Array 
mark[4] = "pass"
mark[0] = "Not-present"
console.log(mark);
console.log(typeof mark);  // object

