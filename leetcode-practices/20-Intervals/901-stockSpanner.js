/**
 * Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.

The span of the stock's price in one day is the maximum number of consecutive days (starting from that day and going backward) for which the stock price was less than or equal to the price of that day.

For example, if the prices of the stock in the last four days is [7,2,1,2] and the price of the stock today is 2, then the span of today is 4 because starting from today, the price of the stock was less than or equal 2 for 4 consecutive days.
Also, if the prices of the stock in the last four days is [7,34,1,2] and the price of the stock today is 8, then the span of today is 3 because starting from today, the price of the stock was less than or equal 8 for 3 consecutive days.
Implement the StockSpanner class:

StockSpanner() Initializes the object of the class.
int next(int price) Returns the span of the stock's price given that today's price is price.
 */

class StockSpanner {
  constructor() {
    this.stack = []; // Stack to store [price, span]
  }

  next(price) {
    let span = 1; // Default span is 1 (current day)

    // Pop prices less than or equal to the current price
    while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
      span += this.stack.pop()[1]; // Add the span of popped elements
    }

    // Push the current price and span onto the stack
    this.stack.push([price, span]);

    return span;
  }
}

// Example usage:
const stockSpanner = new StockSpanner();
console.log(stockSpanner.next(100)); // Output: 1
console.log(stockSpanner.next(80));  // Output: 1
console.log(stockSpanner.next(60));  // Output: 1
console.log(stockSpanner.next(70));  // Output: 2
console.log(stockSpanner.next(60));  // Output: 1
console.log(stockSpanner.next(75));  // Output: 4
console.log(stockSpanner.next(85));  // Output: 6