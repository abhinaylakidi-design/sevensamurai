// datatypes in JavaScript

// 1. Primitive Data Types

// a. Number
let userage = 22;
console.log(typeof userage);   // output: number

// b. String
let username = "Abhinay";       
console.log(typeof username);  // output: string

// c. Boolean
let usersingnedin = true;
console.log(typeof usersignedin);  // output: boolean 

// d. Undefined
let usercountry;
console.log(typeof usercountry);    // output: undefined

// e. Null
let usercity = null;
console.log(typeof usercity);   // output: Null

// 2. Non-Primitive Data Types

// a. Array

let userdetails = ["Abhinay", 22, true, "India"];
console.log(userdetails[0]);
console.log(typeof userdetails);

// b. Object

let userprofile = {
  name: "Abhinay",
  age: 22,
  signedin: true,
  country: "India"
};
console.log(userprofile.name)
console.log(typeof userprofile)

// c.Array of Objects

let users = [
  { name: "Abhinay", age: 22 },
  { name: "John", age: 25 },
  { name: "Doe", age: 30 }
];

console.log(typeof users)
console.log(users[1])
console.log(users[2].age)

console.log(users[0].name + " age is " + users[0].age)
console.log(`My name is ${users[0].name} and iam ${users[0].age} years old.`)
