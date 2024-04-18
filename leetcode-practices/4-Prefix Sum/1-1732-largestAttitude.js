/**
 * There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.
 */

const largestAltitude = function (gain) {
  // Add a starting point with altitude 0
  gain.unshift(0);

  // Initialize variables
  let currentAltitude = 0;
  let highestAltitude = 0;

  // Calculate cumulative altitude at each point
  const cumulativeAltitudes = gain.map((altitudeGain) => {
    currentAltitude += altitudeGain;
    return currentAltitude;
  });

  // Find the highest altitude using Math.max
  highestAltitude = Math.max(...cumulativeAltitudes);

  return highestAltitude;
}

// Example usage:
const gainArray = [-5, 1, 5, 0, -7];
const result = largestAltitude(gainArray);

console.log("Highest Altitude:", result);