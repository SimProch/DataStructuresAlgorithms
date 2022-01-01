# Data structures

## Why do we care
- When creating code, choosing the right data structure and algorithm is key to its efficiency
- For example, an array
  - Reading an array on a specific index is constant
  - Searching for a specific item is variable
    - Is the array sorted?
    - Which algorithm is used?
    - Do we only want to retrieve first occurence or all?
  - Inserting a specific item depends on the position
    - At the end, O(1) - we only add 1
    - At the beginning, O(n) - we need to add 1 and move all others 
  - Deleting a specific item depends on position
    - At the end, O(1) - we only remove 1
    - At the beginning, O(n) - we need to remove 1 and move all others
- On Set, it is similar to an array. Deleting is same. Inserting is different
  - Set allows only unique values
  - Set has to first be searched for the value before inserting
  - Array will have faster insertion

From the outside, it may look that Array should always be chosen as it is faster than Set in inserting and everything else is identical. However, here lies the decision - Is it more important for our code to have no duplicates, or faster insertion? We need to choose wisely.

# Exercises start on page 19, solutions available on page 439