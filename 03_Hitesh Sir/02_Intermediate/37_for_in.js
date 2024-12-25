//! for-in loop => (object & Array) ke liye


//! for-in loop (object ke liye)
// Example.1
let myObject = {
    js: 'javaScripts',
    cpp: 'C++',
    'rb': 'ruby',
    py: 'python'
};

// how to acess key
for (const key in myObject) {
      console.log('key =', key);                // key aise nikalte hai object ka
};

// how to acess value
for (const key in myObject) {
    console.log('value =', myObject[key]);      // value aaise nikalte hai object ka
};


// Exmaple.2
let  student = {
    name: "ankit",
    age:24,
    cgpa:7.9,
    isPass: true
};

// how to acess both key & value  
for(let key in student){
    console.log(`key: ${key}, value: ${student[key]}`);
};


// Example.3
let portfolio = {
    name: "aadhya ",
    age: 29,
    cgpa: 8.9
};

for(let key in portfolio){
    // console.log('key =',key, 'value =',portfolio[key]);
    console.log(`key = ${key} value = ${portfolio[key]}`);
}


//! for-in-loop (Array ke liye)
// Example.1
let fruits = ['mango', 'leechi','papaya']
for (const key in fruits) {
    console.log(key);                    // how to access key (for-in-loop Array ke liye)
}

// Example.2
let statrup = ['blinkit', 'Zepto', 'Zomato']
for (const key in statrup) {
    console.log(statrup[key]);          // how to access value (for-in-loop Array ke liye)
}


// Example.3
const programming = ['js', 'kotlin', 'java', 'go-lang']
for (const key in programming) {
    console.log(`index: ${key}  value ${programming[key]}`);
}



//! for-in-loop (string ke liye)
// Example.1
let name = 'Ektuuu'
for (const key in name){
     console.log('key =', key);                   // shift key matalb index pata chalega.
     console.log(name[key]);                      // shirf value dega.
    //  console.log(`key = ${key} & value = ${name[key]}`);
}
 
//Example.2 
let bestFriends = 'avinash'
for (const key in bestFriends) {
    console.log(`index = ${key}`, `value = ${bestFriends[key]}`);  // key aur value 
}