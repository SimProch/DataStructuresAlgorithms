/**
 * We iterate over array and compare all elements to the left with current
 * If they are out of order, we move them to the right, effectively removing current element and creating gap
 * Then, to the gap, we insert the value of current iteration (temp value)
 * If they are not out of order, we keep it
 * We repeat this process until the array is sorted 
 * 
 * Extremely slow - log(N^2). For 100 elements, this takes 5k steps.
 */
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        const temp = array[i];
        let position = i - 1;
        while (position >= 0) {
            if (array[position] > temp) {
                array[position + 1] = array[position];
                position--;
            } else break;
        }
        array[position + 1] = temp;
    }
}

module.exports = {
    insertionSort
}