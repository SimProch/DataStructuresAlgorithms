// First: Drawing what a heap would like after adding value. Answer is obvious - add node to the right under 5
// Second: Drawing what a heap would like after deleting rood node. Basically: delete 10, move 9 up, move 6 up, put 3 instead of 6
// Third: Adding to heap 55,22,34,10,2,99,68. What would the heap look like if we would pop from the heap and insert into array?
// Answer: Depends on heap. If it's max heap, then it would be in descending order (we remove 99 first and then push into array)
// If it's min heap, it'd be in ascending order