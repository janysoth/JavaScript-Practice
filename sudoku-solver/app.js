const puzzleBoard = document.querySelector('#puzzle'); 
const solveButton = document.querySelector('#solve-button');
const solutionDisplay = document.querySelector('#solution');

const squares = 81;
let submission = [];

for (let i = 0; i < squares; i++) {
    // Create Input Element:
    const inputElement = document.createElement('input');

    // Set Attribute for Each Input Element:
    inputElement.setAttribute('type', 'number');
    inputElement.setAttribute('min', 1);
    inputElement.setAttribute('max', 9);

    // Add the color to the 5 small squares:
    if (
        ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i < 21) ||
        ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i < 27) ||
        ((i % 9 == 3 || i % 9 == 4 || i % 9 == 5) && (i > 27 && i < 53)) ||
        ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i > 53) ||
        ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i > 53) 
    
    ) {
      inputElement.classList.add("odd-section");
    }

    // Put Each Input Element into the puzzleBoard Div:
    puzzleBoard.appendChild(inputElement);
}

// To Get All of the User inputs for the squares: 
const joinValues = () => {
    // To Grab all of the Input Elements: 
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.value)
            submission.push(input.value);
        else 
            submission.push('.'); // A '.' symbolizes the empty box
    })

    console.log(submission);
}

// To Display the Solution based on the User's Inputs for the squares:
const populateValues = (isSolvable, solution) => {
    const inputs = document.querySelectorAll('input');
        if (isSolvable && solution) {
            inputs.forEach((input, i ) => {
                input.value = solution[i]; // Loop through the object
            })
            solutionDisplay.innerHTML = 'This is the answer!';
        } else {
            solutionDisplay.innerHTML = 'This is not solvable';
        }
}

// To Solve the Sudoku's Problems: 
const solve = () => {
    joinValues();
    const data = {numbers: submission.join('')};
    console.log('data', data);

    // To Fetch the API from server.js from the back-end:
    // Using localhost:8000, root solve:
    fetch ('http://localhost:8000/solve', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })  .then(response => response.json())
        .then(data => {
            console.log(data)
            populateValues(data.solvable, data.solution);
            submission = [];
        })
        .catch((error) => {
            console.error('Error:', error);
        })
    
}

solveButton.addEventListener('click', solve);