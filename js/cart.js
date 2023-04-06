const cartPage = document.querySelector(".cartPage");
let cartItems = window.localStorage.getItem("local-cart");
let cartItems2 = JSON.parse(cartItems);
let div = document.createElement("div");
let divider = document.createElement("div");
let HTMLtotal = document.createElement("p");
let HTMLorderSummary = document.createElement("h2")
divider.setAttribute("class", "divider");
let total =0;


for (i in cartItems2["savedItems"]){
    let section1 = document.createElement("section");
    let section2 = document.createElement("section");
    let item = cartItems2["savedItems"][i];
    const image = item.image;
    const brand = item.brand;
    const size = item.size;
    const color = item.color;
    const price = item.price;
    total += price;

    let HTMLimage = document.createElement("img");
    let HTMLbrand = document.createElement("p");
    let HTMLsize = document.createElement("p");
    let HTMLcolor = document.createElement("p");
    let HTMLprice = document.createElement("p");

    HTMLimage.setAttribute("src", image);
    HTMLimage.setAttribute("alt", brand + "shoe");
    HTMLimage.setAttribute("loading", "lazy");
    HTMLbrand.textContent = "Brand: " +brand;
    HTMLsize.textContent = "Size: " +size;
    HTMLcolor.textContent = "Color: " +color;
    HTMLprice.textContent = "Price: " +price;
    section1.setAttribute("class", "section1");
    section2.setAttribute("class", "section2");

    section1.appendChild(HTMLimage);
    section2.appendChild(HTMLbrand);
    section2.appendChild(HTMLsize);
    section2.appendChild(HTMLcolor);
    section2.appendChild(HTMLprice);
    divider.appendChild(section1);
    divider.appendChild(section2);
}
HTMLorderSummary.textContent = "ORDER SUMMARY"
HTMLtotal.setAttribute("class", "total"); 
HTMLtotal.textContent = "Total Amount (N): " +total
div.appendChild(HTMLorderSummary);
div.appendChild(divider);
div.appendChild(HTMLtotal);
cartPage.appendChild(div);