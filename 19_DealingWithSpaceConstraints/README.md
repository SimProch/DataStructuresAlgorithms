# Dealing with Space Constraints

## Summary
- Space complexity defines how much memory a function takes
```js
const result = [];
for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + 1);
}
// vs
for (let i = 0; i < arr.length; i++) {
    arr[i] += 1;
}
```
- In the example above, we perform identical operations
- Creating new array and populating it with same elements and adding `1` to them has space complexity O(N)
  - We are effectively allocating more memory due to creation of new array
  - If we make the change in place, we work with current array, effectively not using any new memory
  - The second has space complexity of O(1)
- Recursion always adds a unit of space complexity due to calling itself (Maximum call stack size exceeded is a result of this)
- We need to consider tradeoffs between space complexity and time complexity
  - Do we value space over time?
  - Do we want our arrays immutable or not?
  - What do we want to achieve and what are the tradeoffs

# Exercises start on page 395, solutions available on page 464
