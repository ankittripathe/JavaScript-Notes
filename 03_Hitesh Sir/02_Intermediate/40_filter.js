//Example.1
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNum = myNum.filter((check) => {
//     return check > 5;
// }) 
// console.log(newNum);

let newNum = myNum.filter((check) => check > 5)   // implicit arrow function me return nhi krna padta hai
console.log(newNum);
 

// forEach method se (2nd Method se )
 const newNums = []

 myNum.forEach((num) => {
    if (num > 5){
        newNums.push(num)
    }
 })
 console.log(newNums);


 // Example.2
 const books = [
    {title: 'Book 1', genre: 'History',  publish: 2006, edition: 1999},
    {title: 'Book 2', genre: 'Science',  publish: 1992, edition: 1987},
    {title: 'Book 3', genre: 'Computer', publish: 1999, edition: 2003},
    {title: 'Book 4', genre: 'Friction', publish: 1989, edition: 2001},
    {title: 'Book 5', genre: 'Science',  publish: 2009, edition: 2004},
    {title: 'Book 6', genre: 'Love',     publish: 1987, edition: 2012},
    {title: 'Book 7', genre: 'History',  publish: 2011, edition: 2016},
    {title: 'Book 8', genre: 'History',  publish: 1988, edition: 2000},
 ]

 let userBooks = books.filter((bk) => bk.genre === 'History')

 userBooks = books.filter((bk) => {
    return bk.publish >= 2003 && bk.genre === 'History'
} )
 console.log(userBooks);

  
//  Example.3
let name = [11, 1, 4, 6, 7, 99, 32, 11]


let result = name.filter((items)=> {           // find even number
   return items% 2 === 0
})
console.log(result);


let ans = name.filter((items)=> items % 2 ==! 0)    // find odd number
console.log(ans);
