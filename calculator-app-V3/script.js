class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear(); // To Clear Everything Out
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    // To Allow the User to Only Put One ".":
    // If there's already a "." there, the function will stop:
    if (number === "." && this.currentOperand.includes(".")) return;

    // Convert to String in order to display on the output:
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let result;
    // Convert Both prev and current to numbers:
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    // Perform the Operation:
    // Check if the User Click Anything:
    if (isNaN(prev) || isNaN(current)) return;

    // Use Switch Function to Run Each Operator:
    switch (this.operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "x":
        result = prev * current;
        break;
      case "÷":
        result = prev / current;
        break;
      // Default: like a else status, none of the case is excuted:
      // Meaning we have an invalid operation, therefore no computation is executed:
      default:
        return;
    }
    this.currentOperand = result.toString();
    if (this.currentOperand.includes(".")) {
      // To Only Show 8 Decimals
      this.currentOperand = parseFloat(this.currentOperand).toFixed(8);
    }
    this.operation = undefined;
    this.previousOperand = "";
  }

  // Helper Function to Display of the Input Value:
  getDisplayNumber(number) {
    // Turn the Number into String to be able to Split
    // Between the Integer and Decimal Numbers:
    const stringNumber = number.toString();

    // Get integerDigits by getting the first part before the decimal:
    const integerDigits = parseFloat(stringNumber.split(".")[0]);

    // Getting decimalDigits from the 2nd portion after the decimal:
    const decimalDigits = stringNumber.split(".")[1];

    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0, // Could never have any decimal places after the integerDigits
      });
    }

    if (decimalDigits != null) return `${integerDisplay}.${decimalDigits}`;
    else return integerDisplay;
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      // To Clear the Previous Operand After the Calculation is Completed:
      this.previousOperandTextElement.innerText = "";
    }
  }
}

function handleNumberClick(calculator, button) {
  // This When User Click Any Button After Calculation
  // The Result will be cleared:
  if (calculator.previousOperand === "") {
    calculator.currentOperand = "";
  }
  calculator.appendNumber(button.innerText);
  calculator.updateDisplay();
}

function handleOperationClick(calculator, button) {
  // To Check if There is a previousOperand:
  if (calculator.previousOperand === "") {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  } else {
    calculator.compute();
    calculator.updateDisplay();
    calculator.chooseOperation(button.innerText);
  }
}

function handleEqualsClick(calculator) {
  calculator.compute();
  calculator.updateDisplay();
  
  // The previousOperand and Operation Will Be Clear:
  calculator.previousOperand = "";
  calculator.operation = undefined;
}

function handleAllClearClick(calculator) {
  calculator.clear();
  calculator.updateDisplay();
}

function handleDeleteClick(calculator) {
  calculator.delete();
  calculator.updateDisplay();
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

// Create a New Calculator Class:
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

// To Loop All of the Button 
// To Add handNumberClick Functon:
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    handleNumberClick(calculator, button);
  });
});

// When User Click On Any Operator:
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    handleOperationClick(calculator, button);
  });
});

// When User Click the Equal Button:
equalsButton.addEventListener("click", () => {
  handleEqualsClick(calculator);
});

// When User Click the AC Button:
allClearButton.addEventListener("click", () => {
  handleAllClearClick(calculator);
});

// When User Click the Delete Button:
deleteButton.addEventListener("click", () => {
  handleDeleteClick(calculator);
});
