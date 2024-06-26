import React from "react"
import Die from "./components/Die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
import Dice1 from "./assets/Dice-1-b.png"
import Dice2 from "./assets/Dice-2-b.png"
import Dice3 from "./assets/Dice-3-b.png"
import Dice4 from "./assets/Dice-4-b.png"
import Dice5 from "./assets/Dice-5-b.png"
import Dice6 from "./assets/Dice-6-b.png"

function App() {

  // Create state to hold an array of numbers. 
  // Initialize the state by calling allNewDice function
  // to load all new dice as soon as the app loads
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  const [rollCount, setRollCount] = React.useState(0)
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let timer;

    if (timerOn && !tenzies) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    // Clear the interval when tenzies becomes true
    if (tenzies) {
      clearInterval(timer);
      setTimerOn(false);
    }

    return () => {
      clearInterval(timer);
    };
  }, [timerOn, tenzies]);

  function startTimer() {
    if (!timerOn) {
      setTimerOn(true);
    }
  }

  React.useEffect(() => {
    // .every function to return true if every items are true
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
    }
  }, [dice])

  // Helper function to generate new die
  function generateNewDie() {
    const randomNum = Math.floor(Math.random() * 6);
    const images = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

    // Ensure randomNum doesn't exceed the length of the images array
    // const index = randomNum - 1 < images.length ? randomNum - 1 : 0;

    return {
      value: randomNum,
      isHeld: false,
      id: nanoid(),
      imageUrl: images[randomNum],
    };
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
        { ...die, isHeld: !die.isHeld } : die
    }))
  }

  function rollDice() {
    setRollCount(oldRollCount => oldRollCount + 1);
    startTimer(); // Start the timer when the user clicks Roll
    if (!tenzies) {
      setDice(oldDice => oldDice.map(die =>
        die.isHeld ? die : generateNewDie()
      ));
    } else {
      resetGame()
    }
  }

  // Helper function to reset game 
  function resetGame() {
    setTenzies(false);
    setDice(allNewDice());
    setRollCount(0);
    setTime(0); // Reset timer when starting a new game
    setTimerOn(false); // Stop the timer when tenzies is true
  }

  // Map over the state numbers array to generate the array
  // of Die elements and render those in the Die component
  // Each mapping, it will render one Die component with the value
  // and display those value in the main tag
  const diceElements = dice.map((die) => (
    <Die
      value={die.value}
      key={die.id}
      isHeld={die.isHeld}
      imageUrl={die.imageUrl}
      holdDice={() => holdDice(die.id)}
    />
  ));

  const styles = {
    backgroundColor: tenzies ? '#59E391' : 'red'
  }
  return (
    <div className="dice-outer">
      {tenzies && <Confetti />}
      <main>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
          {diceElements}
        </div>
        <div className="roll-container">
          <div className="roll-counter" style={styles} onClick={resetGame}>
            Count: {rollCount}
          </div>
          <button className="roll-dice" onClick={rollDice}>
            {tenzies ? "New Game" : "Roll"}
          </button>
          <div className="roll-timer" style={styles} onClick={resetGame}>
            Timer: {formatTime(time)}
          </div>
        </div>
      </main>
    </div>
  )
}

// Helper function to format time in MM:SS format
function formatTime(time) {
  const minutes = Math.floor(time / 60).toString().padStart(1, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

export default App
