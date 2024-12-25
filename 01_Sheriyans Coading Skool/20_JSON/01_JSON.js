/* JSON (JavaScrits Objects Notation):
(1) JSON.stringify() :- converts a JavaScript object into a JSON-formatted string.
(2) JSON.parse():- convert a JSON string into javascript object.

JSON:- Key aur value dono string me hota hai
let course = {
    "name": "hitesh",
    "cousername": "Javascripts",
    "price": "Free"
    }
JSON string (dono taraf double/single quotes me hoga object)
*/

// Example.1
const obj = {
  name: "John",
  age: 30,
};
console.log(obj);          // output:- { name:'John' age: 30}
console.log(typeof obj);   // output:- object

// (1) Stringifying JSON:- convert (javaScript object to JSON string)
const changeInStr = JSON.stringify(obj);
console.log(changeInStr);         // output: '{"name":"John","age":30}'
console.log(typeof changeInStr);  // output: string

// (2) Parsing JSON:- convert (JSON string to javaScript object)
const details = '{"name": "John", "age": 30}';
const changeInObj = JSON.parse(details);  // JSON string ko javaScript object me change krne ka tarika.

console.log(changeInObj);         // output:- { name:'John', age:30 }
console.log(typeof changeInObj);  // output:- object
console.log(changeInObj.name);   // output:- john
console.log(changeInObj.age);   // output:- 30

// Example.2
let course = {
    'name': 'TypeScript',
    'Instructor': 'Harsh',
    'Price': 'Free'
}
console.log(course); 
console.log(typeof course);

// Json to String
const convertedInStr = JSON.stringify(course)
console.log(convertedInStr);
console.log(typeof convertedInStr);

// string to JSON
const convertedInobj = JSON.parse(convertedInStr)
console.log(convertedInobj);
console.log(convertedInobj.name);
console.log(convertedInobj.Instructor);
console.log(convertedInobj.Price);
console.log(typeof convertedInobj);












