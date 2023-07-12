let form = document.forms[0];

// Events on changing focus:
form.user.onfocus = function(event) {
    console.log("Element is in focus");
}; 
form.user.onblur = function(event) {
    console.log("Element not in focus");
};


// Setting focus:
form.about.focus();