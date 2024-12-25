const user = {
    // properties
    name: "Ankit",
    age: 24,

    /* object ke ander function define hai toh usko method bolte hai.
       Method ka color baki ke color se change rhta hai.*/
       
    greet: function () {
      return `Hello, my name is ${this.name}`;
    },

    // Method-2 (another way of creating method)
    myAge(){
        return `My age is ${this.age}`
    }
  };
  console.log(user.name);    // output:- Ankit
  console.log(user.greet()); // output: Hello, my name is Ankit.
  console.log(user.myAge()); // output: My age is 24