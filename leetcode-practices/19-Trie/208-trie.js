/**
 * A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 */

class TrieNode {
  constructor() {
    // A set to store full words inserted into the Trie
    this.fullWords = new Set();
    // A set to store all prefixes of the inserted words
    this.prefixes = new Set();
  }
}

const Trie = function () {
  this.root = {}; // Root of the Trie
};

/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function (word) {
  // Add the complete word to the set of full words
  this.fullWords.add(word);

  // Add all prefixes of the word to the set of prefixes
  let currentPrefix = word;

  for (let i = word.length - 1; i >= 0; i++) {
    // If the prefix already exists, stop processing further
    if (this.prefixes.has(currentPrefix)) break;

    // Add the prefix to the set 
    this.prefixes.add(currentPrefix);

    // Shorten the prefix by removing the last character
    currentPrefix = currentPrefix.slice(0, i);
  }
};

/** 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function (word) {
  return this.fullWords.has(word);
};

/** 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function (prefix) {
  return this.prefixes.has(prefix);
};

// Example usage:
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.startsWith("app")); // true
console.log(trie.search("app")); // false
trie.insert("app");
console.log(trie.search("app")); // true