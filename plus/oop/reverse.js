/**
 * It reverses the given object, i.e. return a copy of the object 
 * where the keys have become the values and the values the keys
 * 
 * @param {object} o the object
 * @returns {object} the new object
 */

module.exports = function revProps(o) {
    /*if (JSON.stringify(o) === '{}' || o.isObject == false) {
        let o2 = {};
        for (let i in o) {
            o2[o[i]] = i;
        }
        return o2;
    } else {
        throw new Error('Not an object / empty object!');
    }*/
    if (typeof o !== "object") {
        throw new Error("Not an object!");
    }
    
    let result = {};
    for (const key in o) {
        result[o[key]] = key;
    }
    
    return result;
}