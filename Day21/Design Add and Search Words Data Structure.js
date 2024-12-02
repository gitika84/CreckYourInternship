class WordDictionary {
    constructor() {
        this.root = {}; // Initialize the root of the Trie
    }

    addWord(word) {
        let node = this.root;
        for (const char of word) {
            if (!node[char]) {
                node[char] = {}; // Create a new node if the character doesn't exist
            }
            node = node[char];
        }
        node.isEnd = true; // Mark the end of the word
    }

    search(word) {
        const dfs = (index, node) => {
            if (index === word.length) {
                return !!node.isEnd; // Check if it's a valid word
            }

            const char = word[index];
            if (char === ".") {
                // Wildcard: Explore all possible paths
                for (const key in node) {
                    if (key !== "isEnd" && dfs(index + 1, node[key])) {
                        return true;
                    }
                }
                return false;
            } else {
                // Normal character
                if (!node[char]) return false;
                return dfs(index + 1, node[char]);
            }
        };

        return dfs(0, this.root); // Start the depth-first search
    }
}

// Example usage:
const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");

console.log(wordDictionary.search("pad")); // false
console.log(wordDictionary.search("bad")); // true
console.log(wordDictionary.search(".ad")); // true
console.log(wordDictionary.search("b..")); // true
