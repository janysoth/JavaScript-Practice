/**
 * You are given a 0-indexed integer array costs where costs[i] is the cost of hiring the ith worker.

You are also given two integers k and candidates. We want to hire exactly k workers according to the following rules:

You will run k sessions and hire exactly one worker in each session.
In each hiring session, choose the worker with the lowest cost from either the first candidates workers or the last candidates workers. Break the tie by the smallest index.
For example, if costs = [3,2,7,7,1,2] and candidates = 2, then in the first hiring session, we will choose the 4th worker because they have the lowest cost [3,2,7,7,1,2].
In the second hiring session, we will choose 1st worker because they have the same lowest cost as 4th worker but they have the smallest index [3,2,7,7,2]. Please note that the indexing may be changed in the process.
If there are fewer than candidates workers remaining, choose the worker with the lowest cost among them. Break the tie by the smallest index.
A worker can only be chosen once.
Return the total cost to hire exactly k workers.
 */

/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */

const totalCost = function (costs, k, candidates) {
  let leftHeap = new MinPriorityQueue();
  let rightHeap = new MinPriorityQueue();

  // Add the first 'candidates' workers to the left heap
  for (let i = 0; i < candidates; i++) {
    leftHeap.enqueue(costs[i], costs[i]);
  }

  // Add the last 'candidates' workers to the right heap
  for (let i = costs.length - 1; i >= Math.max(candidates, costs.length - candidates); i--) {
    rightHeap.enqueue(costs[i], costs[i]);
  }

  let totalCost = 0;

  // Choose workers k times
  for (let i = 0; i < k; i++) {
    if (leftHeap.isEmpty()) {
      totalCost += rightHeap.dequeue().element;
    } else if (rightHeap.isEmpty()) {
      totalCost += leftHeap.dequeue().element;
    } else {
      if (leftHeap.front().element <= rightHeap.front().element) {
        totalCost += leftHeap.dequeue().element;
      } else {
        totalCost += rightHeap.dequeue().element;
      }
    }
  }

  return totalCost;
};