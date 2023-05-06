const puzzleBoard = document.querySelector('#puzzle'); 
const solveButton = document.querySelector('#solve-button');
const solutionDisplay = document.querySelector('#solution');

const squares = 81;
const submission = [];

for (let i = 0; i < squares; i++) {
    // Create Input Element:
    const inputElement = document.createElement('input');

    // Set Attribute for Each Input Element:
    inputElement.setAttribute('type', 'number');
    inputElement.setAttribute('min', 1);
    inputElement.setAttribute('max', 9);

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

const solve = () => {
    joinValues();
    const data = submission.join('');
    console.log('data', data);
    const options = {
        method: 'POST',
        url: 'https://solve-sudoku.p.rapidapi.com/',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com'
        },
        data: {
            puzzle: data
        }
    };

    axios.request(options).then((response) => {
        console.log(response.data);
        populateValues(response.data.solvable, response.data.solution);
    }).catch((error) => {
        console.log(error);
    });
    // try {
    //     const response = await axios.request(options);
    //     console.log(response.data);
    // } catch (error) {
    //     console.error(error);
    // }
}

solveButton.addEventListener('click', solve);