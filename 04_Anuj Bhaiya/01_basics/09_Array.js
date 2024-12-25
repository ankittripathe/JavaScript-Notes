// Example.1
const words = ["Apple", "Banana", "Cherry", 13, true];
console.log(words);
console.log(words[0]);
console.log(words[1]);
console.log(words[2]);
console.log(words[5]);

// Example.2
const sample = [
  "Apple",
  "Banana",
  "Cherry",
  13,
  true,
  {
    name: "Ankit",
  },
  function Hello() {
    console.log("Hello jee");
  },
];
console.log(sample);
console.log(sample[5]);
console.log(sample[6]);
console.log(sample.length);

// Example.3
const Example = [
  "Apple",
  "Cherry",
  13,
  true,
  {
    name: "Ankit",
  },
];
console.log(Example);

// updating value
Example[4] = "Lovely";
console.log(Example);
