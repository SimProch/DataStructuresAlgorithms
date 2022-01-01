# Big Oh In everyday Code

## Summary
- Chapter deals with a couple simple algorithms and explains the efficiency of such code and why is it so
- Keep in mind that the simple algorithms could have been made better, but contents purposely show worse
- Shows differences between Big Oh and actual runtime
- Big Oh is very valuable! However, the real run can actually be slower/faster, as Big Oh ignores constants
  - 6N operations is O(N) 
  - 6N^2 operations is O(N^2)
  - M + N operations is O(N)
  - M + 4N is O(N) 

## Algorithms
- Mean Average of Even Numbers - single loop
  - O(n)
  - Best case O(n)
  - Worse case O(3n)
- Word builder - nested loops
  - O(N^M)
  - N^2 with 2 letters, N^3 with 3 letters and so on
- Array sample - no loop
  - O(1)
- Average Celsius Reading - two loops
  - O(N)
  - Actually 2N iterations, but Big Oh ignores constants
- Clothing Labels - Nested loops (1 over N, 1 over 6 elements)
  - O(N)
  - Actually 6N, but Big Oh ignores constants
- Count the Ones - Nested loops (Array of arrays)
  - O(N)
  - Inner arrays can be flattened and iterated again
  - Tempting to say O(N*M)
- Palindrome - While until index is in middle
  - O(N)
  - Actually N / 2
- Get All Products - nested loop
  - O(N^2)
  - Actually N^2 / 2 as we always have `j = i + 1`
  - With different datasets, it's O(N*M)
- Password Cracker - (a..z, aa..zz)
  - With only alphabet, O(26^N)
  - Extremely slow

# Exercises start on page 109, solutions available on page 443
