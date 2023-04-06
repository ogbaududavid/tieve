let cards2 = document.querySelector(".cards2");
let cartIcon = document.querySelector(".point3");
const requestURL = "/json/shoes.json";
let localCart1 = window.localStorage.getItem("local-cart");
    localCart2 = JSON.parse(localCart1);

if(localCart1 == null){
    savedItems = {"savedItems": []};
    window.localStorage.setItem("local-cart", JSON.stringify(savedItems));
    localCart1 = window.localStorage.getItem("local-cart");
    localCart2 = JSON.parse(localCart1);
}

    fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function (jsonObject){
        const shoes = jsonObject["shoes"];
        shoes.forEach(displayItem);     
    })

    function displayItem(shoe){
        let image = document.createElement("img");
        let brand = document.createElement("p");
        let size = document.createElement("p");
        let color = document.createElement("p");
        let price = document.createElement("p");
        let addToCartButton = document.createElement("button");
        let section = document.createElement("section");
    
        image.setAttribute("src", shoe.imageURL);
        image.setAttribute("alt", shoe.brand + "dress")
        image.setAttribute("loading", "lazy")
        brand.textContent = "Brand: " +shoe.brand;
        size.textContent = "Size: " +shoe.size;
        color.textContent = "Color: " +shoe.color;
        price.textContent = "Price: " +shoe.price;
    
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
                "image": shoe.imageURL, 
                "brand": shoe.brand, 
                "size": shoe.size, 
                "color": shoe.color, 
                "price": shoe.price
            };
            localCart2["savedItems"].push(itemDetails);
            window.localStorage.setItem("local-cart", JSON.stringify(localCart2));
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
    cards2.appendChild(section);   
    
}
