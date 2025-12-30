// String Methods
// In JavaScript, strings come with a variety of built-in methods that allow you to manipulate and interact with string data.
//  Here are some commonly used string methods:

let str = "Hello, World!";

// 1. length: Returns the length of the string.
console.log(str.length); // Output: 13

// 2. toUpperCase(): Converts the string to uppercase.
console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"
  
// 3. toLowerCase(): Converts the string to lowercase.
console.log(str.toLowerCase()); // Output: "hello, world!"

// 4. indexOf(): Returns the index of the first occurrence of a specified value in a string.
console.log(str.indexOf("World")); // Output: 7

// 5. slice(): Extracts a section of a string and returns it as a new string.
console.log(str.slice(0, 5)); // Output: "Hello"

// 6. replace(): Replaces a specified value with another value in a string.
console.log(str.replace("World", "JavaScript")); // Output: "Hello, JavaScript!"

// 7. split(): Splits a string into an array of substrings based on a specified separator.
console.log(str.split(", ")); // Output: ["Hello", "World!"]

// 8. trim(): Removes whitespace from both ends of a string.
let strWithSpaces = "   Hello, World!   ";
console.log(strWithSpaces.trim()); // Output: "Hello, World!"

