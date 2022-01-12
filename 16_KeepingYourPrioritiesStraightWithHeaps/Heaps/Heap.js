/**
 * Heap constructed using arrays
 * While heap is a tree, by cleverly working with indices, we can actually work with array as if it were a tree
 */
class Heap {
    data = [];

    getRootNode() {
        return this.data[0];
    }

    getLastNode() {
        return this.data[this.data.length - 1]
    }

    /**
     * Finds the left child
     * Because the tree is always complete:
     * - the root node is on 0th index
     * - the left child is on first index
     * - the right child is on second index
     * - the left child's left child is on third index and so on
     * - the left child's right child is on the fourth index
     * Because of that, we can easily find next node. For the first index to find left child:
     * - 2 * 1 = 2; 2 + 1 = 3;
     * - 2 * 2 = 2; 2 + 2 = 4;
     * So for left child, we just add 1 after doubling it.
     * Note that every next layer in a binary tree is double of previous - 1 -> 2 -> 4 -> 8
     * 
     * @param {number} parentIndex specifies the index from which to find child 
     * @returns index of child
     */
    getLeftChildIndex(parentIndex) {
        return (parentIndex * 2) + 1;
    }

    /**
     * Find the right child using the process described in method above
     * 
     * @param {number} parentIndex specifies the index from which to find child 
     * @returns index of child
     */
    getRightChildIndex(parentIndex) {
        return (parentIndex * 2) + 2;
    }

    /**
     * Inverse operation of getting child index. Rather than doubling to get to next level, we aim to get to previous.
     * That is why we divide by 2.
     * The - 1 is to ensure we can get to parent node from both left and right.
     * Remainder is cut off
     * 
     * @param {number} childIndex specifies the index of the child node in the array
     * @returns index of parent node in the array
     */
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }
}

/**
 * MaxHeap differs in insertion and deletion in that it looks for higher values
 */
class MaxHeap extends Heap {
    /**
     * The insert method places a new element at the end of the heap and then the node is moved upwards.
     * @param {number} value to insert into the heap 
     */
    insert(value) {
        this.data.push(value);
        let index = this.data.length - 1;
        let parentIndex = this.getParentIndex(index);
        while (this.data[parentIndex] < this.data[index]) {
            const temp = this.data[index];
            this.data[index] = this.data[parentIndex];
            this.data[parentIndex] = temp;
            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }
    }

    /**
     * The delete method removes the last element and then the node is moved downwards.
     */
    delete() {
        const lastValue = this.data.pop();
        let index = 0;
        this.data[index] = lastValue;
        let leftChildIndex = this.getLeftChildIndex(index);
        let rightChildIndex = this.getRightChildIndex(index);
        while (this.data[leftChildIndex] > this.data[index] || this.data[rightChildIndex] > this.data[index]) {
            const temp = this.data[index];
            const higherIndex = this.data[leftChildIndex] > (this.data[rightChildIndex] || -Infinity) ? leftChildIndex : rightChildIndex;
            this.data[index] = this.data[higherIndex];
            this.data[higherIndex] = temp;

            index = higherIndex;
            leftChildIndex = this.getLeftChildIndex(index);
            rightChildIndex = this.getRightChildIndex(index);
        }
    }
}

/**
 * MinHeap differs in insertion and deletion in that it looks for smaller values
 */
class MinHeap extends Heap {
    /**
     * The insert method places a new element at the end of the heap and then the node is moved upwards.
     * @param {number} value to insert into the heap 
     */
    insert(value) {
        this.data.push(value);
        let index = this.data.length - 1;
        let parentIndex = this.getParentIndex(index);
        while (this.data[parentIndex] > this.data[index]) {
            const temp = this.data[index];
            this.data[index] = this.data[parentIndex];
            this.data[parentIndex] = temp;
            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }
    }

    /**
     * The delete method removes the last element and then the node is moved downwards.
     */
    delete() {
        const lastValue = this.data.pop();
        let index = 0;
        this.data[index] = lastValue;
        let leftChildIndex = this.getLeftChildIndex(index);
        let rightChildIndex = this.getRightChildIndex(index);
        // The only difference is comparing and `Infinity` because we are looking for smaller values
        while (this.data[leftChildIndex] < this.data[index] || this.data[rightChildIndex] < this.data[index]) {
            const temp = this.data[index];
            const smallerIndex = this.data[leftChildIndex] < (this.data[rightChildIndex] || Infinity) ? leftChildIndex : rightChildIndex;
            this.data[index] = this.data[smallerIndex];
            this.data[smallerIndex] = temp;

            index = smallerIndex;
            leftChildIndex = this.getLeftChildIndex(index);
            rightChildIndex = this.getRightChildIndex(index);
        }
    }
}

const heap = new MaxHeap();
heap.insert(10);
heap.insert(5);
heap.insert(20);
heap.insert(30);
heap.insert(40);
heap.delete();
console.log(heap);
const heap2 = new MinHeap();
heap2.insert(10);
heap2.insert(5);
heap2.insert(20);
heap2.insert(30);
heap2.insert(40);
heap2.delete();
console.log(heap2);