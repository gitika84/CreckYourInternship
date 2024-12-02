class Trie {
    constructor() {
        this.root = {}; // Root of the Trie
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node[char]) {
                node[char] = {}; // Create a new node for the character if it doesn't exist
            }
            node = node[char];
        }
        node.isEnd = true; // Mark the end of the word
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node[char]) {
                return false; // Character not found
            }
            node = node[char];
        }
        return !!node.isEnd; // Check if it's a valid word
    }

    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node[char]) {
                return false; // Prefix not found
            }
            node = node[char];
        }
        return true; // Prefix exists in the Trie
    }
}

// Example usage:
const trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple"));   // true
console.log(trie.search("app"));     // false
console.log(trie.startsWith("app")); // true

trie.insert("app");
console.log(trie.search("app"));     // true
