// String Methods
// Example.1
let str = "javascripts"  // will not modify original string
console.log(str);        // output: javaScripts


// (1) toUpperCase()
let newStr = str.toUpperCase()
console.log(newStr);     // output: JAVASCRIPTS

console.log(str.toLocaleUpperCase());  // output: JAVASCRIPTS (yaha direct console me hi kr diya gaya hai)

console.log(str);  // output: javascripts (will not modify the original string)


// (2) toLowerCase()
let newStr2 = str.toLowerCase()
console.log(newStr2);  // output: javasciripts


// (3) trim()
let name = "   Ankit    tripathi  " // starting aur ending me trim kr dega white space 
console.log(name.trim());          // output: Ankit  tripathi

console.log(name.trimStart());   // output: Ankit  tripathi
console.log(name.trimEnd());     // output:   Ankit  tripathi


// (4) slice()  
let alphabet = 'abcdefgh'           // index ki counting zero se hota hai 

console.log(alphabet.slice(1, 4));  // output: bcd   (counting 1 se hoga but 4 wala include nhi hoga)
console.log(alphabet.slice(1));     // output: bcdefgh (1 se start hoga aur last tak print krega) 


// (5) concat() => Additing two or more variable
// Method-1
let string1 = "Anpa "
let string2 = "College"

let save = string1 + string2  
console.log(save);  // output: Apna College

let result = 'Learning javaScript from ' +  string1 + string2
console.log(result);  // output: Learning javaScripts from Apna College

// Method-2
const course1 = 'JavaScripts'
const course2 = 'Reactjs'

const final = course1.concat(" ", course2)  // best approach
console.log(final);   // output: JavaScripts ReactJs


// (6) replace()
// Example.1
let Greeting = "Good Morning"
console.log(Greeting.replace("Good Morning", "NamaSate!")); // output: Namaste!


// Exmaple.2
let wish = "Hellolo"
console.log(wish.replace("lo","p"));  // output: Helplo (first wala lo bas hoga)


// (7) replaceAll()
let kuchVi = 'helololo'
console.log(kuchVi.replaceAll('lo','p'));  // output: helppp  (har barr replace ho jaega )

// (8) charAt()
let lang = "javaScripts"
console.log(lang.charAt(3));   // output: a
console.log(lang.charAt(9));   // output: t
console.log(lang.charAt(11));  // output: index me exist nhi krta toh khali space print hoga

// (9) includes() => list me hai ya nhi 
// Example.1
let langs = "javaScripts"
console.log(langs.includes("a"));  // output: true 
console.log(langs.includes("l"));  // output: false
console.log(langs.includes(""));   // output: true  (this is empty string so it give true) 
console.log(langs.includes());     // output: false (string vi nhi hai E that's why false)

// Example.2
let para = 'My name is Ankit'
console.log(para.includes('Ankit'));  // output: true


