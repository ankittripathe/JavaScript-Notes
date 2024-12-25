// Ques.1 For a given array with marks of students => [5, 7, 4, 7, 6]
// Find the average marks of the entire class

let marks = [3, 7, 4, 7, 6]

let sum = 0;
for(let val of marks){
    // sum = sum + val
    sum += val
}
console.log(sum);

let avg = sum /marks.length
console.log(`Avg marks of the class = ${avg}`); 

// Ques.2 For a given array with prices of 5 items => [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price After applying offer.

let items = [250, 645, 300, 900, 50]

for(let i = 0; i < items.length; i++){
    let offer = items[i] / 10;
    items[i] = items[i] - offer;
    // console.log(items[i]);
}
console.log(items);


// for of loop method  se solution
let i = 0
for( let val of items){
   let offer = val /10;
   items[i] = items[i]- offer;
   console.log(items[i]);
   i++
}
console.log(items);
