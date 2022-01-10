class LinkedListNode {
    __nextNode;
    previousNode;

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
}

class DoublyLinkedList {
    constructor(firstNode, lastNode) {
        this.firstNode = firstNode;
        this.lastNode = lastNode
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

    deleteFromStart() {
        this.firstNode = this.firstNode.nextNode;
    }

    read() {
        return this.firstNode?.data;
    }
}

class Queue {
    queue

    constructor() {
        this.queue = new DoublyLinkedList();
    }

    enqueue(data) {
        this.queue.insertAtEnd(data)
    }

    dequeue() {
        this.queue.deleteFromStart();
    }

    read() {
        return this.queue.read();
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.read());
queue.dequeue();
queue.dequeue();
console.log(queue.read());