// first wants to define space complexity of Word Builder from previous pages. The space complexity is O(N^2)
    // it creates new array and populates it in nested loop
// second wants to define space complexity. Again, creating new array. This is O(N)
// Third wants a function to reverse an array with O(1) space complexity
function third(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}
// fourth wants to fill in table of time and space complexity based on 3 implementations
    // Version       Time Complexity         Space Complexity
    // V1               O(N)                     O(N);          -- for loop with new array
    // V2               O(N)                     O(1);          -- for loop, but in place
    // V3               O(N)                     O(N);          -- recursion