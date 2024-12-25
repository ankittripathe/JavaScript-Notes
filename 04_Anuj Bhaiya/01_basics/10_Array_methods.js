const num = [5, 7, 11, 3, 99]
console.log(num);

// (1) indexOf() => find position
console.log(num.indexOf(11));
console.log(num.indexOf(119));  // if not presented in Array list it will gives output => -1  


// (2) includes() => true /false
console.log(num.includes(99));
console.log(num.includes(929));


// (3) push() => adding one elements at last
num.push("Leo")
console.log(num);


// (4) unshift() => adding one elements at first
num.unshift("Dhoni")
console.log(num);


// (5) pop() => remove one elements form last
let name = ["king", 'tiger',"Leopard"]
name.pop()
console.log(name);


// (6) shift() => remove one elements form first
name.shift()
console.log(name);


// (7) sort() => arrange in ascending order
// Example.1
let player = ['Raina', "Macculum", 'Watson', 'Dhoni','Jedega']
player.sort()
console.log(player);


// Example.2 
let num1 = [2, 0, 100, 101, 2002, 7, 5, 4]
num1.sort()
console.log(num1);


// (8) slice()
// Example.1
let Array = [1, 2, 5, 6, 7, 99]
let newArray = Array.slice(2)
console.log(newArray);

// Example.2
let Arr = [1, 2, 5, 6, 7, 99]
// let newArr= Arr.slice(2,5)
// console.log(newArr);
console.log(Arr.slice(2, 5));    // shortcut method

