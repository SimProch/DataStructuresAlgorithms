function getArrayOf1_000_000() {
    return Array.from({ length: 1_000_000 }, (i, index) => index + 1);
}

module.exports = {
    getArrayOf1_000_000
}