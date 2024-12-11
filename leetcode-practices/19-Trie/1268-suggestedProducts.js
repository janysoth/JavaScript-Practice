/**
 * You are given an array of strings products and a string searchWord.

Design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return a list of lists of the suggested products after each character of searchWord is typed.
 */

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
const suggestedProducts = function (products, searchWord) {
  products.sort();

  let result = [];
  let prefix = "";

  for (let char of searchWord) {
    // Update the prefix with the current character
    prefix += char;

    // Filter products that match the prefix and limit to 3 suggestions
    const suggestions = products.filter(product => product.startsWith(prefix));

    result.push(suggestions.slice(0, 3));
  }

  return result;
};

// Example Usage
let products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
let searchWord = "mouse";
console.log(suggestedProducts(products, searchWord));