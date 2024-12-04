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
    this.children = {}; // Holds child nodes
    this.isEnd = false; // Marks if it's the end of a word
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
  let node = this.root;  // Start from the root node
  for (let char of word) {
    if (!node[char]) {
      node[char] = {};  // Create a new node if the character doesn't exist
    }
    node = node[char];  // Move to the next node
  }
  node.isEnd = true;  // Mark the end of the word
};

/** 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function (word) {
  let node = this.root;
  for (let char of word) {
    if (!node[char]) {
      return false;  // If the character is not found, return false
    }
    node = node[char];  // Move to the next node
  }
  return node.isEnd === true;  // Return true if the word ends here
};

/** 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  for (let char of prefix) {
    if (!node[char]) {
      return false;  // If the character is not found, return false
    }
    node = node[char];  // Move to the next node
  }
  return true;  // If we reach the end of the prefix, return true
};

// Example usage:
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));  // true
console.log(trie.search("app"));    // false
console.log(trie.startsWith("app")); // true