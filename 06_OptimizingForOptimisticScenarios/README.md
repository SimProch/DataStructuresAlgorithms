# Optimizing for Optimistic Scenarios

## How
- In this chapter, we are looking into different speeds for different cases
- Insertion sort was introduced
- Speeds:
  - All O(N^2)
  - Sorted
    - Bubble sort - fastest - N steps
    - Selection sort - slowest - N^2 / 2 steps
    - Insertion sort - middle - 2N steps
  - Reversed
    - Bubble sort - slowest - N^2 steps
    - Selection Sort - fastest - N^2 / 2 steps
    - Insertion sort - middle - N^2 / 2 steps
  - Randomized
    - Bubble sort - slowest - N^2 steps
    - Selection Sort - middle - N^2 / 2 steps
    - Insertion sort - fastest - N^2 / 4 steps (variable)
- Insertion sort works best on average for best-case and average-case scenarios
- Optimization should be done with regards of which case do we want to cover
- Most likely, we want to cover average-case scenario

# Exercises start on page 93, solutions available on page 442
