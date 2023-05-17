// Create a Calculator Class: 
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear(); // Clear everthing once you create a new Calculator class
    }
    // To Add all of the Functions Calculator Class Has: 
    clear(){
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
    }

    delete(){

    }

    appendNumber(number){
        // To Allow the User to Only Put One ".":
        // If there's already a "." there, the  function will stop:
        if (number === '.' && this.currentOperand.includes('.')) return;
        
        // Convert to String in order to display on the Output:
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand;
    }

}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


// Create a new Calculator Class:
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// To Loop All of the buttons: 
numberButtons.forEach(button => {
    // For Every Button, We add an EventListner: 
    button.addEventListener('click', () => {
        // To Add a Number when User Click on a Button:
        calculator.appendNumber(button.innerText);
        // To Update the Display when User Click on a Button:
        calculator.updateDisplay();
    })
})