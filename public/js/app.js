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
	res.prefixes.forEach(function(folderRef) {
		// All the prefixes under listRef.
		// You may call listAll() recursively on them.
		folderRef.listAll().then(function(res) {
			res.items.forEach(function(itemRef){
				itemRef.getDownloadURL().then(function(url) {
					imgs.insertAdjacentHTML('afterbegin', `<div class="container img ${itemRef.parent.name}"><img src='${url}'></div>`);
					console.log(url);
				});
				console.log(itemRef);
			});
		});
	});
	res.items.forEach(function(itemRef) {
		console.log(itemRef);
		// All the items under listRef.
	});
	}).catch(function(error) {
		// Uh-oh, an error occurred!
});