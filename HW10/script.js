// /** Завдання створити класи:
//  *    фігура:
//  *      координати:
//  *      х, у
//  *
//  *    багатокутник -> фігура:
//  *      вершини[координати],
//  *      периметр()
//  *
//  *    прямокутник -> багатокутник:
//  *      довжина,
//  *      висота,
//  *      площа(),
//  *      периметр()
//  *
//  *    квадрат -> прямокутник:
//  *      довжинаСторони,
//  *      площа(),
//  *      периметр()
//  *
//  *    круг -> фігура:
//  *      радіус,
//  *      площа(),
//  *      периметр()
//  */
class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    getPointAtOffset(x1, y1) {
        return new Point(this.x + x1, this.y + y1);
    }

    getDistance(point) {
        return Math.sqrt(((this.x - point.x) ** 2) + ((this.y - point.y) ** 2));
    }
}

class Shape {
    /**
     *
     * @param center
     */
    constructor(center) {
        this._center = center;
    }
}

class Polygon extends Shape {
    /**
     *
     * @param center
     * @param tops
     */

    constructor(center, tops) {
        super(center);
        this._tops = tops;
    }

    getPerimeter() {
        this._perimeter = 0;
        for (let i = 0; i < this._tops.length; i++) {
            if (i === this._tops.length - 1) {
                this._perimeter = this._perimeter + this._tops[i].getDistance(this._tops[0]);
            } else {
                this._perimeter = this._perimeter + this._tops[i].getDistance(this._tops[i + 1]);
            }
        }
        return this._perimeter;
    }
}

class Rectangle extends Polygon {
    /**
     *
     * @param center
     * @param width
     * @param height
     */
    constructor(center, width, height) {
        super(center);
        this._width = width;
        this._height = height;
    }

    getArea() {
        return this._width * this._height;
    }

    getPerimeter() {
        return (this._width + this._height) * 2;
    }
}

class Square extends Rectangle {
    /**
     *
     * @param center
     * @param width
     */
    constructor(center, width) {
        super(center, width, width);
    }
}

class Circle extends Shape {
    /**
     *
     * @param center
     * @param radius
     */
    constructor(center, radius) {
        super(center);
        this._radius = radius;
    }

    getCircleArea() {
        return (Math.PI * (this._radius ** 2));
    }

    getCirclePerimeter() {
        return (2 * Math.PI * this._radius);
    }
}

// get points
const centerPoint = new Point(7, 5);
const point1 = new Point(3, 3);
const point2 = new Point(8, 3);
const point3 = new Point(11, 7);
const point4 = new Point(6, 7);
const tops = [point1, point2, point3, point4];
console.log(tops);
// -Shape-
const myShape = new Shape(centerPoint);
console.log(myShape);
// -Polygon-
const myPolygon = new Polygon(centerPoint, tops);
console.log(myPolygon);
console.log(`Polygon perimetr: ${myPolygon.getPerimeter()}`);
// -Rectangle-
const RecCenterPoint = new Point(5, 3);
const myRectangle = new Rectangle(RecCenterPoint, 6, 4);
console.log(`Rectangle perimeter: ${myRectangle.getPerimeter()}`);
console.log(`Rectangle Area: ${myRectangle.getArea()}`);
// -Square-
const mySquare = new Square(RecCenterPoint, 5);
console.log(`Square Perimetr: ${mySquare.getPerimeter()}`);
console.log(`Square Area: ${mySquare.getArea()}`);
// -Circle-
const myCircle = new Circle(centerPoint, 6);
console.log(`Circle Perimetr: ${myCircle.getCirclePerimeter()}`);
console.log(`Circle Area: ${myCircle.getCircleArea()}`);
