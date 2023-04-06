function toggleMenu(){
	document.getElementsByClassName("links")[0].classList.toggle("responsive");
	document.getElementsByClassName("menuButton")[0].style.display="none";
	document.getElementsByClassName("logo")[0].style.gridTemplateColumns ="9fr 1fr";
	document.getElementsByClassName("logo")[0].style.justifyItems ="right";
}
function toggleMenu2(){
	document.getElementsByClassName("links")[0].classList.toggle("responsive");
	document.getElementsByClassName("menuButton")[0].style.display="block";
	document.getElementsByClassName("menuButton")[0].style.width="70px";
	document.getElementsByClassName("logo")[0].style.gridTemplateColumns ="1fr 8fr 1fr";
	document.getElementsByClassName("logo")[0].style.justifyItems ="left";
	document.getElementsByClassName("point4")[0].style.justifySelf ="right";
}