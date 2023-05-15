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
  } else if (input === "⌫" || input === "Backspace") {
    display.value = display.value.slice(0, -1);
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
  expression = expression.replace("x", "*");
  expression = expression.replace("÷", "/");
  expression = expression.replace(/[^-()\d/*+.]/g, "");
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
    "*",
    "(",
    ")",
    "^",
    "Escape",
    "Enter",
    "Backspace",
    "NumLock",
    "Numpad0",
    "Numpad1",
    "Numpad2",
    "Numpad3",
    "Numpad4",
    "Numpad5",
    "Numpad6",
    "Numpad7",
    "Numpad8",
    "Numpad9",
    "NumpadAdd",
    "NumpadSubtract",
    "NumpadMultiply",
    "NumpadDivide",
    "NumpadDecimal",
  ];
  return allowedKeys.includes(key);
}
