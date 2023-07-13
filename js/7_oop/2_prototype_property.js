let prop = {
    name: 'SomeName',
    sp: {x: 0, y: 0},
    ep: {x: 100, y: 20},
    get coords() {
        return [this.sp.x, this.sp.y, this.ep.x, this.ep.y];
    },
    set coords(coords) {
        this.sp.x = coords[0]; this.sp.y = coords[1];
        this.ep.x = coords[2]; this.ep.y = coords[3];
    }
};



// Factory-function, that create a descendant:
function Rect() {
    this.name = "Rectangle";
    this.draw = function() {
        console.log(`Drawing figure: ${this.name}`);
    };
    this.__proto__ = prop;
}
 
let r = new Rect();
r.draw();
console.log(r.coords);



// Another way of creating descendants:
let rect = Object.create(prop, {
    name: {value: "Rect", writable: true},
    draw: {value: function() {
        console.log("Drawing: "+this.name);
    }
},
});

console.log(rect.name);         // Rect
rect.name = 'Another name';
console.log(rect.name);         // Another name
console.log(prop.name);         // SomeName
rect.draw();                    // Drawing: Another name