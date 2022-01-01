const Stack = require("./Stack").Stack;

function Linter() {
    this.openingBraces = ["(", "[", "{"]
    this.closingBraces = [")", "]", "}"]
    this.openToClose = { "(": ")", "[": "]", "{": "}" }
    this.isOpeningBrace = (brace) => this.openingBraces.includes(brace);
    this.isClosingBrace = (brace) => this.closingBraces.includes(brace);
    this.openingMatchesClosing = (opening, closing) => this.openToClose[opening] === closing;
    this.bracketStack = new Stack();
    this.lint = (line) => {
        const iterator = line.split("").values();
        let col = 0;
        let current = iterator.next();
        while (!current.done) {
            col++;
            const char = current.value;
            if (this.isOpeningBrace(char)) this.bracketStack.push(char);
            else if (this.isClosingBrace(char)) {
                const lastBrace = this.bracketStack.pop();
                if (!this.openingMatchesClosing(lastBrace, char)) {
                    console.error(`Error on column ${col}. "${char}" has no opening bracket.`)
                    return false;
                }
            }
            current = iterator.next();
        }
        const lastStackItem = this.bracketStack.read()
        if (lastStackItem) {
            console.error(`"${lastStackItem}" was opened, but has no closing bracket.`)
            return false;
        }
        console.log("Parsed correctly line " + line)
        return true;
    }
}

const linter = new Linter();
linter.lint("var a = 1;")
linter.lint("(var a = 1;)")
linter.lint("(var a = 1;}")
linter.lint("{var a = 1;()")