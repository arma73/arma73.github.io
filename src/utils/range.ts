/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments to numbers.
 *
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 *
 * @returns {Array} Returns the new array of numbers.
 */
export const range = (
    start: number,
    end: number,
    step: number,
    fromRight: boolean
): Array<number> => {
    let index = -1,
        length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
    const result = new Array<number>(length);

    while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
    }

    return result;
};
