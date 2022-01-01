/**
 * Intersection of arrays being O(N)
 */
function one(array1, array2) {
    const dict = {};
    array1.forEach(i => dict[i] = true);
    const result = array2.filter(i => dict[i]);
    console.log(result);
}

/**
 * Find duplicates
 */
function two(arr) {
    const dict = {};
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        dict[item] ??= 0;
        dict[item]++;
        if (dict[item] > 1) {
            console.log(item);
            return;
        }
    }
    console.log("No dupes");
}

/**
 * Function that takes a string and returns missing letter
 */
function three(str) {
    const chars = Array.from({ length: 26 }, (_, i) => {
        const charCode = i + 65;
        return String.fromCharCode(charCode);
    })
    const dict = {};
    chars.forEach(i => dict[i] = false);
    for (let i = 0; i < str.length; i++) {
        const uppercaseItem = str[i].toUpperCase();
        delete dict[uppercaseItem];
    }
    console.log(Object.keys(dict));
}

/**
 * First non duplicate in string
 */
function four(str) {
    const dict = {};
    for (let i = 0; i < str.length; i++) {
        const item = str[i];
        dict[item] ??= 0;
        dict[item]++;
        if (dict[item] > 1) break;
    }
    for (let i = 0; i < str.length; i++) {
        const item = str[i];
        if (dict[item] === 1) {
            console.log(item);
            return;
        }
    }
    console.log("Nothing")
}

/**
 * Removing first and last in array until 1 remains
 */
function five() {
    console.log("O(log N)")
}

console.log("Intersection");
one([1,2,3,4,5], [0,2,4,6,8]);
console.log("Dupes");
two(["a", "b", "c", "d", "c", "e", "f"]);
console.log("Alphabet");
three("the quick brown box jumps over a lazy dog");
console.log("first non-dupe");
four("minimum");