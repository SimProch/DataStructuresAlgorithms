"use strict";
/**
 * The create subarray is another way of accessing original array with less overhead.
 * The performance is better due to function call being less expensive than Object.defineProperty.
 * It is actually done by using another object and using scoping
 * 
 * @param {number} start is the number from which to start create subarray
 * @param {number} end is the number to finish creating subarray
 * @returns 
 */
function createSubarray(original, from, to) {
    return {
       get: (i) => original[i+from],
       set: (i, val) => original[i + from] = val,
       length: to - from,
       forEach: function(cb) {
           for (let i = 0; i < this.length; i++) {
               cb(this[i], i);
           }
       }
    }
}


const foo = [1, 2, 3, 4, 5];
const bar = createSubarray(foo, 2, 4);
bar.set(0, 'hello, world');
console.log(bar);
console.log(foo);