function toggleMenu(){
	document.getElementsByClassName("links")[0].classList.toggle("responsive");
	document.getElementsByClassName("menuButton")[0].style.display="none";
	document.getElementsByClassName("menuButton2")[0].style.display="block";
	document.getElementsByClassName("menuButton2")[0].style.width="70px";
	document.getElementsByClassName("menuButton2")[0].style.padding="5px";
	document.getElementsByClassName("logo")[0].style.gridTemplateColumns ="1fr 1fr 9fr";
	document.getElementsByClassName("logo")[0].style.justifyItems ="left";
}
function toggleMenu2(){
	document.getElementsByClassName("links")[0].classList.toggle("responsive");
	document.getElementsByClassName("menuButton")[0].style.display="block";
	document.getElementsByClassName("menuButton")[0].style.width="70px";
	document.getElementsByClassName("menuButton2")[0].style.display="none";
	document.getElementsByClassName("logo")[0].style.gridTemplateColumns ="1fr 8fr 1fr";
	document.getElementsByClassName("logo")[0].style.justifyItems ="left";
	document.getElementsByClassName("point4")[0].style.justifySelf ="right";
}
function toggleHome(){
	document.getElementsByClassName("homeCategories").toggle("responsive3");
}