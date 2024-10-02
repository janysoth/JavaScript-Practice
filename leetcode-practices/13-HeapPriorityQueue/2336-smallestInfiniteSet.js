/**
 * You have a set which contains all positive integers [1, 2, 3, 4, 5, ...].

Implement the SmallestInfiniteSet class:

SmallestInfiniteSet() Initializes the SmallestInfiniteSet object to contain all positive integers.
int popSmallest() Removes and returns the smallest integer contained in the infinite set.
void addBack(int num) Adds a positive integer num back into the infinite set, if it is not already in the infinite set.
 */

const SmallestInfiniteSet = function () {
  this.heap = [];
  this.min_num = 1;
};

/**
* @return {number}
*/
SmallestInfiniteSet.prototype.popSmallest = function () {
  if (this.heap.length > 0) {
    return this.heap.shift();
  }
  this.min_num += 1;
  return this.min_num - 1;
};

/** 
* @param {number} num
* @return {void}
*/
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (this.min_num > num && this.heap.indexOf(num) === -1) {
    this.heap.push(num);
    this.heap.sort((a, b) => a - b);
  }
};

/** 
* Your SmallestInfiniteSet object will be instantiated and called as such:
* var obj = new SmallestInfiniteSet()
* var param_1 = obj.popSmallest()
* obj.addBack(num)
*/