const previousOperandEl = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");

const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");

const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");
const deleteLastEl = document.querySelector(".delete-last-num");

let previousOperand = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

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
  if (dis2Num === result) clearAll();
  if (e.target.innerText === "." && !haveDot) {
    haveDot = true;
  } else if (e.target.innerText === "." && haveDot) {
    return;
  }
  dis2Num += e.target.innerText;
  display2El.innerText = dis2Num;
}

// EventListener for Operation Buttons:
function handleOperationClick(e) {
  if (!dis2Num) return;
  haveDot = false;
  const operationName = e.target.innerText;
  if (previousOperand && dis2Num && lastOperation) {
    compute();
  } else {
    result = parseFloat(dis2Num);
  }
  moveDisplay(operationName);
  lastOperation = operationName;
}

// Move currentOperand to previousOperand:
function moveDisplay(name = "") {
  previousOperand += `${dis2Num} ${name} `;
  previousOperandEl.innerText = previousOperand;
  display2El.innerText = "";
  dis2Num = "";
  tempResultEl.innerText = `Result = ${result}`;
}

// Compute the Result:
function compute() {
  switch (lastOperation) {
    case "x":
      result *= parseFloat(dis2Num);
      break;
    case "/":
      result /= parseFloat(dis2Num);
      break;
    case "+":
      result += parseFloat(dis2Num);
      break;
    case "-":
      result -= parseFloat(dis2Num);
      break;
    case "%":
      result *= parseFloat(dis2Num) / 100;
      break;
  }
}

// EventListener for Equal Sign:
function handleEqualClick() {
  if (!dis2Num || !previousOperand) return;
  haveDot = false;
  compute();
  moveDisplay();
  display2El.innerText = result;
  tempResultEl.innerText = "";
  dis2Num = result;
  previousOperand = "";
}

// Clear All:
function clearAll() {
  previousOperand = "";
  dis2Num = "";
  previousOperandEl.innerText = "";
  display2El.innerText = "";
  result = null;
  tempResultEl.innerText = "";
}

// Clear Last Number:
function clearLast() {
  display2El.innerText = "";
  dis2Num = "";
}

// Delete Last Number:
function deleteLast() {
  dis2Num = dis2Num.toString().slice(0, -1);
  display2El.innerText = dis2Num;
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
