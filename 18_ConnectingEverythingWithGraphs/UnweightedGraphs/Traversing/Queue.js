function Queue() {
    this.state = [];
    this.enqueue = (val) => this.state.push(val);
    this.dequeue = () => this.state.shift();
    this.read = () => this.state[0];
}

module.exports = {
    Queue
}