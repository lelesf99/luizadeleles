// Create a reference under which you want to list
var storage = firebase.storage();
var listRef = storage.ref();

// let imgs = document.querySelector("#imgsWrapp");
// imgs.insertAdjacentHTML('afterbegin', ` <div class="container img"
// style="background-image: 
// url("luizadeleles-b81ea.appspot.com/1984.jpeg");"></div> `);
// Find all the prefixes and items.
listRef.listAll().then(function(res) {
	let imgs = document.querySelector("#imgsWrapp");
	let navBeg = document.querySelector("#navBeg");
	res.prefixes.forEach(function(folderRef) {
		//setting up navbars according to storage;
		navBeg.insertAdjacentHTML('afterend', `

			<li class='navCluster'>
		        <a href='Galeria' id='${folderRef.name}Back' class="navBarLink backNav backNavToggle">Voltar</a>
		        <a href='' id='${folderRef.name}' class="navBarLink galleryPageNav">${folderRef.name}</a>
		    </li>	

			`);

		//setting up eventListeners
		let nav = document.querySelector("#" + folderRef.name)
		nav.addEventListener('click', (event)=>{
			console.log(nav.classList.contains('disabled'));
			if(nav.classList.contains('disabled')){
				stopDefAction(event);
			}else{
				window.location.hash = nav.getAttribute('id');
				stopDefAction(event);
				clearNavs();
			}
		});
		let backNav = document.querySelector("#" + folderRef.name + "Back")
		backNav.addEventListener('click', (event)=>{
			window.location.hash = '#Galeria';
			stopDefAction(event);
		});

		// All the prefixes under listRef.
		// You may call listAll() recursively on them.
		folderRef.listAll().then(function(res) {
			res.items.forEach(function(itemRef){
				itemRef.getDownloadURL().then(function(url) {
					//setting up images
					imgs.insertAdjacentHTML('beforeend', `<div class="container img ${itemRef.parent.name}"><img src='${url}'></div>`);
					console.log(url);
				});
				console.log(itemRef);
			});
		});
	});
	res.items.forEach(function(itemRef) {
		console.log(itemRef);
		itemRef.getDownloadURL().then(function(url) {
			//setting up images
			imgs.insertAdjacentHTML('beforeend', `<div class="container img ${itemRef.parent.name}"><img src='${url}'></div>`);
			console.log(url);
		});
	});
	}).catch(function(error) {
		// Uh-oh, an error occurred!
});