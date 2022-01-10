"use strict";
/**
 * The createSubarray function allows to create a portion of an array with actual reference to the array it was created from
 * 
 * @param {number} start is the number from which to start create subarray
 * @param {number} end is the number to finish creating subarray
 * @returns 
 */
Array.prototype.createSubarray = function (start, end) {
    const arr = [];
    for (let i = 0; start <= end; start++, i++) {
        Object.defineProperty(arr, i, {
            get: () => this[i],
            set: (value) => {
                this[i] = value;
                return value;
            }
        });
    }
    return arr;
}


const foo = [1, 2, 3, 4, 5];
const bar = foo.createSubarray(2, 4);
console.log(bar);
bar[0] = 'hello, world';
console.log(bar);
console.log(foo);