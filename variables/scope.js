// Scope in JavaScript
// Scope determines the accessibility of variables

// Types of Scope:
// 1. Global Scope
// 2. Local Scope (Function Scope and Block Scope)


// 1. Global Scope
// Variables declared outside any function or block have global scope
// They can be accessed from anywhere in the code

var scope = "i am global scope"

function greet(scope) {
    console.log('hi '+ scope)
    
}
greet(scope)

let abhi = "this is john"

function greet(abhi) {
    console.log("hello " + abhi)
    
}
greet(abhi)

const a =100
function greet(a) {
    console.log(`john you got ${a} marks`)
}
greet(a)

// 2. Local Scope or Functional Scope
// Variables declared within a function have local scope
// They can only be accessed within that function

function student() {
    const studentname = "Abhinay"
    console.log('studentname: '+studentname)
    let age="22"
    console.log("studentage: "+age)
    var branch= "ECE"
    console.log('Branch: '+branch)
}
student()

// console.log(studentname) // Error: studentname is not defined
// console.log(age) // Error: age is not defined
// console.log(branch) // Error: branch is not defined

// 3. Block Scope
// Variables declared within a block (enclosed by {}) have block scope
// They can only be accessed within that block

{
    let city = "New York"
    console.log('City: '+city)
    const country = "USA"
    console.log('Country: '+country)
    var continent = "North America"
    console.log('Continent: '+continent)
}

// console.log(city) // Error: city is not defined
// console.log(country) // Error: country is not defined
// console.log(continent) // Output: North America (var is not block-scoped)