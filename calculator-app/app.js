const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handleInput(button.textContent);
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (isAllowedKey(key)) {
    event.preventDefault();
    handleInput(key === "Enter" ? "=" : key);
  }
});

function handleInput(input) {
  if (input === "C" || input === "Escape") {
    display.value = "";
  } else if (input === "=") {
    try {
      const expression = prepareExpression(display.value);
      display.value = eval(expression);
    } catch (error) {
      display.value = "Error";
    }
  } else if (input === "+/-") {
    display.value = -parseFloat(display.value);
  } else if (input === "%") {
    display.value = parseFloat(display.value) / 100;
  } else {
    display.value += input;
  }
}

function prepareExpression(expression) {
  expression = expression.replace("π", Math.PI);
  expression = expression.replace("^", "**");
  expression = expression.replace("sin", "Math.sin");
  expression = expression.replace("cos", "Math.cos");
  expression = expression.replace("tan", "Math.tan");
  expression = expression.replace("√", "Math.sqrt");
  return expression;
}

function isAllowedKey(key) {
  const allowedKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "+",
    "-",
    "/",
    "(",
    ")",
    "^",
    "Escape",
    "Enter",
  ];
  return allowedKeys.includes(key);
}
