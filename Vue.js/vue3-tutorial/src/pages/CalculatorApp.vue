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

<script>
export default {
  data() {
    return {
      result: "",
      tmpValue: 0,
      operator: undefined,
      prevValue: undefined, // Store the previous number
      resultNeedsClear: false,
    };
  },

  mounted() {
    window.addEventListener("keydown", this.handleKeyDown);
  },

  methods: {
    clear() {
      this.result = "";
      this.tmpValue = 0;
      this.operator = undefined;
    },

    toggleSign() {
      this.result = (-parseFloat(this.result)).toString();
    },

    calculatePercentage() {
      this.result = (parseFloat(this.result) / 100).toString();
    },

    appendNumber(number) {
      // Check if the result length is less than 9 before appending a digit
      if (this.result.length < 11) {
        // this.result += number.toString();
        // Check if the result needs to be cleared
        if (this.resultNeedsClear) {
          this.result = number.toString();
          this.resultNeedsClear = false; // Reset the flag
        } else {
          // Append the number to the current result
          this.result += number.toString();
        }
      }
    },

    addDecimalPoint() {
      if (!this.result.includes(".")) {
        this.result += ".";
      }
    },

    setOperator(operator) {
      this.calculateResult();
      this.tmpValue = parseFloat(this.result);
      this.operator = operator;
      this.prevValue = this.result; // Store the previous value
      this.result = "";
      this.resultNeedsClear = true;
    },

    calculateResult() {
      if (this.operator && this.result !== "") {
        const firstNum = this.tmpValue;
        const secondNum = parseFloat(this.result);

        switch (this.operator) {
          case "+":
            this.result = (firstNum + secondNum).toString();
            break;
          case "-":
            this.result = (firstNum - secondNum).toString();
            break;
          case "x":
            this.result = (firstNum * secondNum).toString();
            break;
          case "/":
            this.result = (firstNum / secondNum).toString();
            break;
        }

        this.tmpValue = 0;
        this.operator = undefined;
        this.prevValue = undefined;
        this.resultNeedsClear = true;
      }
    },

    handleKeyDown(event) {
      const key = event.key;

      // Check if the key is a digit (0-9)
      if (/^\d$/.test(key)) {
        this.appendNumber(parseInt(key));
      } else {
        // Check for other keys
        switch (key) {
          case "+":
          case "-":
          case "/":
            this.setOperator(key);
            break;
          case "*":
            this.setOperator("x");
            break;
          case "=":
          case "Enter": // Support the Enter key as well
            this.calculateResult();
            break;
          case ".":
            this.addDecimalPoint();
            break;
          case "Escape": // Support the Escape key for clearing
            this.clear();
            break;
          case "Backspace": // Support Backspace key for clearing
            this.result = this.result.slice(0, -1);
            break;
          case "c":
          case "C":
            if (event.ctrlKey || event.metaKey) {
              this.clear(); // Ctrl + C to clear
            }
            break;
          case "%":
            this.calculatePercentage();
            break;
          case "m":
          case "M":
            if (event.ctrlKey || event.metaKey) {
              this.toggleSign(); // Ctrl + M to toggle sign
            }
            break;
        }
      }
    },

    formatNumberWithCommas(value) {
      const parts = value.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    },
  },

  computed: {

    formattedResult() {
      // Format the result with commas every 3 digits
      return this.formatNumberWithCommas(this.result);
    },

    calEquation() {
      return `${this.prevValue} ${this.operator} ${this.result}`;
    },

  },
};
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
