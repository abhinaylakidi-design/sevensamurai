// Operators in JavaScript
// Operators are special symbols that perform operations on operands (values and variables).
// They can be categorized into several types:

// 1. Arithmetic Operators (+ - * / % )
let num1 = 10;
let num2 = 3;

console.log("Addition:" + (num1 + num2));        // 13
console.log("Subtraction:" + (num1 - num2));     // 7
console.log("Multiplication:" + (num1 * num2)); // 30       
console.log("Division:" + (num1 / num2));       // 3.3333
console.log("Modulus:" + (num1 % num2));        // 1

// 2. Assignment Operators (= += -= *= /= %= )

let num3 = 5;

console.log(num3+=5);  // 10
console.log(num3-=5);  // 5
console.log(num3*=5);  // 25
console.log(num3/=5);  // 5
console.log(num3%=5);  // 0

// 3. Comparison Operators (== === != !== > < >= <= )

const a = 10;
const b = "10";

console.log(a == b);   // true (value comparison)
console.log(a === b);  // false (value and type comparison)
console.log(a != b);  // false (value comparison)
console.log(a !== b); // true (value and type comparison)
console.log(a > 5);    // true
console.log(a < 15);   // true
console.log(a >= 10);  // true
console.log(a <= 5);   // false 

// 4. Logical Operators (&& || !)

const  num5= true;  
const   num6= false;

// A        B      A && B    A || B    !A
// true    false     false     true     false
// true    true      true     true     false
// false   true      false     true     true
// false   false     false     false    true

