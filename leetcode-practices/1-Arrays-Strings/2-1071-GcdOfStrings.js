/**
 * @param {string} str1
 * @param {string} str2
 * @return {string} 
 * 
 * For two strings s and t, we say "t divides s" if and only if s = t + ... + t(i.e., t is concatenated with * itself one or more times).
 * Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 */

const gcdOfStrings = (str1, str2) => {
  if (str1 + str2 !== str2 + str1) {
    return '';
  }

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const gcdLength = gcd(str1.length, str2.length);

  return str1.slice(0, gcdLength);
};

const str1 = "ABCABC";
const str2 = "ABC";
const result = gcdOfStrings(str1, str2);
console.log(result);  // Output will be "ABC"


/**
 * Finding GCD for Numbers
 */

const findGCD = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const gcdOfNumbers = (num1, num2) => {
  return findGCD(num1, num2);
};

const num1 = 36;
const num2 = 48;
console.log(gcdOfNumbers(num1, num2));  // Output will be 12