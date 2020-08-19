

function stopDefAction(evt) {
    evt.preventDefault();
}
function loadHomePage(){
	console.log("HomeLoad");
	document.querySelector("#imgs").classList.remove('on');
	document.querySelector("#about").classList.remove('on');
	document.querySelector(".gallery").classList.remove('on');
	document.querySelector(".homePage").classList.add('on');
}
function loadGalleryPage(){
	console.log("galLoad");
	document.querySelector("#about").classList.remove('on');
	document.querySelector(".homePage").classList.remove('on');
	document.querySelector(".gallery").classList.add('on');
	document.querySelector("#imgs").classList.add('on');
}
function loadAboutPage(){
	console.log("aboutLoad");
	document.querySelector(".homePage").classList.remove('on');
	document.querySelector("#imgs").classList.remove('on');
	document.querySelector(".gallery").classList.add('on');
	document.querySelector("#about").classList.add('on');
}
function clearNavs(){
	var navClusters = document.querySelectorAll('.navCluster');
	var backNavs = document.querySelectorAll('.backNav');
	
	for (let i = 0; i < navClusters.length; i++) {
		let backNav = navClusters[i].firstElementChild;
		let nav = navClusters[i].lastElementChild;
		backNav.classList.add('backNavToggle');
		nav.classList.remove('disabled');
	}
}
function updateContent(){
	var navClusters = document.querySelectorAll('.navCluster');
	var backNavs = document.querySelectorAll('.backNav');
	
	page = window.location.hash.replace(/\#/, '');
	clearNavs();
	if(page === "Home" || page === ""){
		loadHomePage();

	}else if(page === "Galeria"){
		loadGalleryPage();
		
		document.querySelectorAll(".img").forEach(function(element){
			element.classList.remove('hid');
		});
	}else if(page === "Sobre"){
		loadAboutPage();
		document.querySelector("#backSobre").classList.remove('backNavToggle');
		document.querySelector("#SobreNav").classList.add('disabled');
	}else{
		document.querySelectorAll(".img").forEach(function(element){
			if(!element.classList.contains(page)){
				element.classList.add('hid');
			}else{
				element.classList.remove('hid');
			}
			for (let i = 0; i < navClusters.length; i++) {
				let backNav = navClusters[i].firstElementChild;
				let nav = navClusters[i].lastElementChild;
				if(nav.text === page){
					backNav.classList.remove('backNavToggle');
					nav.classList.add('disabled');
				}
			}
		});
		loadGalleryPage();
	}
	if(document.querySelector("#navbar").classList.contains('collapsed'))
		document.querySelector("#navbar").classList.remove('collapsed');
}

