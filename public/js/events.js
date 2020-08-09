var navClusters = document.querySelectorAll('.navCluster');
var backNavs = document.querySelectorAll('.backNav');

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
for (let i = 0; i < navClusters.length; i++) {
	let backNav = navClusters[i].firstElementChild;
	let nav = navClusters[i].lastElementChild;
	nav.addEventListener('click', (event)=>{
		console.log(nav.classList.contains('disabled'));
		if(nav.classList.contains('disabled')){
			stopDefAction(event);
		}else{
			window.location.hash = nav.getAttribute('href');
			stopDefAction(event);
			clearNavs();
		}
	});
	backNav.addEventListener('click', (event)=>{
		window.location.hash = '#Galeria';
		stopDefAction(event);
	});
}
