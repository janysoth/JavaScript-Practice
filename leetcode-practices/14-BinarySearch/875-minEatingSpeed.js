/**
 * Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.
 */

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function (piles, h) {
  // Helper function to calculate total hours to finish all bananas at speed K
  const hoursToEatAll = (K) => {
    let totalHours = 0;
    for (const pile of piles) {
      totalHours += Math.ceil(pile / K);
    }
    return totalHours;
  };

  // Binary search between 1 and the maximum pile size
  let low = 1;
  let high = Math.max(...piles);

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const hours = hoursToEatAll(mid);

    // If Koko can finish in H or fewer hours, try a smaller speed
    if (hours <= H) {
      high = mid;
    } else {
      // Otherwise, try a bigger speed
      low = mid + 1;
    }
  }

  return low;  // The minimum K found
};