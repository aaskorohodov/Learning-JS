// Functional expressions are a stupid way to call functions immediately, without setting any name for it:

(function () {
	console.log('functional expression call');
})();	// <- Note that all function is declared inside () and after that there is another set of ()


// You can set function with this syntax as well:
let funcName = () => console.log('funcName');
funcName();