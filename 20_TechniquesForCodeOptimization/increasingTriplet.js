const arr = [5,2,8,4,3,7];
// const arr = [5,2,8,4,3,2]; Original code dont work for this
const arr2 = [8,9,7,10];
const arr3 = [22, 25, 21, 18, 19.6, 17, 16, 20.5];
console.log(increasingTriplet(arr));
console.log(increasingTriplet(arr2));
console.log(increasingTriplet(arr3));

// Whenever we changed lowest, we reset medium to its original state
function increasingTriplet(arr) {
    let lowest = arr[0];
    let medium = Infinity;
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        if (lowest > current) {
            lowest = current;
        }
        else if (medium > current) medium = current;
        else return true;
    }
    return false
}