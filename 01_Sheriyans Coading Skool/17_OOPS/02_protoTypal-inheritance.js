/* 
   (1) We can set prototype using:-   __proto__
   (2) Jis object ke properties & method  ko hum use krna chahte hai unko ham dusri ka prototype set krdenge
   (3) prototype apne aap me Ek object hai 
*/

//! Example.1
const employee = {
  company: "service-based",
  address: "noida",

  taxRate() {
    return "tax rate is 10%";
  },
};
// console.log(employee);
// console.log(employee.taxRate());

// employee-1
const userAnkit = {
  name: "Ankit",
  profile: "developer",
  salary: 50000,
};
// console.log(userAnkit);

// employee-2
const userSam = {
  profile: "tester",
  salary: 40000,
};
// console.log(userSam);

// we can set prototype:- currObj.__proto__ = oldObj (whose function & properties is going to use)
// Object ka refernec pass ho jaega dusre wale me
userAnkit.__proto__ = employee;
userSam.__proto__ = employee;

// console.log(userAnkit);
// console.log(userAnkit.taxRate());

// console.log(userSam);
// console.log(userSam.taxRate());
// console.log(userSam.profile);

//! Example.2
const worker = {
  taxRate() {
    return "tax rate of worker is 10%";
  },

  company: "E-commerce",
};

const skilledEmployee = {
  salary: 50000,
  taxRate() {
    return "tax rate of skilledEmployee is 20%";
  },
};

skilledEmployee.__proto__ = worker;

// console.log(skilledEmployee);
// console.log(skilledEmployee.salary);
// console.log(skilledEmployee.taxRate());
// console.log(skilledEmployee.company);

/* Notes:-
    -->  If object & prototype have same method, object's method will be used.
    -->  Apne object me same method present hai aur prototype ka vi use kiya gaya hai. then first priority will be given to object method.
*/

//! Example.3
const user = {
  name: "Ankit",
  email: "ankit@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};


//! Modern Syntax ( TeachingSupport me teacher ka prototype set kr diya.)
Object.setPrototypeOf(TeachingSupport, user); 
console.log(TeachingSupport.name); // output:- Ankit
console.log(TeachingSupport.email); // output:- Ankit
