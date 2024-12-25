// Array => The collection of more than one items.
// Example.1
let marks = [99, 33, 22, 19]
console.log(marks);          // output: [99, 33, 22, 19]
console.log(typeof marks);   // output: object
console.log(marks.length);   // output: 4  (length is property not methods)

// Example.2
let heros = ['ironman', 'Superman' , 'Spiderman']
console.log(heros);         // output: ['ironman', 'Superman', 'Spiderman']
console.log(typeof heros);  // output: object

// Example.3
let arr = [ 99, 66, 44, 'mango', 27]

// (How to Access the value in Array)
// Array Indices arr[0], arr[1], arr[2]
console.log(arr[0])   // output: 99
console.log(arr[1])   // output: 66
console.log(arr[2])   // output: 44
console.log(arr[3])   // output: mango
console.log(arr[4])   // output: 27


// Changing the value of Array (This is possible because Array are immutable)
arr[0] = 'Ankit'
arr[5] = false
arr[6] = 'loveJs'
console.log(arr);  // output: ['Ankit', 66, 44, 33, 27, false, lovejs]


// Example.4 (empty array)
let car = []
console.log(car);           // output: []
console.log(typeof  car);   // output:- object


car[0] = 'ford'
car[1] = 'baleno'
car[2] = 'maruti'
console.log(car);  // output: ['ford', 'baleno', 'maruti']


// Example.5
let profile = ['Lovely', false, 7]
console.log(profile);   // output: ['Lovely', false, 7]

// String => are immutable (No change)
// Array => are mutuable (will change)

// Example.6
const sample = [
    "Apple",
    "Banana",
    "Cherry",
    13,
    true,
    {
      name: "Ankit",
    },
    function Hello() {
      console.log("Hello jee");
    },
  ];
  console.log(sample);
  console.log(sample[5]);
  console.log(sample[6]);
  console.log(sample.length);




