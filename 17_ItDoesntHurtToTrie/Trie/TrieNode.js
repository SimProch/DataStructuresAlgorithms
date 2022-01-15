class TrieNode {
    children = {};
}

class Trie {
    rootNode = new TrieNode();

    search(word) {
        let currentNode = this.rootNode;
        for (let i = 0; i < word.length; i++) {
            const char = word[i]; 
            if (currentNode.children[char]) currentNode = currentNode.children[char];
            else return null;
        };
        return currentNode;
    }

    insert(word) {
        let currentNode = this.rootNode;
        for (let i = 0; i < word.length; i++) {
            const char = word[i]; 
            if (currentNode.children[char]) currentNode = currentNode.children[char];
            else {
                currentNode.children[char] = new TrieNode();
                currentNode = currentNode.children[char];
            }
        };
        currentNode.children["*"] = new TrieNode();
        return currentNode;
    }


    /**
     * Method that returns all complete words under a specific trie node
     * If called on root, this will return all complete words in the tree
     * The same function is called for children nodes and slowly builds up the words
     * If a key is `*`, it returns the complete word. If there are additional keys, it will keep going
     * 
     * @param {TrieNode} node specifies the node on which to find words 
     * @param {string} word is a word we search for in the trie
     * @param {string[]} words is the array of words 
     * @returns array of completed words in the trie
     */
    getAvailableWords(node = null, word = '', words = []) {
        const currentNode = node || this.rootNode;
        const entries = Object.entries(currentNode.children);
        entries.forEach(([key, childNode]) => {
            if (key == '*') words.push(word);
            else this.getAvailableWords(childNode, word + key ,words);
        })
        return words
    }

    autocomplete(prefix) {
        const currentNode = this.search(prefix);
        if (!currentNode) return null;
        return this.getAvailableWords(currentNode, prefix);
    }

    printAllKeys(node) {
        node ??= this.rootNode;
        const keys = Object.keys(node.children);
        keys.forEach(key => {
            console.log(key);
            if (node.children[key]) this.printAllKeys(node.children[key]);
        })
    }

    autocorrect(toCorrect) {
        let node = this.search(toCorrect);
        if (node) return toCorrect;
        while (!node) {
            toCorrect = toCorrect.slice(0, toCorrect.length - 1);
            node = this.search(toCorrect);
        }
        const words = this.getAvailableWords(node, toCorrect);
        return words[0];
    }
}

const trie = new Trie();
trie.insert('cat');
trie.insert('catnip');
trie.insert('catnap');
trie.insert('ace');
trie.insert('act');
// const words = trie.autocomplete('catn');
// console.log(words);
// trie.printAllKeys();
console.log(trie.autocorrect('caxasfdij'));
console.log(trie.autocorrect('catnar'));
console.log(trie.autocorrect('catn'));