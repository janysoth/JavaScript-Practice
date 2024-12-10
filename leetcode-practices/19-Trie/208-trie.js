class Trie {
  constructor() {
    // A set to store full words inserted into the Trie
    this.fullWords = new Set();
    // A set to store all prefixes of the inserted words
    this.prefixes = new Set();
  }

  /**
   * Inserts a word into the Trie.
   * @param {string} word
   */
  insert(word) {
    if (!this.fullWords) throw new Error("fullWords not initialized properly");
    // Add the complete word to the set of full words
    this.fullWords.add(word);

    // Add all prefixes of the word to the set of prefixes
    let currentPrefix = word;
    for (let i = word.length - 1; i >= 0; i--) {
      // If the prefix already exists, stop processing further
      if (this.prefixes.has(currentPrefix)) {
        break;
      }

      // Add the prefix to the set
      this.prefixes.add(currentPrefix);
      // Shorten the prefix by removing the last character
      currentPrefix = currentPrefix.slice(0, i);
    }
  }

  /**
   * Checks if the word exists in the Trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    return this.fullWords.has(word);
  }

  /**
   * Checks if any word in the Trie starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    return this.prefixes.has(prefix);
  }
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.startsWith("app")); // true
console.log(trie.search("app")); // false
trie.insert("app");
console.log(trie.search("app")); // true