let cards3 = document.querySelector(".cards3");
let cartIcon = document.querySelector(".point3");
const requestURL = "/json/dresses.json";
let localCart5 = window.localStorage.getItem("local-cart");
    localCart6 = JSON.parse(localCart5);
if(localCart5 == null){
    savedItems = {"savedItems": []};
    window.localStorage.setItem("local-cart", JSON.stringify(savedItems));
    localCart5 = window.localStorage.getItem("local-cart");
    localCart6 = JSON.parse(localCart5);
}
let items = {};
fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function (jsonObject){
        const dresses = jsonObject["dresses"]; 
        dresses.forEach(displayItem);     
    })

function displayItem(dress){
    let image = document.createElement("img");
    let brand = document.createElement("p");
    let size = document.createElement("p");
    let color = document.createElement("p");
    let price = document.createElement("p");
    let addToCartButton = document.createElement("button");
    let section = document.createElement("section");

    image.setAttribute("src", dress.imageURL);
    image.setAttribute("alt", dress.brand + "dress")
    image.setAttribute("loading", "lazy")
    brand.textContent = "Brand: " +dress.brand;
    size.textContent = "Size: " +dress.size;
    color.textContent = "Color: " +dress.color;
    price.textContent = "Price: " +dress.price;

    addToCartButton.setAttribute("class", "addToCartButton")
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.addEventListener("click", function(){
        setTimeout(() => {
            addToCartButton.style.backgroundColor = 'white';
            addToCartButton.style.scale = '.95';
        }, 200);
        setTimeout(() => {
            addToCartButton.style.backgroundColor = 'orange';
            addToCartButton.style.scale = '1';
        }, 400);
        const itemDetails = {
            "image": dress.imageURL, 
            "brand": dress.brand, 
            "size": dress.size, 
            "color": dress.color, 
            "price": dress.price
        };
        localCart6["savedItems"].push(itemDetails);
        window.localStorage.setItem("local-cart", JSON.stringify(localCart6));
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1.3, 1.3)';
            cartIcon.style.transitionDuration =".3s";
        }, 500);
        setTimeout(() => {
            cartIcon.style.transform = 'scale(.8, .8)';
            cartIcon.style.transitionDuration =".3s";
            cartIcon.style.backgroundColor ="white";
            cartIcon.style.borderRadius = "0";
        }, 700);
        cartIcon.style.borderRadius = "30px";
        cartIcon.style.backgroundColor ="orange";;
    });

    section.appendChild(image);
    section.appendChild(brand);
    section.appendChild(size);
    section.appendChild(color);
    section.appendChild(price);
    section.appendChild(addToCartButton);
    cards3.appendChild(section);   
    
}