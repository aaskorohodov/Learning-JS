// DOMContentLoaded – HTML is loaded, DOM is ready, but images and CSS might not be loaded yet;
// load – DOM, img and CSS are ready;
// beforeunload/unload – User leaves a page;

// Action, when DOM only is ready (image sizes might not be there, because they might not be ready):
document.addEventListener("DOMContentLoaded", ready);
function ready(event) {
    console.log("DOMContentLoaded");
    console.log(`Image: ${image.offsetWidth}x${image.offsetHeight}`);
}


// Will be executed, when everything is loaded:
window.onload = function(event) {
   console.log("load");
   console.log(`Image: ${image.offsetWidth}x${image.offsetHeight}`);
}




// 		-- document.readyState --

// "loading" – document is loading;
// "interactive" – document was loaded;
// "complete" – document, images and CSS were loaded;

// checkState();

function checkState() {
	let flag = true;
	while (flag) {
		setTimeout (function() {console.log('')}, 1000);
		console.log(document.readyState);
		if (document.readyState == 'complete') {
			flag = false;
			console.log('completed');
		};
	};
}