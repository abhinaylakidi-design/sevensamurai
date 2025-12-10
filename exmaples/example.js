// let rev=0;
// let num=1234;
// while(num!=0){
//     let digit=num%10;
//     rev=rev*10+digit;
//     num=Math.floor(num/10);}
// console.log("The reverse of the number is:" + rev); 

let rev=0;
let num=1234;
while(num!=0){
    let digit=num%10;
    rev=rev+digit;
    num=Math.floor(num/10);}
console.log("The reverse of the number is:" + rev); 


// which is greater among three numbers


let a=15;
let b=20;
let c=10;
if (a>=b && a>=c){
    console.log(a + "is  a greatest number")
}
else if (b>=a && b>=c){
    console.log(b + "is a greatest number")
}
else{
    
    console.log(c + "is the greatest number")
}

// find the sum of all even numbers betweem 1 and 100

let sum=0;
for (let i=1;i<=100;i++){
    if (i%2==0){
        sum=sum+i;
    }   }
console.log("The sum of all even numbers between 1 and 100 is:" + sum);

// print all number divisible by 7 between 1 and 100

for (let i=1;i<=100;i++){
    if (i%7==0){
        console.log(i);
    }}

for (let j=1;j<=30;j++){
    if (j%3==0){
        console.log(j);
    }
}

// count how many digits are there in a number

let number=123456;
let count=0;
while (number!=0){
    number=Math.floor(number/10);
    count++;
}
console.log("The number of digits in the given number is:" + count);


// print all the characters in a string one by one using a loop

let str="Hello, World!";
for (let i=0;i<str.length;i++){
    console.log(str[i]);
}

let strings="JavaScript is fun!";
for (let i=0;i<strings.length;i++){
    console.log(strings[i]);
}

