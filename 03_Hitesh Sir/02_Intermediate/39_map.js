// Exampl.1  
const map = new Map() 
map.set('IN', "India")
map.set('IN', "India")        // map me unique entry print hota hai repeated ko Ek barr hi print krega.
map.set('UK', "United Kingdom")
map.set('USA', "United State of America")

// console.log(typeof map);
// console.log(map);      
// console.log(map.get('IN'));      // India
// console.log(map.get('NEP'));     // undefined


// for of laga ke 
for (const key  of map) {
    // console.log(key);                
}

// for of key aur value ke sath
for (const [key, val] of map) {
    console.log(`${key} : ${val}`);
}


//Example.2
const map1 = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

// console.log(map1.get('a'));

map1.set('a', 97);          // changing the value 
// console.log(map1.get('a'));

// console.log(map1.size);
// Expected output: 3

map1.delete('b');
// console.log(map1.size);


// Example.3  
const myObject = {
    'game1' : 'Cricket',
    'game2' : 'Chess',
    'game3' : 'Ludo'
}

// for (const [key , value] of myObject) {
//     console.log(key, ':', value);
// }

// Notes: Example.3 Object are not iterable => through error.

/************************************************************************* */
// Example.1
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNum.map((num) => { return num + 10 })
console.log(newNums);


// Example.2 (channing wala jisme 2-3 method ek sath laga skte hai.)
const array = [2, 4, 6, 8, 10]
const result = array.map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num >= 40)           // Ek Ek kr ke dekhenge tab samaj aaega.
                    .filter((num) => num >= 80)
                    .reduce((acVal, curVal) => acVal + curVal)
 console.log(result);
//  array.map().map().filter() =>(channing wala jisme 2-3 method ek sath laga skte hai.)
 