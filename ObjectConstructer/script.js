/*
An object constructor is a special function used to create multiple objects with the same structure and properties.
Instead of writing the same object again and again, we use a constructor to reuse code.


Why use Object Constructors?

To create multiple similar objects
To improve code reusability
To organize data in a structured way
Commonly used in real-world applications (users, products, employees)

Important Points to Remember

✔ Constructor name starts with Capital letter (convention)
✔ Always use new keyword
✔ this refers to the current object
✔ Constructors are widely used in OOP


*/

// function Student(name,age,course){
//     this.name = name;
//     this.age = age;
//     this.course = course;
// }
// let student1= new Student("abhi",22,"Python")
// let student2= new Student("ajay",28,"Python")
// let student3= new Student("Yash",24,"Java")

// console.log(student1)
// console.log(student2)
// console.log(student3)

// let users = {
//     name:"Abhinay",
//     marks:"27"
// }

// if (users.marks >=35){
// console.log("student is pass")
// }else{
//     console.log("student is fail")
// }


function User(name,marks){
    this.name = name,
    this.marks =marks,
    this.getresult=function(){
        return this.marks>35 ? "pass 'A-Grade'" :"Fail 'E-Grade'"
    }
}

let user1 = new User("abhi",77)
let user2 = new User("ajay",27)
let user3 = new User("yash",97)

console.log(user1.getresult())
console.log(user2.getresult())
console.log(`${user1.name} is ${user1.getresult()} `)


console.log(Object.keys(user1))
console.log(Object.values(user1))
console.log(Object.entries(user1))