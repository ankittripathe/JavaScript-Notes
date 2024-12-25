// Array methods
// (1) Array length()
let num = [1, 4, 44, 98, 28]
let size = num.length; 
console.log(size);
console.log(size, typeof size);


// (2) toString()
let n = [3, 6, 7, 9]
let b = n.toString();
console.log(b);
console.log(typeof b);
// console.log(n.toString());  // shortcut


// (3) join()
let n1 = [2, 4, 6, 8, 10]
let d = n1.join(" ** ");
console.log(d);
console.log(typeof d);


// (4) pop() => remove last elemets from the array list & will modify the original Array
// Example.1
let language = ["Java", "C++", "Ruby", "Golang"]
let e = language.pop();
console.log(e);     // return the popped value 
console.log(e, language);

// without storing in variable
let lang = ["Java", "C++", "Ruby", "Kotlin"]
lang.pop()
console.log(lang);  // modify the original Array


// (5) push() => add one elements at the end(last) of the Array list & also modify original Array
// Example.1
let a = [ 11, 22, 33]
a.push(44)
console.log(a); // modify the origianl Array

let length =  a.push(55)            
console.log(length);  length = 5
console.log(a); 

// Example.2
const arr = [ 4, 1, 2, 8, 2, 6]
arr.push("Ankit")  
console.log(arr);


// (6) Shift() => remove one item form the starting & modify original Array
let girls = ["sita", "gita", "Ekta" , "Rasmika"]
girls.shift()
console.log(girls);  

let result = girls.shift()
console.log(result,  girls);


// (7) unshift()
let boys = ["Akash", "Vivek", "Asish", "Ankit"]
boys.unshift("Avinash");
console.log(boys)


// (8) delete
let numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numb.length);  // 10

delete numb[3];        // delele the [3] position item 
console.log(numb); 
console.log(numb.length);  // length does not change becasue empty wala exist krega length me
 

// (9) concat()
// Example.1
const myGirls = ["ektu", "lovanya"];
const myBoys = ["mahi", "raina"];

const myChildren = myBoys.concat(myGirls);
console.log(myChildren);

// Example.2
const arr1 = ["Safari", "farari"];
const arr2 = ["ola", "Uber"];
const arr3 = ["Ev", "petrol"];
const newArray = arr1.concat(arr2, arr3);
console.log(newArray);
console.log(newArray.length, typeof newArray); 

// merging aaray with direct putting value
const array = ["Emil", "Tobias", "Linus"];
const myChild = array.concat("Peter"); 
console.log(myChild);


// (10) sort() => sorts the elements in ascending order (alphapetical order follow krta hai)
// Example.1
let sweets  = ["Barfi", "Rasmalaie", "Papadi" ,"Rasgulla", "Laddu"]
sweets.sort()
console.log(sweets, typeof sweets);

// Example.2
let srt = [100, 2, 4 , 1, 9]
srt.sort()
console.log('sort =', srt);


// (11) reverse()
let k = [55, 66, 3, 6, 1, 0]
k.reverse()
console.log(k);


// (12) splice()
 // Example.1
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

// Example.2
let number = [11, 22, 33, 44, 55, 66]
number.splice(2, 4,   'js', 'java', 3, 'kotlin')
console.log(number);

// Example.3
const fruit = ["Banana", "Orange", "Apple", "Mango"];
let ans = fruit.splice(1, 2);  // remove position 1 to 2 items  
console.log("answer =", ans);  // items removed
console.log("splice =", fruit); // origanl jo bacha hai


// (13) Slice() => kaha se kaha tak last wala position nhi include hota hai
// Example.1
const froot = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let updated = froot.slice(1, 4);  // starting is 1 and ending is 4 but 4 not included
console.log(updated);

// Example.2
let num3 = [100, 2, 4, 1, 8, 9, 5]
let subArray = num3.slice(2, 6)  // kaha se kaha tak last wala position nhi include hoat hai
console.log(subArray);

// Example.3
let num4 = [100, 2, "apple", "leechi", 8, 9, 5]
let answer = num4.slice(3)  // position 3 se last tak print hoga
console.log(answer);


// (14) indexOf() => give the position of the items
var nums = [ 4, 1, 2, 8, 12, 6]
console.log(nums.indexOf(300));  // if not present in the aaray list will give position -1
console.log(nums.indexOf(8));    // 3rd position pe hai 


// (15) includes() => give true or false if the items exist in the array list
var nums = [ 4, 1, 2, 8, 12, 6]  
console.log(nums.includes(6));   // 6 is present in te list so it will gives true
console.log(nums.includes(880)); // not present in the list so it will gives false



