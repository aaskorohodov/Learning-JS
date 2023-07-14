// Private methods and properties in JS are set by _underscore. These methods and values are still accessible as usually:
class Users {
	constructor(name, age) {
		this._name = name;
		this.__age = age;
	}

	_getName() {
		return this._name;
	}
}

u1 = new Users('Dave', 30);
console.log(u1.__age);		// 30
console.log(u1._getName());	// Dave



// This is how to make actual private methods:
class Admin {
	// Declaring private-properties
	#name;
	#age = 0;	// with default value, if needed
	#getName;	// Methods can not be declared as private

	constructor(name, age) {
		this.#name = name;
		this.#age = age;
	}

	getName() {
		return this.#name;
	}
}

a1 = new Admin('Dave', 20);
console.log(a1.name);		// undefined
a1.name = 'NotDave';
console.log(a1.name);		// NotDave
console.log(a1.getName());	// Dave