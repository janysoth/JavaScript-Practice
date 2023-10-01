<template>
  <div class="calculator m-auto">
    <table cellspacing="10">
      <tr>
        <td colspan="4">
          <input type="text" v-model="result" disabled>
        </td>
      </tr>
      <tr>
        <td class="button dark" @click="clear">C</td>
        <td class="button dark" @click="invert">+/-</td>
        <td class="button dark" @click="percent">%</td>
        <td class="button orange" @click="setOperator('/')">/</td>
      </tr>
      <tr>
        <td class="button grey" @click="addNumber(7)">7</td>
        <td class="button grey" @click="addNumber(8)">8</td>
        <td class="button grey" @click="addNumber(9)">9</td>
        <td class="button orange" @click="setOperator('*')">*</td>
      </tr>
      <tr>
        <td class="button grey" @click="addNumber(4)">4</td>
        <td class="button grey" @click="addNumber(5)">5</td>
        <td class="button grey" @click="addNumber(6)">6</td>
        <td class="button orange" @click="setOperator('-')">-</td>
      </tr>
      <tr>
        <td class="button grey" @click="addNumber(1)">1</td>
        <td class="button grey" @click="addNumber(2)">2</td>
        <td class="button grey" @click="addNumber(3)">3</td>
        <td class="button orange" @click="setOperator('+')">+</td>
      </tr>
      <tr>
        <td class="button-col2 grey" @click="addNumber(0)" colspan="2">0</td>
        <td class="button grey" @click="addPoint">.</td>
        <td class="button orange" @click="equal">=</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      result: 0,
      tmp_value: 0,
      reset: false,
      operator: undefined
    }
  },

  mounted() {
    // Register keyboard event listeners
    window.addEventListener('keydown', this.handleKeyPress);
  },

  beforeMount() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener('keydown', this.handleKeyPress);
  },

  methods: {

    clear() {
      this.result = 0;
      this.tmp_value = 0;
      this.operator = undefined;
    },

    invert() {
      this.result *= -1;
    },

    percent() {
      this.result /= 100;
    },

    addNumber(number) {
      if (this.result == 0 || this.reset === true) {
        this.result = '';
        this.reset = false;
      }

      this.result += number.toString();
    },
    addPoint() {
      if (!this.result.includes('.'))
        this.result += '.';
    },
    setOperator(operator) {
      if (this.tmp_value != 0)
        this.calculate();

      this.tmp_value = this.result;
      this.operator = operator;
      this.reset = true;
    },
    equal() {
      this.calculate();
      this.tmp_value = 0;
      this.operator = undefined;
    },
    calculate() {
      let value = 0;
      let firstNum = parseFloat(this.tmp_value);
      let secondNum = parseFloat(this.result);

      switch (this.operator) {
        case '+':
          value = firstNum + secondNum;
          break;
        case '-':
          value = firstNum - secondNum;
          break;
        case '*':
          value = firstNum * secondNum;
          break;
        case '/':
          value = firstNum / secondNum;
      }

      this.result = value.toString();
    },

    handleKeyPress(event) {
      // Check if the key pressed is a numeric keypad key (0-9), a decimal point, an operator, or the backspace key
      if (/^[0-9.]$/.test(event.key)) {
        event.preventDefault(); // Prevent the default behavior of keypress
        this.handleKeyboardInput(event.key);
      } else if (/^[+\-*/]$/.test(event.key)) {
        event.preventDefault();
        this.handleKeyboardOperator(event.key);
      } else if (event.key === 'Enter') {
        // Handle Enter key as an equals sign
        event.preventDefault();
        this.equal();
      } else if (event.key === 'Escape') {
        // Handle Escape key as a clear operation
        event.preventDefault();
        this.clear();
      } else if (event.key === 'Backspace') {
        // Handle Backspace key to delete the last digit
        event.preventDefault();
        this.deleteLastDigit();
      }
    },

    handleKeyboardInput(key) {
      if (this.reset === true) {
        this.result = ''; // Clear the result if it needs to be reset
        this.reset = false;
      }

      if (key === '.') {
        this.addPoint();
      } else {
        this.addNumber(key);
      }
    },

    handleKeyboardOperator(operator) {
      if (this.tmp_value != 0) {
        this.calculate();
      }

      this.tmp_value = this.result;
      this.operator = operator;
      this.reset = true;
    },

    deleteLastDigit() {
      if (this.result.length > 0) {
        this.result = this.result.slice(0, -1); // Remove the last character
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.calculator {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 3rem;


  table {
    /* Add a border to the table */
    border-radius: 10px;
    /* Add rounded corners to the table */
    background-color: black;
    margin-bottom: 100px;
  }

  input {
    display: block;
    width: 400px;
    /* Match the button width */
    height: 75px;
    padding: 5px 20px 0;
    margin-bottom: 10px;
    border: none;
    border-radius: 10px;
    background-color: red;
    color: #fff;
    font-size: 4rem;
    text-align: right;
  }

  .button {
    margin: 5px;
    /* Add margin to create spacing between buttons */
    border-radius: 40px;
    width: 80px;
    height: 80px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
  }

  .button-col2 {
    border-radius: 40px;
    width: 160px;
    height: 80px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
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
}
</style>