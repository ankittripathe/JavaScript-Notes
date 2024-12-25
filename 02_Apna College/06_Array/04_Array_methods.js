/* Array Methods */

//! (1) push() => Add to end  (will modify original Array)  //
// Example.1
let fruits = ["apple", "leechi"];
fruits.push("banana", "orange");
console.log(fruits); // output: ['apple', 'leechi', 'banana', 'orange']

// Example.2  (return new Array length)
let froot = ["Khajoor", "Santara"];
let length = froot.push("imli", "Aam");
console.log(length); // output: 4
console.log(froot);  // output: ['khajoor', 'Santara', 'imli', 'Aam']

//! (2) pop()  => delete one item from End (will modify the original Array) //
// Example.1
let foodItem = ["momos", "burger", "chips", "juice"];
console.log("deleted Item =", foodItem.pop()); // output: juice
console.log(foodItem); // output: ['momos', 'burger', 'chips']

// Example.2
let glocery = ["suger", "ghee", "salt"];
let result = glocery.pop();
console.log("result =", result); // output: salt
console.log(glocery); // output: ['suger', 'ghee']

// Example.3
let startup = ["blinkit", "zepto", "Swiggy"];
let deletedItem = startup.pop();
console.log(startup); // output: ['blinkit', 'zepto']
console.log("deletedItem =", deletedItem); // output: Swiggy

//! (3) toString() => Converts an Array to a string  //
// Example.1
let name = ["Ram", "Shyam", "Aman"];
console.log(name); // output: ['Ram, 'Shyam', 'Aman']  (Anwser Array me hoga means bracket me)
console.log(name.toString()); // output: Ram, Shyam, Aman (Answer string me hoga means bina bracket ka)

// Example.2
let marks = [22, 33, 55, 66];

let final = marks.toString();
console.log("final =", final); // output: final = 22, 33, 55, 66
console.log(marks.toString()); // output: 22, 33, 55, 66

//! (4) concat() => Join multiple Array. It doesn't modfify the existing Array but returns a new Array list
// Example.1
let girls = ["smiley", "mitthu"];
let boys = ["hackme", "ankit"];
let superHeros = ["shaktimaan", "ironman"];

let newArr = girls.concat(boys, superHeros);
console.log(newArr); // output: ['smiley', 'mitthu', 'hackme', 'ankit', shaktimaan, 'ironman']
console.log(newArr.length); // output: 6

// Example.2
const clothingBrand = ["Roadstar", "levis"];
const shoesBrand = ["nike", "spark"];

const store = clothingBrand.concat(shoesBrand, "asidas");
console.log(store); // output: ['Roadstar', 'levis', 'nike', 'spark', 'asidas']
 
//! (5) unshift() => add new elements at the beginning, and return new Array length  //
// Example.1
let heros = ["spiderman", "shaktimaan", "batman"];
heros.unshift("krissh");
console.log(heros); // output: ['krissh', 'spiderman', shaktimaan', 'batman']
console.log(heros.length); // output: 4

// Example.2
let iplTeam = ["CSK", "MI", "KKR", "SRH"];
iplTeam.unshift("RR", "GT", "LSG");
console.log(iplTeam); // output: ['RR', 'GT', 'LSG', 'CSK', 'MI', 'SRH']

// Example.3
let players = ["Dhoni", "Raina"];
let check = players.unshift("Jadega");
console.log(players); // output: ['Jadega', 'Dhoni, 'Raina']
console.log(check);   // output: 3 (return New Array length)

//! (6) shift() => Remove one elements from beginning  //
// Example.1
let retainPlayer = ['chahar', "dhoni", "Jadega", "Gaikwad"];
retainPlayer.shift()
console.log(retainPlayer);  // output: ['dhoni', 'Jaedga', 'Gaikwad']

// Example.2
let mobileBrand = ['vivo', 'oppo', 'iphone', 'samsung']
const delBrand = mobileBrand.shift()
console.log('deletedBrand =', delBrand);  // output: vivo
console.log(mobileBrand);    // output: ['oppo', 'iphone', 'samsung']

// Example.3
const outdoorGame = ['batminton', 'hockey', 'cricket']
console.log('deletedGame = ', outdoorGame.shift());  // output: badminton
console.log(outdoorGame);  // output: ['hockey', 'cricket']


//! (7) slice() => Original array will not change // => kuch hissa kaat de rhe hai 
// Example.1
let sweetfruits = ["apple", "banana", "orange", "leechi", "grapes"];

// counting start form index 1 & end at index 4. But index 4 should not be included in Array list
let output  = sweetfruits.slice(1, 4)  
console.log(output);     // output: ['banana', 'orange', 'leechi'] 

console.log(sweetfruits.slice(1, 4));  // output: ['banana', 'orange', 'leechi']  (direct print here)

// not change in original Array list
console.log(sweetfruits) // output:["apple", "banana", "orange", "leechi", "grapes"]


// Example.2
const mouse = ['dell', 'lenavo', 'zebronics', 'intex']
const store1 = mouse.spice(1, 3)
console.log(store1);   // output:- ['lenavo', 'zebronics']
console.log(mouse);    // output:- ['dell', 'lenavo', 'zebronics', 'intex']

//! (8) splice() => splice(startIndex, delCount, newElm1, newElm2...), will modify original Array list // 
// Example.1
const num = [88, 33, 55, 37, 21, 35];
num.splice(2, 2, 101, 'ThankYou', 7)
// num.splice(2, 0, 101)
// num.splice(3, 1)
// num.splice(4);
console.log(num); // output:[88, 33, 101, 'ThankYou', 7, 21, 35] (will Modify the original Array)

// Example.2 
const num1 = [11, 22, 33, 44]
num1.splice(2, 0, 99)
console.log('num1 =', num1); // output: [11, 22, 99, 33, 44]

// Example.3 
const foodItems = ['milk', 'butter', 'ghee', 'paneer']
foodItems.splice(3, 1)
console.log('foodItems =', foodItems);   // output: ['milk', 'butter', 'ghee']

// Example.4
const laptopBrand = ['acer', 'msi', 'asus', 'lenavo']
let ans = laptopBrand.splice(3)

console.log('deleteditem =', ans);  // output: lenavo
console.log('laptopBrand =', laptopBrand); // output: ['acer', 'msi', 'asus']


//! Example.5 (imp)
const days = ['MonDay', 'TuesDay', 'WednesDay', 'ThrusDay', 'FriDay', 'SaturDay', 'SunDay']
const results = days.splice(2, 3, 'Weekend', 7)
console.log('deleted Day =', results);  // output: ['WednesDay', 'ThrusDay', 'FriDay']

console.log(days);  // output: [ 'MonDay', 'TuesDay', 'Weekend', 7, 'SaturDay', 'SunDay' ]


//! (9) sort() => arrange in ascending order (modify original Array)
// Example.1
let game = ["chess", "ludo", "vollyboll", "cricket", "hockey"];
console.log(game.sort());  // output: [ 'chess', 'cricket', 'hockey', 'ludo', 'vollyboll' ]

// Example.2
const fastFoods = ['Burger', 'Samosha', 'Chole Bhature', 'Pizza']
fastFoods.sort()
console.log(fastFoods);  // output: ['Burger', 'Chole Bhature', 'Pizza', 'Samosha']     

// Exmaple.3
const n = [10100, 1, 8888, 35, "Ram", "Ankit"]; // numerical order pahle 1 aaega phir 2 ...
console.log(n.sort());   // output:  [1, 10100, 35, 8888, 'Ankit', 'Ram']

// Example.4 
const mark = [766, 505, 504, 101, 102, 111]
const savekrloo = mark.sort()
console.log('savekrloo =', savekrloo);   // output: savekrloo = [ 101, 102, 111, 504, 505, 766 ]

console.log('mark =', mark); // output: mark = [ 101, 102, 111, 504, 505, 766 ]


//! (10) reverse() => reverse the elements in the Array. Will also modify the original Array list.
// Example.1
const numbers = [7, 3, 33, 76, 2];
console.log(numbers.reverse());  // output: [ 2, 76, 33, 3, 7 ]

// Example.2
const naam = ["ravi", "vikash", "shyam"];
console.log(naam.reverse());  // output: [ 'shyam', 'vikash', 'ravi' ]

// Example.3
const random =  ['ram', 44, 'mouse', 2024]
const finalResult = random.reverse()
console.log(finalResult);   // output: [ 2024, 'mouse', 44, 'ram' ]

console.log(random);    // output: [ 2024, 'mouse', 44, 'ram' ] (modify the original Array)



//! (11) indexOf() => find position
const number = [5, 7, 11, 3, 99]
console.log(num);

console.log(number.indexOf(11));
console.log(number.indexOf(119));  // if not presented in Array list it will gives output => -1  


//! (12) includes()  => true /false
console.log(number.includes(99));
console.log(number.includes(929));





