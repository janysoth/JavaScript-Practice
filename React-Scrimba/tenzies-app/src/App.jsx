import React from "react"
import Die from "./components/Die"
import { nanoid } from "nanoid"

function App() {

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      // Math.ceil function to start the number at 1
      const randomNum = Math.ceil(Math.random() * 6)
      newDice.push({
        value: randomNum,
        isHeld: false,
        id: nanoid(),
      })
    }
    return newDice
  }

  /**
   *  * Challenge:
 * 
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `allNewDice` function so it 
 * loads all new dice as soon as the app loads)
 * 
 * Map over the state numbers array to generate our array
 * of Die elements and render those in place of our
 * manually-written 10 Die elements.
 */
  // Create state to hold an array of numbers. 
  // Initialize the state by calling allNewDice functiion
  // to load all new dice as soon as the app loads
  const [dice, setDice] = React.useState(allNewDice())

  // Map over the state numbers array to generate the array
  // of Die elements and render those in the Die component
  // Each mapping, it will render one Die component with the value
  // and display those value in the main tag
  const diceElements = dice.map(die =>
    <Die value={die.value} key={die.id} />
  )

  function rollDice() {
    setDice(allNewDice())
  }

  return (
    <div className="dice-outer">
      <main>
        <div className="dice-container">
          {diceElements}
        </div>
        <button className="roll-dice" onClick={rollDice}>Roll</button>
      </main>
    </div>
  )
}

export default App
