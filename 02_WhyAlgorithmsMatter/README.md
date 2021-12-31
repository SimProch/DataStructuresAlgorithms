# Algorithms

## Why do we care
- In code, we express what needs to be done by lines of code
- Effectively, every line of code we write is some kind of algorithms
- Algorithm basically means *instructions to follow*/*steps to perform*
- If we define unnecessary steps, the code will be slower
- With algorithms, we can reduce the complexity of code

## Example
- Take an unsorted array, find first item and return it
  - We need to go one by one in the array and return the first item that matches our request
  - Worst case scenario - we will find this item at the end of array
  - If array has 1_000_000 items, we will perform 1_000_000 steps
    - We could go from end, but if it is on the first index, we will still take N steps
- Take a sorted array, find first item and return it
  - We have to take log<sub>2</sub> N steps to find the item
  - We look at the middle and see if what we are searching for is higher/lower.
    - If lower, we'll take the lower half do the same.
    - If higher, we'll take higher half and do the same.
    - If found, we'll return it
  - If the array length is 1_000_000 and:
    - we search for 500_000, we find it in the first step
    - we search for 2, we find it in around 20 steps
    - The complexity is log N

## Summary
- Choosing the correct algorithm is not enough - While we can use binary search on array, we only can use it if we choose the correct data structure (sorted array)
- Both Data Structures and Algorithms are extremely important

