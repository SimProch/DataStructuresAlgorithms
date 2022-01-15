# It Doesn't Hurt to Trie

## Tries
- A tree structure ideal for text-based features, e.g. autocomplete
- Pronounced "try" (though it comes from `retrieval`, so it could be pronounced `tree`. But that makes it confusing)
- A tree that allows any number of children, in contrast to binary tree/heaps
- Each node contains hash table to point towards additional nodes 
- Building Trie
  - Basically a nested object
  - Every object points to another object
  - We can build `ace` using `'a' -> 'c' -> 'e'` - a trie with 3 levels
  - We can build `act` using `'a' -> 'c' -> 't'` - a trie with 3 levels
  - In the above example, `'c'` would point to 2 other nodes - `'e' and 't'`
  - We can use asterisks `*` to specify whether a word is complete
    - That way, we can find `bat` and `batter`
      - `bat` with `b -> a -> t -> *` keys
      - `batter` with `b -> a -> t -> t -> e -> r` keys
      - We use asterisk to differentiate between complete words and incomplete
      - In the previous example, `ace` would really be stored as `ace*` to make sure a word is complete
- Searching
  - Do we search for complete word or prefix?
  - For prefix
    - Create variable for `currentNode`
    - Iterate over a string we want
    - In each iteration, we look for `currentNode` children if it contains the character we want
    - If it doesn't, we return null - it does not exist
    - If it does, we update the `currentNode` in previous step and repeat
    - When we reach the end of the string, we've found what we were searching for
  - Efficiency is not O(N) as it does not depend on the data structure - rather the word we use it upon
  - Efficiency is not really O(1) as it depends on the input string, so it's not constant
  - Some sources call this O(K) - but really, any other letter than `N` works well
  - It is extremely efficient. It does not depend on the size of data, only on the size of input.
- Insertion
  - Similar to search
  - We define `currentNode`
  - As we iterate over string, we see if char exists already in the node's children keys
  - If it does, we update `currentNode`
  - If it doesn't, we extend the children on current node
  - We then go back to previous step (we insert the entire string)
  - After we insert the final character, we ad `*` as a child node to indicate the word is complete
- Deletion does not quite make sense in this context
- To nodes, we can also add any additional properties.
  - For autocomplete, we don't want to return all words - just most popular
  - We can add `popularity` property to show sort the results based on popularity, for example

## Additional trees
- So far we've covered tries, heaps and binary search trees. There are many more
  - AVL, Red-Black, 2-3-4, ...
  - Each tree has unique specific traits


# Exercises start on page 329, solutions available on page 459