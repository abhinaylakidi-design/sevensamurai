// implicit conversions
let a = "5";
let b = 10;

console.log(a+b); // "510" (string concatenation)
console.log(10+"20"); // "1020" (string concatenation)
console.log("20"-b); // "10"
console.log(a*b); // "50"
console.log("");   //false
console.log(1+true) //2

//explicit conversions

Number("10"+5) //15
console.log(Number)

String(105);
console.log(string); //"105"

Boolean("") // False
Boolean(1) // True
Boolean('hello') // True
Boolean(1+true) // True

console.log(Boolean)