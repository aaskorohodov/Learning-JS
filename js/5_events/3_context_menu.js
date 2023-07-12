// Changing context menu (what pops up, if press RMB) to some custom stuff:
function customContextMenu(event) {
	console.log('Custom context menu');		// Emulating custom menu
	event.preventDefault();					// Preventing default menu
}

document.addEventListener('contextmenu', customContextMenu, event);
