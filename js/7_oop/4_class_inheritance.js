class Prop {
    constructor(width, color) {
        this.width = width;
        this.color = color;
    }

    someMethod() {
        console.log('baseMethod')
    }

    getColor() {
        return this.color; 
    }
}

class Line extends Prop {
    constructor(sp, ep, width, color) {
        super(width, color)
        this.sp = sp;
        this.ep = ep;
        // this.width = width;
        // this.color = color;
    }

    draw() {
        console.log(`Line: ${this.sp.x} ${this.sp.y} ${this.ep.x} ${this.ep.y}`);
    }

    someMethod() {
        console.log('Overwritten method');
    }

    getColor() {
        let color = super.getColor();       // Calling for base-class-method
        console.log(`Color = ${color}`);
    }
}

let l1 = new Line({x: 0, y: 0}, {x: 10, y: 20}, 1, 'red');
console.log(l1);

l1.someMethod();    // Overwritten method
l1.getColor();      // Color = red