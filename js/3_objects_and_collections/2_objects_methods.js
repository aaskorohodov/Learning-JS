// Adding a method:
let car = {
	model: 'Toyota',
	color: 'Black',
	go: function() {
		console.log('GOGOGOG!!!!111')
	},
	beep() {	// Another way of adding a method
		console.log('Beep-beep')
	}
}
car.go();	// -> GOGOGOG!!!!111
car.beep(); // -> Beep-beep


// Adding another method:
car.stop = function() {
	console.log('Stopped!')
}
car.stop();	// -> Stopped!

// Method with argument(s):
car.driver = function(dirverName) {
	console.log(`Car id driven by ${dirverName}`)
}
car.driver('Smith');	// -> Car id driven by Smith


// 'self' in JS is 'this'
car.getModel = function() {
	console.log(this.model)
}
car.getModel()



// There is a 'magical' way to add method to the Object, which (method) includes link to itself:
function getColor() {
	console.log(this.color)		// 'this' will be used on the Object, to which this function will be assigned
}
car.getColor = getColor
car.getColor()