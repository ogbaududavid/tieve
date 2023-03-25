/**
 * <nav class="navigation">
            <div class="logo">
                <button class="menuButton" onclick="toggleMenu()"><span class="dingbat">&#9776;</span></button>
                <img src="/images/tieve-logo.PNG" alt="tieve brand logo" class="point1">
                <a href="/cart/index.html" class="point4"><img src="/images/cart.jpg" alt="cart icon" class="point3"></a>
            </div>
            <ul class="links">
                <button class="menuButton2" onclick="toggleMenu2()"><strong><span class="dingbat">X</span></strong></button>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/catalogue/index.html">Catalogue</a></li>
                    <ul>
                        <li><a href="/catalogue/shoes/shoes.html">Shoes</a></li>
                        <li><a href="/catalogue//joggers/joggers.html">Joggers</a></li>
                        <li><a href="/catalogue/dresses/dresses.html">Dresses</a></li>
                    </ul>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
 * **/
let navigationNav = document.createElement("nav").setAttribute("class", "navigation");

let logoDiv = document.createElement("div").setAttribute("class", "logo");
let logoDivOpenMenuButtonDingbat = document.createElement("span").setAttribute("class", "dingbat");
    logoDivOpenMenuButtonDingbat.textContent = "&#9776;";
let logoDivOpenMenuButton = document.createElement("button").setAttribute("class", "menuButton");
    logoDivOpenMenuButton.appendChild(logoDivOpenMenuButtonDingbat);
let logoDivBrandImg = document.createElement("img").setAttribute("class", "point1");
    logoDivBrandImg.setAttribute("src", "/images/tieve-logo.PNG" );
    logoDivBrandImg.setAttribute("alt", "tieve brand logo");
let logoDivCartAimage = document.createElement("img").setAttribute("class", "point1");
    logoDivCartAimage.setAttribute("src", "/images/cart.jpg");
    logoDivCartAimage.setAttribute("alt", "cart icon");
let logoDivA = document.createElement("a").setAttribute("class", "point4" );
    logoDivA.appendChild(logoDivCartAimage);


let linksUl = document.createElement("ul");
let linksCloseMenuButton = document.createElement("button");
let linksHomeA = document.createElement("a");
let linksIndexA = document.createElement("a");
let linksHomeLi = document.createElement("li");
let linksIndexLi = document.createElement("li");

let subCatalogueUl = document.createElement("ul");
let subCatalogueShoesLi = document.createElement("li");
let subCatalogueJoggersLi = document.createElement("li");
let subCatalogueDressesLi = document.createElement("li");
let subCatalogueShoesA = document.createElement("a");
let subCatalogueJoggersA = document.createElement("a");
let subCatalogueDressesA = document.createElement("a");

navigationNav.setAttribute("class", "navigation").innerHTML();
navigationNav.innerHTML()