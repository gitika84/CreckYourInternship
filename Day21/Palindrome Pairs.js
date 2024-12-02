class TrieNode {
    constructor() {
        this.children = {};
        this.wordIndex = -1; // Stores index of word ending here
        this.palindromeSuffixes = []; // Indices of words whose suffix forms a palindrome
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word, index) {
        let node = this.root;

        // Insert word in reverse order
        for (let i = word.length - 1; i >= 0; i--) {
            const char = word[i];

            // Check if the prefix to the current point is a palindrome
            if (this.isPalindrome(word, 0, i)) {
                node.palindromeSuffixes.push(index);
            }

            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }

            node = node.children[char];
        }

        // Mark the end of the word
        node.wordIndex = index;

        // Any remaining empty suffix is a palindrome
        node.palindromeSuffixes.push(index);
    }

    search(word, index, result) {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];

            // Check if remaining substring is a palindrome and node has a word
            if (node.wordIndex !== -1 && node.wordIndex !== index && this.isPalindrome(word, i, word.length - 1)) {
                result.push([index, node.wordIndex]);
            }

            if (!node.children[char]) {
                return;
            }

            node = node.children[char];
        }

        // Check all palindrome suffixes for the current node
        for (const suffixIndex of node.palindromeSuffixes) {
            if (suffixIndex !== index) {
                result.push([index, suffixIndex]);
            }
        }
    }

    isPalindrome(word, left, right) {
        while (left < right) {
            if (word[left++] !== word[right--]) {
                return false;
            }
        }
        return true;
    }
}

function palindromePairs(words) {
    const trie = new Trie();
    const result = [];

    // Insert all words into the Trie
    for (let i = 0; i < words.length; i++) {
        trie.insert(words[i], i);
    }

    // Search for all palindrome pairs
    for (let i = 0; i < words.length; i++) {
        trie.search(words[i], i, result);
    }

    return result;
}

// Example usage:
const words = ["abcd", "dcba", "lls", "s", "sssll"];
console.log(palindromePairs(words)); // [[0,1],[1,0],[3,2],[2,4]]
