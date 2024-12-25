// Ques.1
const product = {
    title: 'Pen',
    rating: 4,
    offer: 5,
    price: 240,
};
console.log(product);               // output:- { title: 'Pen', rating: 4, offer: 5, price: 240 }
console.log(typeof product);        // output:- object
console.log(typeof product.rating); // output:- number


// Ques.2 
const profile = {
    userName: '@ankit',
    followers: 700,
    following: 300,
    isFollow: false,
}
console.log(profile);
// output:- { userName: '@ankit', followers: 700, following: 300, isFollow: false }  

// Acessing the value of existing object
console.log(profile['followers']);  // output:- 700
console.log(profile.followers);     // output:- 700

console.log(typeof profile);            // output:- object

console.log(typeof profile['userName']) // output:- string
console.log(typeof profile.userName);   // output:- string

console.log(typeof profile.isFollow);  // output:- boolean



