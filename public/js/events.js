window.onhashchange = function(){
	updateContent();
}
window.onload = function(){
	updateContent();
}
document.querySelector("#togglemenu").addEventListener("click", ()=>{
	document.querySelector("#navbar").classList.toggle('collapsed');
});
document.querySelectorAll('.singleNav').forEach(function(element){
	element.addEventListener('click', (event)=>{
		window.location.hash = element.text;
		stopDefAction(event);
	});
});
document.querySelector("#bigText").addEventListener("click", ()=>{
	blackOut = document.querySelector("#blackOut");
	if(blackOut.getAttribute("disabled") == null){
		blackOut.setAttribute("disabled", "disabled");
	}else{
		blackOut.removeAttribute("disabled");
	}
});
let aboutNav = document.querySelector("#SobreNav");
aboutNav.addEventListener('click', (event)=>{
	console.log(aboutNav.classList.contains('disabled'));
	if(aboutNav.classList.contains('disabled')){
		stopDefAction(event);
	}else{
		window.location.hash = "Sobre";
		stopDefAction(event);
		clearNavs();
	}
});
let backAboutNav = document.querySelector("#backSobre");
backAboutNav.addEventListener('click', (event)=>{
	window.location.hash = '#Galeria';
	stopDefAction(event);
});