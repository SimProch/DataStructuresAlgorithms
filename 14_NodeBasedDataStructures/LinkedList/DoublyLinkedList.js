/**
 * Linked list using objects
 */
class LinkedListNode {
    __nextNode;
    constructor(data) {
        this.data = data;
    }

    get nextNode() { 
        return this.__nextNode;
    }
    set nextNode(val) {
        this.__nextNode = val;
        val.previousNode = this;
    }
    previousNode;
}

class DoublyLinkedList {
    constructor(firstNode, lastNode) {
        this.firstNode = firstNode;
        this.lastNode = lastNode
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

    insertAtEnd(dataToAdd) {
        const nodeToAdd = new LinkedListNode(dataToAdd);
        if (!this.firstNode) {
            this.firstNode = nodeToAdd;
            this.lastNode = nodeToAdd;
            return
        }
        this.lastNode.nextNode = nodeToAdd;
        this.lastNode = nodeToAdd;
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

    printAllReversed() {
        let currentNode = this.lastNode;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.previousNode;
            if (!currentNode) return;
        }
    }
}

const firstNode = new LinkedListNode("once");
const secondNode = new LinkedListNode("upon");
const thirdNode = new LinkedListNode("a");
const fourthNode = new LinkedListNode("time");

firstNode.nextNode = secondNode;
secondNode.nextNode = thirdNode;
thirdNode.nextNode = fourthNode;

const doublyLinkedList = new DoublyLinkedList(firstNode, fourthNode);
doublyLinkedList.printAllReversed();
