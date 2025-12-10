let products=[
    {
        image:"../Assects/laptop.jpeg" ,
        Name:"Laptop",
        Price: 65000,
        button:"ADD TO CART"
    },
    {
        image:"../Assects/mobile.jpeg",
        Name:"Mobile",
        Price: 25000,
        button:"ADD TO CART"
    },
    {
        image:"../Assects/mivi.jpeg",
        Name:"Ear Pods",
        Price: 5000,
        button:"ADD TO CART"
    }
];



let Container=document.getElementById("Container")

for (let i=0;i<products.length;i++){
    let card=document.createElement("div");
    card.classList.add("items");

    card.innerHTML=`
    
    <img src="${products[i].image}" alt="Product Image"/>
    <h2>${products[i].Name}</h2>
    <p>${products[i].Price}</p>
    <button>${products[i].button}</button>
    
    `;
    Container.appendChild(card);
}