let cards = document.querySelector(".cards");
let cartIcon = document.querySelector(".point3");
const requestURL = "/json/joggers.json";
let localCart3 = window.localStorage.getItem("local-cart");
let localCart4 = JSON.parse(localCart3);

if(localCart3 == null){
    savedItems = {"savedItems": []};
    window.localStorage.setItem("local-cart", JSON.stringify(savedItems));
    localCart3 = window.localStorage.getItem("local-cart");
    localCart4 = JSON.parse(localCart3);
}


let items = {};
fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function (jsonObject){
        const joggers = jsonObject["joggers"]; 
        joggers.forEach(displayItem);     
    })

function displayItem(jogger){
    let image = document.createElement("img");
    let brand = document.createElement("p");
    let size = document.createElement("p");
    let color = document.createElement("p");
    let price = document.createElement("p");
    let addToCartButton = document.createElement("button");
    let section = document.createElement("section");

    image.setAttribute("src", jogger.imageURL);
    image.setAttribute("alt", jogger.brand + "dress")
    image.setAttribute("loading", "lazy")
    brand.textContent = "Brand: " +jogger.brand;
    size.textContent = "Size: " +jogger.size;
    color.textContent = "Color: " +jogger.color;
    price.textContent = "Price: " +jogger.price;

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
            "image": jogger.imageURL, 
            "brand": jogger.brand, 
            "size": jogger.size, 
            "color": jogger.color, 
            "price": jogger.price
        };
        localCart4["savedItems"].push(itemDetails);
        window.localStorage.setItem("local-cart", JSON.stringify(localCart4));
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
    cards.appendChild(section);
    
    
}