const Queue = require("./Queue").Queue;

function Printer() {
    this.queue = new Queue();
    this.add_print_job = (job) => this.queue.enqueue(job);
    this.run = () => {
        while (this.queue.read()) {
            const toPrint = this.queue.dequeue();
            this.print(toPrint);
        }
    }
    this.print = (job) => console.log(job);
}

const printer = new Printer();
printer.add_print_job("First document");
printer.add_print_job("Second document");
printer.add_print_job("Third document");
printer.run();