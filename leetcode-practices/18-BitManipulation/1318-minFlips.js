/**
 * Given 3 positives numbers a, b and c. Return the minimum flips required in some bits of a and b to make ( a OR b == c ). (bitwise OR operation).
Flip operation consists of change any single bit 1 to 0 or change the bit 0 to 1 in their binary representation.
 */

const minFlips = function (a, b, c) {
  let flips = 0;

  while (a > 0 || b > 0 || c > 0) {
    // Extract the least significant bits of a, b, and c
    let aBit = a & 1;
    let bBit = b & 1;
    let cBit = c & 1;

    if (cBit === 0) {
      // If cBit is 0, both aBit and bBit must be 0
      flips += aBit + bBit;
    } else {
      // If cBit is 1, at least one of aBit or bBit must be 1
      if (aBit === 0 && bBit === 0) {
        flips++;
      }
    }

    // Shift right to process the next bit
    a >>= 1;
    b >>= 1;
    c >>= 1;
  }

  return flips;
};