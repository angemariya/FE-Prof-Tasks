class Geometry {
    static getDistance(a, b) {
        const [ x1, y1 ] = a;
        const [ x2, y2 ] = b;
        const dX = x2 - x1;
        const dY = y2 - y1;
        return Math.sqrt(dX**2 + dY**2);
    }
}

class Shape {
    points = [];

    get square() {
        return 0;
    }

    get perimeter() {
        return this.sides.reduce(function (acc, value) {
            return acc + value;
        }, 0);
    }
    
    get sides() {
        // const result = [];
        // this.points.forEach(function (point, i) {
        //     result[i] = 
        //         Geometry.getDistance(point, this.points[i + 1] ?? point[0]); //operator nullish
        // });
        // return result;
        return this.points.map(function (point, i, arr) {
            return Geometry.getDistance(point, arr[i + 1] ?? arr[0]);
        });
    }
}

class Triangle extends Shape {
    constructor(x, y, z) {
        super(...arguments);
        this.points = [ x, y, z ];
    }
    get square() {
        const p = this.perimeter / 2;
        const [ a, b, c ] = this.sides;
        return Math.sqrt(p * (p - a) * (p  - b) * (p - c));
    }
}

class Rectangle extends Shape {
    constructor(a, b) {
        const [ x1, y1 ] = a;
        const [ x2, y2 ] = b;
        if (x1 === x2 || y1 === y2) {
            throw new Error("Wrong coordinates!");
        }
        super(...arguments);
        this.points = [a, [x1, y2], b, [x2, y1]];
    }
    get square() {
        const [ a, b ] = this.sides;
        return a * b;
    }
}

const triangle = new Triangle([0, 0], [0, 3], [4, 0]);
console.log(triangle.perimeter);
console.log(triangle.square);

const rectangle = new Rectangle([0, 0], [2, 5]);
console.log(rectangle.perimeter);
console.log(rectangle.square);