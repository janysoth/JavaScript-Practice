import { ref, readonly } from "vue";

// Import the Arrays from the constants.js file
import { OPERATORS, DIGITS } from "./constants";

export function useCalculate() {
  let memory = ref("");
  let error = ref(false);
  let clearOnNextDigit = ref(false);

  // Checks if a given string is  a valid operator
  // By checking if it exists in the 'OPERATOR' Array
  function isOperator(string: string) {
    return OPERATORS.includes(string);
  }

  // Checks if a given string is a valid digit
  // By checking if it exists in the 'DIGITS' Array
  function isDigit(string: string) {
    return DIGITS.includes(string);
  }


// Removes the whitespaces from the input string
// And checks if the last character is a valid operator
  function lastCharIsOperator(string: string) {
    const stringNormalized = string.replace(/\s/g, "");
    return isOperator(stringNormalized[stringNormalized.length - 1]);
  }

  // Adds a digit and update to the memory
  function addDigit(digit: string) {
    if (!isDigit(digit)) {
      throw new Error("Invalid param, is not a valid digit");
    }

    // Set the lastDigit to the last index of the memory
    const lastDigit = memory.value[memory.value.length - 1];

    if (lastDigit === "." && digit === ".") return;
    if (lastDigit === "0" && memory.value.length === 1) clear();
    if (clearOnNextDigit.value) clear();
    if ((!memory.value || lastCharIsOperator(memory.value)) && digit === ".") memory.value += "0";

    clearOnNextDigit.value = false;
    memory.value += `${digit}`;
  }

  // Adds an operator to the memory
  function addOperator(operator: string) {
    if (!isOperator(operator)) {
      throw new Error("Invalid param, is not a valid operator");
    }

    if (!memory.value && operator !== "-") return;
    if (lastCharIsOperator(memory.value)) eraseLast();

    clearOnNextDigit.value = false;
    memory.value += `${operator}`;
  }

  // Calculates the result of the expresson stored in the memory
  // Removes trailing operators if present
  // Evaluates the expression using 'eval()' and update the result to the memory
  function calculateResult() {
    if (!memory.value) return;

    if (lastCharIsOperator(memory.value)) {
      memory.value = memory.value.slice(0, memory.value.length - 1);
    }

    try {
      const mathExpression = memory.value.replace(/\b0*((\d+\.\d+|\d+))\b/g, "$1"); // remove octal numeric
      memory.value = `${eval(mathExpression)}`;
    } catch (_) {
      error.value = true;
      memory.value = "";
    } finally {
      clearOnNextDigit.value = true;
    }
  }

  function eraseLast() {
    if (!memory.value.length) return;

    memory.value = memory.value.slice(0, memory.value.length - 1);
    clearOnNextDigit.value = false;
  }

  function clear() {
    memory.value = "";
    error.value = false;
  }

  return {
    memory: readonly(memory),
    error: readonly(error),
    addDigit,
    addOperator,
    calculateResult,
    eraseLast,
    clear,
  };
}