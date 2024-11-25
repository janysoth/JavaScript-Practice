/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.

Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

Note:

You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
The transaction fee is only charged once for each stock purchase and sale.
 */

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

const maxProfit = (prices, fee) => {
  // Holding a stock after buying on day 0
  let hold = -prices[0];

  // No Stock held, so cash starts at 0
  let cash = 0;

  for (let i = 1; i < prices.length; i++) {
    // Update hold and cash based on transactions
    hold = Math.max(hold, cash - prices[i]);
    cash = Math.max(cash, hold + prices[i] - fee);
  }

  // Maximum profit when no stock is held
  return cash;
};