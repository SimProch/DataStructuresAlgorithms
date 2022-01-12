class TreeNode {
    constructor(value, left, right) {
        this.value = value;
        this.leftChild = left;
        this.rightChild = right;
    }

    findNodeWith(value) {
        if (value === this.value) return this;
        if (value < this.value) return this.leftChild?.findNodeWith(value);
        if (value > this.value) return this.rightChild?.findNodeWith(value);
        return null;
    }

    insert(value) {
        if (value === this.value) console.warn("Value already inserted");
        if (value < this.value) {
            if (this.leftChild) this.leftChild.insert(value)
            else this.leftChild = new TreeNode(value);
        }
        if (value > this.value) {
            if (this.rightChild) this.rightChild.insert(value);
            else this.rightChild = new TreeNode(value);
        }
    }

    /**
     * Deletion is fairly complicated. The entire process is in README
     * Basically, if a node is deleted, it has to be replaced by something
     * If the value is equal, the node will be replaced by:
     * - left child, if it is the only child
     * - right child, if it is the only child
     * - successor node, if it has both children.
     * To find successor node, `lift` function is used. 
     */
    delete(valueToDelete) {
        if (valueToDelete > this.value) this.rightChild = this.rightChild?.delete(valueToDelete)
        if (valueToDelete < this.value) this.leftChild = this.leftChild?.delete(valueToDelete)
        if (valueToDelete === this.value) {
            if (!this.leftChild) return this.rightChild;
            if (!this.rightChild) return this.leftChild;
            this.rightChild = this.rightChild.lift(this)
        }
        return this;
    }

    /**
     * The lift function is used to find successor node, and replace the path to successor node.
     * This function overwrites the value of parent with current node, if it is the one lifted.
     * Note that the successor object is not copied - only its value is transfered to the original parent -
     * The reference to the parent is passed all the way to successor node.
     * All other nodes must be 'moved' in order to keep relationship between nodes
     * This function is called always on the right node of the deleted node (see `delete` function).
     * Because of that, 
     */
    lift(parentNodeToDelete) {
        if (this.leftChild) {
            this.leftChild = this.leftChild?.lift(parentNodeToDelete);
            return this;
        }
        parentNodeToDelete.value = this.value;
        return this.rightChild;
    }

    /**
     * The traverse function moves through the tree
     * Every node has a traverse function.
     * To do this in a sorted way, we traverse to the left side first, then print value, then traverse to the right
     * The reason is as follows:
     * - Node 20
     *  - Node 10 (left)
     *  - Node 30 (right)
     * First, we move to node 10 (left node - lowest). Then it's value is printed.
     * Then, the value of parent is printed (parent - middle value) 
     * Lastly, we move to node 30 (right node - highest), whose value is printed as well
     * This way, we can traverse the entire tree in a sorted manner
     * This is called `inorder traversal`.
     */
    traverse() {
        this.leftChild?.traverse();
        console.log(this.value);
        this.rightChild?.traverse();
    }
}

const root = new TreeNode(50);
const values = [25, 75, 10, 33, 56, 89, 4, 11, 30, 40, 52, 61, 82, 95]
values.forEach(i => root.insert(i));
root.traverse();