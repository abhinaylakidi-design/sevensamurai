let container = document.getElementById("container")
let products =[
    {Name:"Mobile",
    instock:true,
    Price:10000,
    discount: "10%",
    id: 1},

    {Name:"Watch",
    instock:false,
    Price:5000,
    discount:"20%",
    id:2},

    {Name:"Ear pods",
    instock:true,
    Price:2000,
    discount:"10%",
    id:3},

    {Name:"shoes",
    instock:true,
    Price:4000,
    discount:"20%",
    id:4}
    
]

for (i=0;i<products.length;i++){
    let items=products[i];
    container.innerHTML+=
    `
    <div class=cards>
    <h4>products Name:${items.Name}</h4>
    <p>instock:${items.instock ? "Available" : "out of stock"}</p>
    <p>Price:${items.Price}</p>
    <p>Discount:${items.discount}</p>
    <button onclick=addtocart(${items.id})>Add to Cart</button>
    </div>`;
}
let cart=[]
function addtocart(p) {
    for(i=0;i<products.length;i++){
        if(products[i].id===p){
        cart.push(products[i]);
        }
    }
    console.log(cart)

}





