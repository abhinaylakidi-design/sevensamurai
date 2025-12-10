// keys for variables 

//declaration (which is used to declare a variable)
// initialization(which is used to assign a value to a variable)
//redeclaration(which is used to declare a variable again)
//reinitialization(which is used to assign a new value to a variable)



// variables in javascript 

// variables are containers to store data values

// we can create a variable using var, let or const keywords

// types of variables in JavaScript

// 1. var
// 2. let
// 3. const

// 1. var
var username = "Abhinay";  // declaration and initialization
console.log(username);  // output: Abhinay

var username = "yash";  // redeclaration and reinitialization
console.log(username);  // output: yash

// var variables can be redeclared and reinitialized

// 2. let
let userage = 22;  // declaration and initialization
console.log(userage);  // output: 22        
userage = 23;  // reinitialization
console.log(userage);  // output: 23    

// let variables can be reinitialized but cannot be redeclared

// 3. const
const usercountry = "India";  // declaration and initialization
console.log(usercountry);  // output: India
//usercountry = "USA";  // reinitialization (will throw an error)
//console.log(usercountry);  // output: error
// const variables cannot be redeclared or reinitialized

// Summary:
// var - can be redeclared and reinitialized
// let - can be reinitialized but cannot be redeclared
// const - cannot be redeclared or reinitialized