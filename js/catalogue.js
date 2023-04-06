let shoes = document.querySelector(".shoesDiv");
let joggers = document.querySelector(".joggersDiv");
let dresses = document.querySelector(".dressesDiv");
let cartIcon = document.querySelector(".point3");
const shoesURL = "/json/shoes.json";
const joggersURL = "/json/joggers.json";
const dressesURL = "/json/dresses.json";
const urlList = [shoesURL, joggersURL, dressesURL];
const jsonFilesArray = ["shoes", "joggers", "dresses"];
const classesArray = [ shoes, joggers, dresses];
counter = 0;
let localCart7 = window.localStorage.getItem("local-cart");
let localCart8 = JSON.parse(localCart7);

if(localCart7 == null){
    savedItems = {"savedItems": []};
    window.localStorage.setItem("local-cart", JSON.stringify(savedItems));
    localCart7 = window.localStorage.getItem("local-cart");
    localCart8 = JSON.parse(localCart7);
}

for (var i = 0; i < urlList.length; i++){
    const url = urlList[i];
    const jsonFile = jsonFilesArray[i];
    const classo = classesArray[i] ; 
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function (jsonObject){
            const jsonGroup = jsonObject[jsonFile]; 
            jsonGroup.forEach(displayItem);
            counter++;
        })
}

function displayItem(item){
    let image = document.createElement("img");
    let brand = document.createElement("p");
    let size = document.createElement("p");
    let color = document.createElement("p");
    let price = document.createElement("p");
    let addToCartButton = document.createElement("button");
    let section = document.createElement("section");

    image.setAttribute("src", item.imageURL);
    image.setAttribute("alt", item.brand + "joggers")
    image.setAttribute("loading", "lazy")
    brand.textContent = "Brand: " +item.brand;
    size.textContent = "Size: " + item.size;
    color.textContent = "Color: " +item.color;
    price.textContent = "Price: " +item.price;

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
            "image": item.imageURL, 
            "brand": item.brand, 
            "size": item.size, 
            "color": item.color, 
            "price": item.price
        };
        localCart8["savedItems"].push(itemDetails);
        window.localStorage.setItem("local-cart", JSON.stringify(localCart8));
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
    classesArray[counter].appendChild(section);
}