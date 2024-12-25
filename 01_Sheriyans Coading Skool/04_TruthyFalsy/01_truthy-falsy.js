/*
 Truthy & Falsy value
 (1) truthy aur falsy => true aur false se alag hai
 (2) JavaScript mein kuch vi likho maily do prakaar mein se kisi ek prakaar ko belong karegi => truthy ya falsy

 ?(3) falsy value are => false, -false,  0, -0, '',  undefined , null, NaN, document.all
  => Enko convert krenge tab hamesha false aaega. Eske alawa sari value truthy hai.

 ?(4) truthy value are => true, - true, 1, -1, "Ankit", " ", etc
*/

//! Truthy value
// Example.1
if (true) {
  console.log("true = truthy value");
} else {
  console.log("true = falsy value");
}
// output: true = truthy value


// Example.2
if (-true) {
  console.log("-true = truthy value");
} else {
  console.log("-true = falsy value");
}
// output: -true = truthy value


// Example.3
if (7) {
  console.log("7 = truthy value");
} else {
  console.log("7 = falsy value");
}
// output: 7 = truthy value


// Example.4
if (-7) {
  console.log("-7 = truthy value");
} else {
  console.log("-7 = falsy value");
}
// output: -7 = truthy value


// Example.5
if ("Ankit") {
  console.log(`Ankit = truthy`);
} else {
  console.log(`" Ankit" = falsy`);
}
// output: "Ankit" = truthy value


// Example.6
if (" ") {
  console.log(`" " = truthy`);
} else {
  console.log(`" " = falsy`);
}
// output: " " = truthy value


//! Falsy value
// Example.1
if (false) {
  console.log("false = truthy value");
} else {
  console.log("false = falsy value");
}
// output: false = falsy value

// Example.2
if (-false) {
  console.log("-false = truthy value");
} else {
  console.log("-false = falsy value");
}
// output: -false = falsy value


// Example.3
if (0) {
  console.log("0 = truthy value");
} else {
  console.log("0 = falsy value");
}
// output: 0 = falsy value


// Example.4
if (-0) {
  console.log("-0 = truthy value");
} else {
  console.log("-0 = falsy value");
}
// output: -0 = falsy value


// Example.5
if (null) {
  console.log("null = truthy value");
} else {
  console.log("null = falsy value");
}
// output: false = falsy value


// Example.6
if (NaN) {
  console.log("NaN = truthy value");
} else {
  console.log("NaN = falsy value");
}
// output: NaN = falsy value


// Example.7
if (undefined) {
  console.log("undefined = truthy value");
} else {
  console.log("undefined = falsy value");
}
// output: undefined = falsy value


// Exmaple.8
if ("") {
  console.log(`"" = truthy value`);
} else {
  console.log(`"" = falsy value`);
}
// output: "" = falsy value
