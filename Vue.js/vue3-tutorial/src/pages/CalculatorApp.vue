<template>
  <div class="calculator m-auto">
    <table>
      <div class="input-container">
        <input type="text" :value="formattedResult" disabled>
        <div class="secondInput">
          <span class="text-white" v-if="operator">{{ calEquation }}</span>
        </div>
      </div>
      <div>
        <tr>
          <td class="dark" @click="clear">C</td>
          <td class="dark" @click="toggleSign">+/-</td>
          <td class="dark" @click="calculatePercentage">%</td>
          <td class="orange" @click="setOperator('/')">/</td>
        </tr>
        <tr>
          <td @click="appendNumber(7)">7</td>
          <td @click="appendNumber(8)">8</td>
          <td @click="appendNumber(9)">9</td>
          <td class="orange" @click="setOperator('x')">x</td>
        </tr>
        <tr>
          <td @click="appendNumber(4)">4</td>
          <td @click="appendNumber(5)">5</td>
          <td @click="appendNumber(6)">6</td>
          <td class="orange" @click="setOperator('-')">-</td>
        </tr>
        <tr>
          <td @click="appendNumber(1)">1</td>
          <td @click="appendNumber(2)">2</td>
          <td @click="appendNumber(3)">3</td>
          <td class="orange" @click="setOperator('+')">+</td>
        </tr>
        <tr>
          <td colspan="2" class="zeroBtn" @click="appendNumber(0)">0</td>
          <td @click="addDecimalPoint">.</td>
          <td class="orange" @click="calculateResult">=</td>
        </tr>
      </div>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import useWindowEvent from "../utilities/composition/useWindowEvent"

// Data properties for the calculator
const result = ref("");
const tmpValue = ref(0);
const operator = ref(undefined);
const prevValue = ref(undefined);
const resultNeedsClear = ref(false);

// Attach a keyboard input event listener when the component is mounted
// onMounted(() => {
//   window.addEventListener("keydown", handleKeyDown);
// });

// Clear the calculator
const clear = () => {
  result.value = tmpValue.value = "";
  operator.value = undefined;
};

// Toggle the sign of the current result
const toggleSign = () => {
  result.value = (-parseFloat(result.value) || "").toString();
};

// Calculate the percentage of the current result
const calculatePercentage = () => {
  result.value = (parseFloat(result.value) / 100 || "").toString();
};

// Append a number to the current result
const appendNumber = (number) => {
  if (result.value.length < 10 || resultNeedsClear.value) {
    if (resultNeedsClear.value) {
      result.value = number.toString();
      resultNeedsClear.value = false;
    } else {
      result.value += number.toString();
    }
  }
};

// Add a decimal point to the current result
const addDecimalPoint = () => {
  if (!result.value.includes(".")) {
    result.value += ".";
  }
};

// Set the operator for calculations
const setOperator = (op) => {
  // Only set the operator when there's any value first
  // This will prevent the user to first just any operators first
  if (result.value) {
    calculateResult();
    tmpValue.value = parseFloat(result.value);
    operator.value = op;
    prevValue.value = result.value;
    result.value = "";
    resultNeedsClear.value = true;
  }
};

// Calculate and display the result
const calculateResult = () => {
  if (operator.value && result.value !== "") {
    const firstNum = tmpValue.value || 0;
    const secondNum = parseFloat(result.value);

    switch (operator.value) {
      case "+":
        result.value = (firstNum + secondNum).toString();
        break;
      case "-":
        result.value = (firstNum - secondNum).toString();
        break;
      case "x":
        result.value = (firstNum * secondNum).toString();
        break;
      case "/":
        result.value = (firstNum / secondNum).toString();
        break;
    }

    tmpValue.value = 0;
    operator.value = undefined;
    prevValue.value = undefined;
    resultNeedsClear.value = true;
  }
};

// Handle keyboard input
const handleKeyDown = (event) => {
  const key = event.key;

  if (/^\d$/.test(key)) {
    appendNumber(parseInt(key));
  } else {
    switch (key) {
      case "+":
      case "-":
      case "/":
        setOperator(key);
        break;
      case "*":
        setOperator("x");
        break;
      case "=":
      case "Enter":
        calculateResult();
        break;
      case ".":
        addDecimalPoint();
        break;
      case "Escape":
        clear();
        break;
      case "Backspace":
        result.value = result.value.slice(0, -1);
        break;
      case "c":
      case "C":
        if (event.ctrlKey || event.metaKey) {
          clear();
        }
        break;
      case "%":
        calculatePercentage();
        break;
      case "m":
      case "M":
        if (event.ctrlKey || event.metaKey) {
          toggleSign();
        }
        break;
    }
  }
};

// Import the function from another file
useWindowEvent('keydown', handleKeyDown);

// Format the displayed result with commas for thousands separator
const formattedResult = computed(() => {
  const parts = result.value.split(".");
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const decimalPart = parts[1] ? `.${parts[1]}` : "";
  return integerPart + decimalPart;
});

// Display the calculation equation
const calEquation = computed(() => {
  return `${prevValue.value || ""} ${operator.value || ""} ${result.value}`;
});
</script>
<style lang="scss" scoped>
.calculator {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  margin-top: 10px;

  .input-container {
    width: 370px;
    /* Set the common width for input and table */
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    /* Make the input width 100% of its container */
    height: 80px;
    margin-top: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    font-size: 3rem;
    text-align: right;
    background-color: white;
    color: black;
  }

  table {
    width: 100%;
    /* Make the table width 100% of its container */
    border-spacing: 10px;
    border-collapse: separate;
    background-color: #333;
    border-radius: 10px;
    padding: 10px;
  }

  td {
    width: 80px;
    height: 80px;
    text-align: center;
    vertical-align: middle;
    font-weight: bold;
    cursor: pointer;
    background-color: #777;
    color: white;
    border-radius: 50%;
  }

  td:hover {
    background-color: #999;
  }

  .grey {
    background-color: #ccc;
    color: #333;

    &:hover {
      background-color: #ddd;
    }
  }

  .dark {
    background-color: #444;
    color: #fff;

    &:hover {
      background-color: #555;
    }
  }

  .orange {
    background-color: #e08d1f;
    color: #fff;

    &:hover {
      background-color: #fda22b;
    }
  }

  .zeroBtn {
    background-color: #777;
    color: white;
    border-radius: 45px;
  }

  .zeroBtn:hover {
    background-color: #999;
  }

  .secondInput {
    width: 100%;
    /* Make the input width 100% of its container */
    height: 25px;
    border: none;
    border-radius: 10px;
    font-size: 1.5rem;
    text-align: left;
    background-color: none;
    color: black;
  }

}
</style>
