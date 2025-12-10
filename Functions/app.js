// Functions in  javascript

// function Declarition

function greetuser(){
    console.log(`this is function Declarition`)
}

    greetuser();
    greetuser();
    greetuser();


// Function With parameters

function greetparameters(name,age){
    console.log(`My Name is ${name} and iam ${age}`)
}

    greetparameters("Abhinay","22")
    greetparameters("Abhinay")

// Function with Default parameters

function greetdefaultparameters(name="Guest",day="Morning"){
    console.log(`welcome ${name} good${day}`)
}
    greetdefaultparameters();
    greetdefaultparameters("Abhi")

// Function with return keyword

function sum(a,b){
    return a+b;
}
    let result = sum(7,7);
    console.log(`the sum is ${result}`)