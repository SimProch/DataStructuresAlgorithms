/**
 * Linked list using objects
 */
class LinkedListNode {
    constructor(data) {
        this.data = data;
    }

    nextNode;
}

class LinkedList {
    constructor(firstNode) {
        this.firstNode = firstNode;
    }

    read(indexToFind) {
        let currentNode = this.firstNode;
        let currentIndex = 0;
        while (currentIndex < indexToFind) {
            currentNode = currentNode.nextNode;
            currentIndex++;
            if (!currentNode) return null
        }
        return currentNode.data;
    }

    findIndex(itemTofind) {
        let currentNode = this.firstNode;
        let currentIndex = 0;
        while (currentNode.data !== itemTofind) {
            currentNode = currentNode.nextNode;
            currentIndex++;
            if (!currentNode) return null
        }
        return currentIndex;
    }

    insert(indexToFind, dataToAdd) {
        const nodeToAdd = new LinkedListNode(dataToAdd);
        if (indexToFind == 0) {
            nodeToAdd.nextNode = this.firstNode;
            this.firstNode = nodeToAdd;
            return;
        }
        let currentNode = this.firstNode;
        let currentIndex = 0;
        while (currentIndex < indexToFind) {
            currentNode = currentNode.nextNode;
            currentIndex++;
            if (!currentNode) return null
        }
        nodeToAdd.nextNode = currentNode.nextNode;
        currentNode.nextNode = nodeToAdd;
    }

    delete(index) {
        if (index === 0) {
            this.firstNode = this.firstNode.nextNode;
            return;
        }
        let currentNode = this.firstNode;
        let currentIndex = 0;
        while (currentIndex < index - 1) {
            currentNode = currentNode.nextNode;
            currentIndex++;
            if (!currentNode) return null
        }
        const nodeAfterDeletedNode = currentNode.nextNode?.nextNode;
        currentNode.nextNode = nodeAfterDeletedNode
    }

    printAll() {
        let currentNode = this.firstNode;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.nextNode;
            if (!currentNode) return;
        }
    }

    findLast() {
        let currentNode = this.firstNode;
        while (currentNode) {
            currentNode = currentNode.nextNode;
            if (!currentNode.nextNode) return currentNode.data
        }
    }

    /**
     * Keep track of nodes
     * Keep in mind that references cant be changed, lest deletion won't work
     */
    reverse() {
        let currentNode = this.firstNode;
        let previousNode;
        while (currentNode) {
            const nextNode = currentNode.nextNode;
            currentNode.nextNode = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }
        this.firstNode = previousNode;
    }

    /**
     * Change the "data" property and "nextNode". Do not change node itself.
     */
    deleteMiddleNode(node) {
        node.data = node.nextNode.data;
        node.nextNode = node.nextNode.nextNode;
    }
}

const firstNode = new LinkedListNode("once");
const secondNode = new LinkedListNode("upon");
const thirdNode = new LinkedListNode("a");
const fourthNode = new LinkedListNode("time");

firstNode.nextNode = secondNode;
secondNode.nextNode = thirdNode;
thirdNode.nextNode = fourthNode;

const linkedList = new LinkedList(firstNode);
// linkedList.printAll()
linkedList.reverse();
// linkedList.printAll()
// linkedList.reverse();

linkedList.deleteMiddleNode(secondNode);
linkedList.printAll();