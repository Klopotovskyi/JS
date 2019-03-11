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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point.prototype, "x_", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y_", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.getPointAtOffset = function (x1, y1) {
        return new Point(this.x + x1, this.y + y1);
    };
    Point.prototype.getDistance = function (point) {
        return Math.sqrt((Math.pow((this.x - point.x), 2)) + (Math.pow((this.y - point.y), 2)));
    };
    return Point;
}());
var Shape = /** @class */ (function () {
    function Shape(center) {
        this.center = center;
        this._center = center;
    }
    return Shape;
}());
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon(center, tops) {
        var _this = _super.call(this, center) || this;
        _this.center = center;
        _this.tops = tops;
        _this._tops = tops;
        return _this;
    }
    Polygon.prototype.getPerimeter = function () {
        this._perimeter = 0;
        for (var i = 0; i < this._tops.length; i++) {
            if (i === this._tops.length - 1) {
                this._perimeter = this._perimeter + this._tops[i].getDistance(this._tops[0]);
            }
            else {
                this._perimeter = this._perimeter + this._tops[i].getDistance(this._tops[i + 1]);
            }
        }
        return this._perimeter;
    };
    return Polygon;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(center, width, height) {
        var _this = _super.call(this, center, tops) || this;
        _this.center = center;
        _this.width = width;
        _this.height = height;
        _this._width = width;
        _this._height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this._width * this._height;
    };
    Rectangle.prototype.getPerimeter = function () {
        return (this._width + this._height) * 2;
    };
    return Rectangle;
}(Polygon));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(center, width) {
        var _this = _super.call(this, center, width, width) || this;
        _this.center = center;
        _this.width = width;
        return _this;
    }
    return Square;
}(Rectangle));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(center, radius) {
        var _this = _super.call(this, center) || this;
        _this._radius = radius;
        return _this;
    }
    Circle.prototype.getCircleArea = function () {
        return (Math.PI * (Math.pow(this._radius, 2)));
    };
    Circle.prototype.getCirclePerimeter = function () {
        return (2 * Math.PI * this._radius);
    };
    return Circle;
}(Shape));
var shapes = {
    Shape: Shape,
    Polygon: Polygon,
    Rectangle: Rectangle,
    Square: Square,
    Circle: Circle,
    Point: Point
};
var centerPoint = new Point(7, 5);
var point1 = new Point(3, 3);
var point2 = new Point(8, 3);
var point3 = new Point(11, 7);
var point4 = new Point(6, 7);
var tops = [point1, point2, point3, point4];
