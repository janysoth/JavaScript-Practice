const result = document.getElementById("result");
const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");
const percent = document.getElementById("percent");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const subtract = document.getElementById("subtract");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const add = document.getElementById("add");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const equals = document.getElementById("equals");
const zero = document.getElementById("zero");
const decimal = document.getElementById("decimal");
const plusMinus = document.getElementById("plus-minus");

let currentInput = "";
let previousInput = "";
let operator = null;

function clearInput() {
  currentInput = "";
  previousInput = "";
  operator = null;
  result.value = "";
}

function deleteInput() {
  currentInput = currentInput.slice(0, -1);
  result.value = currentInput;
}

function appendInput(value) {
  if (value === "." && currentInput.includes(".")) return;
  currentInput += value;
  result.value = currentInput;
}

function handleOperator(value) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate();
  }
  operator = value;
  previousInput = currentInput;
  currentInput = "";
}

function calculate() {
  let calculation;
  const previous = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(previous) || isNaN(current)) return;
  switch (operator) {
    case "+":
      calculation = previous + current;
      break;
    case "-":
      calculation = previous - current;
      break;
    case "*":
      calculation = previous * current;
      break;
    case "/":
      calculation = previous / current;
      break;
    case "%":
      calculation = (previous / 100) * current;
      break;
    default:
      return;
  }
  currentInput = calculation.toString();
  operator = null;
  previousInput = "";
  result.value = currentInput;
}

function toggleSign() {
  currentInput = (parseFloat(currentInput) * -1).toString();
  result.value = currentInput;
}

function handleKeyPress(event) {
  const key = event.key;
  if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteInput();
  } else if (key === "Escape") {
    clearInput();
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    handleOperator(key);
  } else if (key === "%") {
    handleOperator("%");
  } else if (key === ".") {
    appendInput(".");
  } else if (
      key === "0" ||
      key === "1" ||
      key === "2" ||
      key === "3" ||
      key === "4" ||
      key === "5" ||
      key === "6" ||
      key === "7" ||
      key === "8" ||
      key === "9"
    ) {
    appendInput(key);
  }
}

clear.addEventListener("click", clearInput);
backspace.addEventListener("click", deleteInput);
percent.addEventListener("click", () => handleOperator("%"));
divide.addEventListener("click", () => handleOperator("/"));
multiply.addEventListener("click", () => handleOperator("*"));
seven.addEventListener("click", () => appendInput("7"));
eight.addEventListener("click", () => appendInput("8"));
nine.addEventListener("click", () => appendInput("9"));
subtract.addEventListener("click", () => handleOperator("-"));
four.addEventListener("click", () => appendInput("4"));
five.addEventListener("click", () => appendInput("5"));
six.addEventListener("click", () => appendInput("6"));
add.addEventListener("click", () => handleOperator("+"));
one.addEventListener("click", () => appendInput("1"));
two.addEventListener("click", () => appendInput("2"));
three.addEventListener("click", () => appendInput("3"));
equals.addEventListener("click", calculate);
zero.addEventListener("click", () => appendInput("0"));
decimal.addEventListener("click", () => appendInput("."));
plusMinus.addEventListener("click", toggleSign);

document.addEventListener("keydown", handleKeyPress);
