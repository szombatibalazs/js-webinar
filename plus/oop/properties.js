/**
 * It returns the property names of the given object.
 * 
 * @param {object} o the object
 * @returns {string[]} the list of the properties of the object
 *                     or empty array if it is not an object
 */

module.exports = function propNames(o) {
    /*if (JSON.stringify(o).length == 0 || o.isObject == false) {
        throw new Error("Not an object or empty object!")
    } else {
        for (let prop in o) {
            console.log(o[prop]);
        }
    } Megcsinálni többféle módon!
    */
    return Object.keys(o);
}