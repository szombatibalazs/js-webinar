/**
 * It deletes the given property of the given object
 * and returns the new object.
 * The function must not modify the original object!
 * 
 * @param {object} o the object
 * @param {string} key the name of the property to delete
 * @returns {object} the new object without the given property
 */

module.exports = function delProp(o, key) {
    if (typeof o !== "object") {
        throw new Error("Not an object!");
    }
    if (typeof key !== "string") {
        throw new Error("Not a string!");
    }

    let o2 = Object.assign({}, o);
    delete o2[key];
    
    return o2;
}