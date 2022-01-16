const arr1 = [5,3,2,9,1];
const arr2 = [1,12,5]
console.log(getIndicesToSwap(arr1, arr2));

/**
 * Get indices to swap from 2 arrays so that their sum is equal
 * First, get sum from first array and add all numbers to dictionary
 * Then, get sum from second array and add all numbers to dictionary
 * Then, get the shift amount ((sum1 - sum2) / 2 is the amount we need to change between the two)
 * Then, iterate over second array and find a corresponding number
 * This is O(N + 2M) -> O(N + M) basically 
 */
function getIndicesToSwap(arr1, arr2) {
    const dict = {};
    let firstSum = 0;
    let secondSum = 0;
    arr1.forEach((num, index) => {
        firstSum+=num;
        dict[num] = index;
    })
    arr2.forEach((num, index) => {
        secondSum+=num;
        dict[num] = index;
    })

    const shiftAmount = (firstSum - secondSum) / 2;
    for (let i = 0; i < arr2.length; i++) {
        const num = arr2[i];
        if (dict[num + shiftAmount]) return [dict[num + shiftAmount], i];
    }
    return null;
}