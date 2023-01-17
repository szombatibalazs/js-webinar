/**
 * Create the Circle class.
 *
 * @typedef {object} Circle
 * @property {number} r the radius of the circle
 * @function getArea return the area of the circle
 * @function getPerimeter return the perimeter of the circle
 */

module.exports = class Circle {
    constructor(r) {
        if (!(typeof r === "number" && r > 0)) {
            throw new Error("Invalid circle radius (make sure it's a number above 0)!");
        }
        this.r = r;
    }

    getArea() {
        return this.r ** 2 * Math.PI;
    }

    getPerimeter() {
        return 2 * Math.PI * this.r;
    }
}