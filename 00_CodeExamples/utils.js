function getArrayOf1_000_000_Sorted() {
    return Array.from({ length: 1_000_000 }, (i, index) => index + 1);
}

function getArrayOf1_000_000_Randomized() {
    return Array.from({ length: 1_000_000 }, () => Math.round(Math.random() * 1000000));
}

module.exports = {
    getArrayOf1_000_000_Sorted,
    getArrayOf1_000_000_Randomized
}