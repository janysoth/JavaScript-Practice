// Create a Calculator Class:
class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear(); // Clear everthing once you create a new Calculator class
  }
  // To Add all of the Functions Calculator Class Has:
  clear() {
    this.previousOperand = "";
    this.currentOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    // To Allow the User to Only Put One ".":
    // If there's already a "." there, the  function will stop:
    if (number === "." && this.currentOperand.includes(".")) return;

    // Convert to String in order to display on the Output:
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    // Set the previousOperand to currentOperand:
    this.previousOperand = this.currentOperand;
    // Clear Out the currentOperand:
    this.currentOperand = "";
  }

  compute() {
    // The Result of the Compute Function:
    let computation;
    const prev = parseFloat(this.previousOperand); //Covert previousOperand to a number
    const current = parseFloat(this.currentOperand); // Covert currentOperand to a number

    //  To Check if the User Click Anything:
    if (isNaN(prev) || isNaN(current)) return;

    // Use Switch function to run each operator:
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      // Default: like a else status, none of the case is excuted:
      // Meaning we have an invalid operation, therefore no computation is executed:
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  // Helper Function to get display the value of input:
  getDisplayNumber(number) {
    // Turn the Number into String to be able to split
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
      // To Clear the Previous Operand After The Calculation is Completed:
      this.previousOperandTextElement.innerText = "";
    }
  }
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

// Create a new Calculator Class:
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

// To Loop All of the buttons:
numberButtons.forEach((button) => {
  // For Every Button, We add an EventListner:
  button.addEventListener("click", () => {
    // To Add a Number when User Click on a Button:
    calculator.appendNumber(button.innerText);
    // To Update the Display when User Click on a Button:
    calculator.updateDisplay();
  });
});

// To Loop All of the buttons:
operationButtons.forEach((button) => {
  // For Every Button, We add an EventListner:
  button.addEventListener("click", () => {
    // To Add a Number when User Click on a Button:
    calculator.chooseOperation(button.innerText);
    // To Update the Display when User Click on a Button:
    calculator.updateDisplay();
  });
});

// When user click the Equal Button:
equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
  calculator.clear();
});

// When user click the AC Button:
allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

// When user click the Delete Button:
deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
