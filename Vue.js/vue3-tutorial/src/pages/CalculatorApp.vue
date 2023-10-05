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
      prevValue: undefined,
      resultNeedsClear: false,
    };
  },

  mounted() {
    window.addEventListener("keydown", this.handleKeyDown);
  },

  methods: {

    // Clear the calculator
    clear() {
      this.result = this.tmpValue = "";
      this.operator = undefined;
    },

    // Toggle the sign of the current result
    toggleSign() {
      this.result = (-parseFloat(this.result) || "").toString();
    },

    // Calculate the percentage of the current result
    calculatePercentage() {
      this.result = (parseFloat(this.result) / 100 || "").toString();
    },

    // Append a number to the current result
    appendNumber(number) {
      if (this.result.length < 10 || this.resultNeedsClear) {
        if (this.resultNeedsClear) {
          this.result = number.toString();
          this.resultNeedsClear = false;
        } else {
          this.result += number.toString();
        }
      }
    },

    // Add a decimal point to the current result
    addDecimalPoint() {
      if (!this.result.includes(".")) {
        this.result += ".";
      }
    },

    // Set the operator for calculations
    setOperator(operator) {
      this.calculateResult();
      this.tmpValue = parseFloat(this.result);
      this.operator = operator;
      this.prevValue = this.result;
      this.result = "";
      this.resultNeedsClear = true;
    },

    // Calculate and display the result
    calculateResult() {
      if (this.operator && this.result !== "") {
        const firstNum = this.tmpValue || 0;
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

    // Handle keyboard input
    handleKeyDown(event) {
      const key = event.key;

      if (/^\d$/.test(key)) {
        this.appendNumber(parseInt(key));
      } else {
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
          case "Enter":
            this.calculateResult();
            break;
          case ".":
            this.addDecimalPoint();
            break;
          case "Escape":
            this.clear();
            break;
          case "Backspace":
            this.result = this.result.slice(0, -1);
            break;
          case "c":
          case "C":
            if (event.ctrlKey || event.metaKey) {
              this.clear();
            }
            break;
          case "%":
            this.calculatePercentage();
            break;
          case "m":
          case "M":
            if (event.ctrlKey || event.metaKey) {
              this.toggleSign();
            }
            break;
        }
      }
    },
  },

  computed: {

    // Format the displayed result with commas for thousands separator
    formattedResult() {
      const parts = this.result.split(".");
      const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      const decimalPart = parts[1] ? `.${parts[1]}` : "";
      return integerPart + decimalPart;
    },

    // Display the calculation equation
    calEquation() {
      return `${this.prevValue || ""} ${this.operator || ""} ${this.result}`;
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
