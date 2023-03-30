
function searchCatalogue(){
	let searchQuery = document.querySelector(".searchBox").value;
		searchQuery.toString();
    let searchView = document.querySelector(".searchView");
    let searchHolder = document.querySelector(".searchedItems");
        searchView.removeChild(searchHolder);
    let searchedItemDisplayDiv = document.createElement("div");
        searchedItemDisplayDiv.setAttribute("class", "searchedItems");
        
	const shoesURL = "/json/shoes.json";
	const joggersURL = "/json/joggers.json";
	const dressesURL = "/json/dresses.json";
	const jsonFilesArray = ["shoes", "joggers", "dresses"];
	const urlList = [shoesURL, joggersURL, dressesURL];
    let cartIcon = document.querySelector(".point3");
    let cart = [];

	for (var i = 0; i < urlList.length; i++){
		const url = urlList[i];
		const jsonFile = jsonFilesArray[i];
		fetch(url)
			.then(function(response){
				return response.json();
			})
			.then(function (jsonObject){
				const jsonGroup = jsonObject[jsonFile]; 
				jsonGroup.forEach(searchItem);
			})
	}
	function searchItem(item){
		if(item.brand == searchQuery || item.color == searchQuery || item.size == searchQuery){
			displayItem(item);
		}
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
    
            }, 200);
            setTimeout(() => {
                addToCartButton.style.backgroundColor = 'orange';
            }, 400);
            const itemDetails = {
                "image": item.imageURL, 
                "brand": item.brand, 
                "size": item.size, 
                "color": item.color, 
                "price": item.price
            };
            cart.push(itemDetails);
            let newCart = JSON.stringify(cart);
            window.localStorage.setItem("cart", newCart);
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
        searchedItemDisplayDiv.appendChild(section);
        searchedItemDisplayDiv.style="overflow-y:scroll";      
    }
    searchView.appendChild(searchedItemDisplayDiv);
}