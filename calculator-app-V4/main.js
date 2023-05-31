const previousOperandEl = document.querySelector(".display-1");
const currentOperandEl = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");

const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");

const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");
const deleteLastEl = document.querySelector(".delete-last-num");

let previousOperand = "";
let currentOperand = "";
let result = null;
let lastOperation = "";
let decimalPoint = false;

// Create an EventListener for All of the Number Buttons:
numbersEl.forEach((number) => {
  number.addEventListener("click", handleNumberClick);
});

// Create an EventListener for All of the Operation Buttons:
operationEl.forEach((operation) => {
  operation.addEventListener("click", handleOperationClick);
});

// Add EventListener to Equal Sign:
equalEl.addEventListener("click", handleEqualClick);

// Add EventListener to clearAll Button:
clearAllEl.addEventListener("click", clearAll);

// To Clear Last Number:
clearLastEl.addEventListener("click", clearLast);

// To Delete Last Number:
deleteLastEl.addEventListener("click", deleteLast);

// EventListener for Number Buttons:
function handleNumberClick(e) {
  if (currentOperand === result) clearAll();
  if (e.target.innerText === "." && !decimalPoint) {
    decimalPoint = true;
  } else if (e.target.innerText === "." && decimalPoint) {
    return;
  }
  currentOperand += e.target.innerText;
  currentOperandEl.innerText = currentOperand;
}

// EventListener for Operation Buttons:
function handleOperationClick(e) {
  if (!currentOperand) return;
  decimalPoint = false;
  const operationName = e.target.innerText;
  if (previousOperand && currentOperand && lastOperation) {
    compute();
  } else {
    result = parseFloat(currentOperand);
  }
  moveDisplay(operationName);
  lastOperation = operationName;
}

// Move currentOperand to previousOperand:
function moveDisplay(name = "") {
  previousOperand += `${currentOperand} ${name} `;
  previousOperandEl.innerText = previousOperand;
  currentOperandEl.innerText = "";
  currentOperand = "";
  tempResultEl.innerText = `Result = ${result}`;
}

// Compute the Result:
function compute() {
  switch (lastOperation) {
    case "x":
      result *= parseFloat(currentOperand);
      break;
    case "/":
      result /= parseFloat(currentOperand);
      break;
    case "+":
      result += parseFloat(currentOperand);
      break;
    case "-":
      result -= parseFloat(currentOperand);
      break;
    case "%":
      result *= parseFloat(currentOperand) / 100;
      break;
  }
}

// EventListener for Equal Sign:
function handleEqualClick() {
  if (!currentOperand || !previousOperand) return;
  decimalPoint = false;
  compute();
  moveDisplay();
  currentOperandEl.innerText = result;
  tempResultEl.innerText = "";
  currentOperand = result;
  previousOperand = "";
}

// Clear All:
function clearAll() {
  previousOperand = "";
  currentOperand = "";
  previousOperandEl.innerText = "";
  currentOperandEl.innerText = "";
  result = null;
  tempResultEl.innerText = "";
}

// Clear Last Number:
function clearLast() {
  currentOperandEl.innerText = "";
  currentOperand = "";
}

// Delete Last Number:
function deleteLast() {
  currentOperand = currentOperand.toString().slice(0, -1);
  currentOperandEl.innerText = currentOperand;
}

// EventListener for Keyboard Input:
window.addEventListener("keydown", handleKeyboardInput);

// Handle Keyboard Input:
function handleKeyboardInput(e) {
  const key = e.key;
  if (/[0-9.]/.test(key)) {
    handleNumberPress(key);
  } else if (/[+\-*/%]/.test(key)) {
    handleOperationPress(key);
  } else if (key === "Enter" || key === "=") {
    handleEqualPress();
  }
}

// EventListener for Number Buttons:
function handleNumberPress(key) {
  numbersEl.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}

// EventListener for Operation Buttons:
function handleOperationPress(key) {
  operationEl.forEach((operation) => {
    if (operation.innerText === key) {
      operation.click();
    }
  });
}

// EventListener for Equal Button:
function handleEqualPress() {
  equalEl.click();
}
