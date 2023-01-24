/**
 * It wait for the given seconds, but at most 10 seconds.
 *
 * @param {number} sec the seconds to wait
 * @returns {Promise} the promise which resolves when wait if over
 *                    or rejects if parameter is not correct
 */

module.exports = async function waitFor(s) {
    const countMs = s * 1000;
    const maxMs = 10000;

    if (typeof s !== 'number') {
        throw new Error('Incorrect argument!');
    }
    return new Promise((resolve) => {
        setTimeout(resolve, Math.min(countMs, maxMs));
    });
}
