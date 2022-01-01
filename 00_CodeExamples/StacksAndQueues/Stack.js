function Stack() {
    this.state = [];
    this.push = (val) => this.state.push(val);
    this.pop = () => this.state.pop();
    this.read = () => this.state[this.state.length - 1];
}

module.exports = {
    Stack
}