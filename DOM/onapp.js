/*
DOM:

The DOM (Document Object Model) is a programming interface that represents an HTML document as a tree of objects,
allowing JavaScript to access, modify, add, or remove elements dynamically
*/


// let title = document.getElementById("title")

// title.style.color ="red"

// let title = document.getElementsByClassName("hello")

// title[1].style.color="blue"

// let para = document.querySelector(".hello")
// para.style.color="red"


// let select = document.querySelectorAll(".hello")
// select[1].style.color="green"


// Dom Manupliation

// create Element

let newdiv = document.createElement("div")

newdiv.innerText = "Hello welcome to js"
document.body.appendChild(newdiv)

// remove element

newdiv.remove();


// replace element

let hello = document.getElementById("hello");

let world = document.createElement("p");
world.innerText ="world";

hello.replace(world)