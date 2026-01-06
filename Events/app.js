/*
Events:
Events are actions or occurrences that happen in a web page,
usually caused by a user or the browser, and JavaScript can respond to those actions.

Why do we use events:
1.To make web pages attractive.
2.form handling
3.Dynamic content updates

ways to apply events:
1. Inline Event Handlers
     Directlt inside the HTML element using the "on" attribute.
     synatx: <element onEvent="JavaScript code">

     advantages:
        1. Simple to implement for small tasks.
        disadvantages:
        1. Mixes HTML and JS, making code harder to maintain.
        2. Limited to one event handler per event per element.

    best for: small projects or simple tasks.
    not best for: large applications or complex interactions.

2. Event properties:
        Assigning a function to an element's event property in JS.
        syntax: element.event = function;
        advantages:
        1. Keeps HTML and JS separate.
        2. Allows multiple event handlers for different events on the same element.
        disadvantages:
        1. Still limited to one handler per event per element.
        best for: moderate complexity tasks.
        not best for: scenarios requiring multiple handlers for the same event.
    
3. addEventListener method:
        Using the addEventListener method to attach event handlers.
        syntax: element.addEventListener("event", function);
        advantages:
        1. Allows multiple event handlers for the same event on the same element.
        2. Provides more control over event propagation and options.
        disadvantages:
        1. Slightly more complex syntax.
        best for: complex applications and interactions.
        not best for: very simple tasks where inline handlers might suffice.

types of EVents:
1. Mouse Events: click, dblclick, mouseover, mouseout, mousemove
2. Keyboard Events: keydown, keyup, keypress
3. Form Events: submit, change, focus, blur
4. Window Events: load, resize, scroll, unload
5. clipboard Events: copy, cut, paste
6. touch Events: touchstart, touchmove, touchend(mobile)


*/



function showalert() {
    alert("Button Clicked")
}

document.getElementById("btn").onclick=function() {
    console.log("Button clicked from js")
}

document.getElementById("btn").ondblclick=function(){
    console.log("Double clicked")
}



let btn=document.getElementById("btn");

btn.addEventListener("click",function(){
    console.log("click in add eventlistner")
})

btn.addEventListener("dblclick",function(){
    console.log("Double click in addeventlistner")
})

// Zooming image by using doubleclick

document.getElementById("img").addEventListener("dblclick",function(){
    img.style.transform= "scale(1.5)";
})

document.getElementById("img").addEventListener("mouseover",function(){
    img.style.transform= "scale(1.5)";
})
document.getElementById("img").addEventListener("mouseout",function(){
    img.style.transform= "scale(1)";
})

// open a file by double clicking

document.getElementById("file").addEventListener("dblclick",function(){
    openfile();
})

function openfile(){
    alert("File opened")
}

// submitting the form by using keydown

document.getElementById("text").addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        alert("Form submitted")
    }
})

document.getElementById("text").addEventListener("keydown",function(event){
    if(!isNaN(event.key)){
        alert("Numbers are not allowed")
    }
})

document.getElementById("address").addEventListener("keydown",function(e){
    
})
