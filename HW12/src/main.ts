/** Завдання створити класи:
 *    фігура:
 *      координати:
 *      х, у
 *
 *    багатокутник -> фігура:
 *      вершини[координати],
 *      периметр()
 *
 *    прямокутник -> багатокутник:
 *      довжина,
 *      висота,
 *      площа(),
 *      периметр()
 *
 *    квадрат -> прямокутник:
 *      довжинаСторони,
 *      площа(),
 *      периметр()
 *
 *    круг -> фігура:
 *      радіус,
 *      площа(),
 *      периметр()
 */

class Point {
    protected _x: number;
    protected _y: number;
    constructor(private x: number, private y: number){
        this._x = x;
        this._y = y;
    }

    get x_():number {
        return this._x;
    }

    get y_():number {
        return this._y;
    }

    getPointAtOffset(x1: number, y1: number): Point {
        return new Point(this.x + x1, this.y + y1);
    }

    getDistance(point: Point): number {
        return Math.sqrt(((this.x - point.x) ** 2) + ((this.y - point.y) ** 2));
    }
}

class Shape {
    private _center: Point;
    constructor (protected center: Point) {
        this._center = center;
    }
}

class Polygon extends Shape {
    protected _tops: Array<Point>;
    private _perimeter: number;

    constructor (protected center: Point, protected tops: Array<Point>) {
        super(center);
        this._tops = tops;
    }
    getPerimeter(): number {
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
    protected _width: number;
    protected _height: number;
    constructor(protected center: Point, protected width: number, protected height: number) {
        super(center, tops);
        this._width = width;
        this._height = height;
    }
    getArea(): number {
        return this._width * this._height;
    }

    getPerimeter(): number {
        return (this._width + this._height) * 2;
    }
}

class Square extends Rectangle {
    constructor(protected center: Point, protected width: number) {
        super(center, width, width);
    }
}

class Circle extends Shape {
    protected _radius: number;
    constructor(center: Point, radius: number) {
        super(center);
        this._radius = radius;
    }
    getCircleArea(): number {
        return (Math.PI * (this._radius ** 2));
    }

    getCirclePerimeter(): number {
        return (2 * Math.PI * this._radius);
    }
}

const shapes = {
    Shape: Shape,
    Polygon: Polygon,
    Rectangle: Rectangle,
    Square: Square,
    Circle: Circle,
    Point: Point
};
