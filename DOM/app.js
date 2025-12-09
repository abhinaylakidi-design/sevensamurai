// DOM document object model 
// it is a tree like structure that represents the html document
// it allows us to manipulate the html document using javascript


const Header = document.getElementsByTagName("header")
    console.log(Header);


    const ulist = document.getElementsByTagName("ul");
console.log(ulist);


// getelementsbyclassname

const sectionclass =document.getElementsByClassName("section")
console.log(sectionclass);

// getelementsbyid

const sectionform = document.getElementById("section-form")
console.log(sectionform);

// queryselectors

const sectionprodects = document.querySelector("section  ")

// queryselectorall

const sectionprodectsall = document.querySelectorAll("section")
console.log(sectionprodectsall);

const mainNavListItems = document.querySelectorAll("#main-nav ul li");
console.log(mainNavListItems);