// Example.1
let a = 33
console.log(typeof a);     // output: number
console.log(typeof (a))    // output: number


// Example.2
let b  = '33'
console.log(typeof b);     // output: string


// Example.3
let c =  '33abc'
console.log(typeof c);     // output: string


// Example.4
let d = 'abc33'
console.log(typeof d);     // output: string


/* Data types converion */
// Example.1
let score = "33"
console.log('type =', typeof score);           // output: string


//! (conversion in number)
let valInNumber = Number(score);
console.log(typeof valInNumber);               // output: number
console.log('valInNum =', valInNumber);        // output: 33

//! (conversion in boolean)
let valInBoolean = Boolean(score)
console.log(typeof valInBoolean);             // output: boolean
console.log('valInboolean =', valInBoolean);  // output: true


// Example.2 
let scorecard = '33abc'
console.log(typeof scorecard);              // output: string

//! (conversion in number)
let valInNum = Number(scorecard);
console.log(typeof valInNum);            // output: number
console.log('valInNum =', valInNum);     // output: NaN

//! (conversion in boolean)
let valInBoole = Boolean(scorecard)
console.log(typeof valInBoole);        // output: boolean
console.log(valInBoole);               // output: true


// Example.3
let demo = ''
console.log(typeof demo);              // output: string

//! (conversion in number)
let valueInNum = Number(demo);
console.log(typeof valueInNum);        // output: number
console.log(valueInNum);               // output: 0

//! (conversion in boolean)
let inBoolean = Boolean(demo)          
console.log(typeof inBoolean);      // output: boolean
console.log(inBoolean);             // output: false


//! E sara Value  score ke jagah rakhenge toh output => yahi dega 
//*Example*  *In Number*   *In Boolean*
// "33"        => 33        => true
// "33abc"     => NaN       => true
// "Ankit"     => NaN       => true      
// true        => 1
// false       => 0
// null        => 0         => false
// ''          => 0         => false              
// undefined   => NaN       => false


/**********************************************************/
// Example.4
let isLoggedIn = "Ankit"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);          // output: true


// Example.5 
let LoggedIn = ""
let booleanIsLogged = Boolean(LoggedIn)
// console.log(booleanIsLogged);           // output: false


// Example.6
let Logged = null
let booleanLogged = Boolean(Logged)
// console.log(booleanLogged);            // output: false


// Example.7
let Log = undefined
let bLogged = Boolean(Log)
// console.log(bLogged);                // output: false



/* when converted it into Boolean  */
// 1 => true 
// 0 => false
// "Ankit" => true
// "" => false
// null => false
// undefined => false


/****************************************************************** */
// Example.8
let someNumber = 22

let stringNumber = String(someNumber)
console.log(stringNumber);               // output: '22'
console.log(typeof stringNumber);        // output: string


// Example.9
let someNum = true

let stringNum = String(someNum)
console.log(stringNum);             // output: 'true' 
console.log(typeof stringNum);      // output: string



// Example.10
let SomeVal = false

let strNum = String(SomeVal)
console.log(strNum);              // output: 'false'
console.log(typeof strNum);       // output: string


// Example.11
let SomeVal2 = undefined

let strNum2 = String(SomeVal2)
console.log(strNum2);            // output: 'undefined'
console.log(typeof strNum2);     // output: string