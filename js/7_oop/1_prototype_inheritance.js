// One object
let geom = {
    name: "Figure",
    sp: {x: 0, y: 0},
    ep: {x: 100, y: 20}
};


// Another object
let rect = {
    draw() {
        console.log(`${this.sp.x} ${this.sp.y} ${this.ep.x} ${this.ep.y}`);
    }
};
 
// Inheriting:
rect.__proto__ = geom;
rect.draw();                // 0 0 100 20
console.log(rect.name);     // Figure


// Third object
let rect2 = {
    name: 'Rectangle',
    draw() {
        console.log(`${this.sp.x} ${this.sp.y} ${this.ep.x} ${this.ep.y}`);
    }
};

// Inheriting:
rect2.__proto__ = geom;
geom.sp.x = 1;
rect2.draw();               // 1 0 100 20
rect.draw();                // 1 0 100 20
console.log(rect2.name);    // Rectangle
console.log(rect.name);     // Figure


// Another level of inheritance
let info = {
    getInfo() {
        console.log(this.name);
    },
    __proto__: rect     // Inheriting this way
}
 
info.getInfo();     // Figure




//      -- Getters and Setters --


let geom2 = {
    name: "Figure",
    sp: {x: 0, y: 0},
    ep: {x: 100, y: 20},
    get nameGeom() {
        return this.name;
    },
    set nameGeom(name) {
        this.name = name;
    }
};


// Another object
let rect3 = {
    draw() {
        console.log(`${this.sp.x} ${this.sp.y} ${this.ep.x} ${this.ep.y}`);
    },
    __proto__: geom2
};

console.log(rect3.nameGeom);    // Figure
rect3.nameGeom = 'Square';
console.log(rect3.nameGeom);    // Square

// Note, that 'this' is a link onto the object, where it was called => setting atr in child will set in child only:
console.log(geom2.name);        // Figure
console.log(geom2.nameGeom);    // Figure