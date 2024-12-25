// Example.1
const myNum = [1, 2, 3, 4];

const total = myNum.reduce(function (accumulator, currentval) {
  console.log(`acc: ${accumulator} & currval: ${currentval}`);
  return accumulator + currentval;
}, 0);
// pahla accumulator 0 rheaga aur currentValue 1 agar yaha 0 denge toh. Agar 0 nhi denge toh accumulator 1 hoga aur currentValue 2 hoga.
console.log(total);
// output:- 10

//! Using Arrow function
// const total = myNum.reduce((accumulator, currentval) => accumulator + currentval, 0)
// console.log(total);

// Example.2
const shoppingCart = [
  {
    itemName: "JavaScripts",
    price: 1000,
  },

  {
    itemName: "React",
    price: 2000,
  },

  {
    itemName: "Web-Devlopment",
    price: 3000,
  },
];

const priceToPay = shoppingCart.reduce((accu, item) => accu + item.price, 0);
console.log(priceToPay);
// output:- 6000

// Example.3
let array = [10, 20, 30, 40];

const result = array.reduce((accVal, currVal) => {
  return accVal + currVal;
});
console.log(result);
// output:- 100

// Example.4
const totalPrice = [
  { course: "kotlin", price: 500 },
  { course: "Java", price: 1000 },
  { course: "nextjs", price: 2000 },
];

const final = totalPrice.reduce((accumulator, items) => {
  return accumulator + items.price;
}, 0);
console.log(final);
// output:- 3500
