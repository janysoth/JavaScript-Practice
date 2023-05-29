const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");

const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");

const clearEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

// Create An EventListener for All of the Number Buttons:
numbersEl.forEach((number) => {
  number.addEventListener("click", (e) => {
    // To Check if there's a decimal point
    // To Allow the User to Only Put One Decimal Point:
    if(dis2Num === result) clearAll();
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    display2El.innerText = dis2Num;
  });
});

// Create an EventListener for All of the Operation Buttons:
operationEl.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    // To Check To See If there is Any Number Prior
    if (!dis2Num) return;
    // Set haveDot to false because there's only Number No Decimal Yet:
    haveDot = false;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation) {
      compute();
    } else {
      result = parseFloat(dis2Num);
    }
    moveDisplay(operationName);
    lastOperation = operationName;
  });
});

// To Move currentOperand to previousOperand:
function moveDisplay(name = "") {
  //dis1Num += dis2Num + " " + name + " ";
  dis1Num += `${dis2Num} ${name} `;
  display1El.innerText = dis1Num;
  display2El.innerText = "";
  dis2Num = "";
  tempResultEl.innerText = result;
}

// To Compute The Result: 
// Use parseFloat to convert to Numbers: 
function compute() {
  switch (lastOperation) {
    case "x":
      result = parseFloat(result) * parseFloat(dis2Num);
      break;
    case "/":
      result = parseFloat(result) / parseFloat(dis2Num);
      break;
    case "+":
      result = parseFloat(result) + parseFloat(dis2Num);
      break;
    case "-":
      result = parseFloat(result) - parseFloat(dis2Num);
      break;
    case "%":
      result = parseFloat(result) * (parseFloat(dis2Num)/100);
      break;
  }
}

// Add EventListener to Equal Sign:
equalEl.addEventListener('click', ()=> {
  if (!dis2Num || !dis1Num) return;
  haveDot = false;
  compute();
  moveDisplay();
  display2El.innerText = result;
  tempResultEl.innerText = '';
  dis2Num = result;
  dis1Num = '';
})

clearEl.addEventListener('click', clearAll);

function clearAll () {
  dis1Num = '';
  dis2Num = '';
  display1El.innerText ='';
  display2El.innerText ='';
  result = '';
  tempResultEl.innerText = '';
}
