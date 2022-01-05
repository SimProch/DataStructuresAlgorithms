// O(N^2)
function fib(n) {
    if (n === 0 || n === 1) return n;
    return fib(n - 1) + fib(n-2);
}
// O(N)
function fibV2(n, dict = {}) {
    if (n === 0 || n === 1) return n;
    if (!dict[n]) dict[n] = fibV2(n - 2, dict) + fibV2(n - 1, dict) 
    return dict[n];
}

function fibV3(n) {
    if (n === 0) return n;
    let previous = 0;
    let result = 1;
    for (let i = 1; i < n; i++) {
        let temp = previous;
        previous = result;
        result = temp + previous;
    }
    return result
}

console.time("first")
console.log(fib(40)) // 1.48s
console.timeEnd("first")
console.time("second")
console.log(fibV2(40)) // 0.3ms
console.timeEnd("second")
console.time("third")
console.log(fibV3(40)) // 0.3ms
console.timeEnd("third")
