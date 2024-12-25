// ! Pratice Question //

//TODO: (1) User se mango Ek number & agar number 10 se jaada ho to Hello print karo nhi to Namaste Print kro.

// var num = prompt('Enter the Number')

// if(num > 10){
//     console.log('Hello');
// } else{
//     console.log('Namaste');
// }

//TODO: (2) User se number mango and usmein 10 add kardo agar wo 10 add karne par 20 se jaada ho jaaye toh bolna Hello nhi to Bolna Namaste.


// let num = prompt("Enter the number");
// //? Prompt se kuch vi lene par hamesha apko Ek string hi milega. Aap kuch vi input karaaye prompt usee string bana dega.

// newnum = Number(num) + 10;  //? String ko number me convert kiya gaya hai.

// if (newnum > 20) {
//   console.log("hello");
// } else {
//   console.log("Namaste");
// }


// TODO: (3) User se number mango 2 baar and dono ko add karo and agar dusra number ki aadkhir digit us added number se chooti hai toh print kroo Sucess nhi to fail.

// var num1 = prompt('Enter number1');
// num1 = Number(num1);    // string ko number me convert

// var num2 = prompt('Enter number2');
// num2 = Number(num2);    // string ko number me convert

// var addedNum = num1 + num2

// if(addedNum >num2%10){
//     console.log('Sucess');
// } else{
//     console.log('fail');
// }


//TODO: (4) User se do Password mango agar match kr jaye toh login kro nhi toh mana kro.

// let pass1 = prompt('Enter pass1')
// let pass2 = prompt('Enter pass2')

// if(pass1 === pass2){
//     console.log('login allowed');
// } else{
//     console.log('login not allowed');
// }


//TODO: (5) Find out odd & even number.

// let num = prompt('Enter the number:')
// num = Number(num)

// if(num%2 === 0){
//     console.log('Even number');
// } else{
//     console.log('Odd number');
// }



//TODO: (6) if else 

var num = prompt('Enter the number')
num = Number(num)

if(num > 80){
    console.log('Grade A');
} else if(num > 60){
    console.log('Grade B');
} else if (num > 40) {
    console.log('Grade C');
} else {
    console.log('Try to improve your Grade');
}