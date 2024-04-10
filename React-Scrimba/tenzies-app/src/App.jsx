import React from "react"
import Die from "./components/Die"
function App() {

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      // Math.ceil function to start the number at 1
      const randomNum = Math.ceil(Math.random() * 6)
      newDice.push(randomNum)
    }
    return newDice
  }

  return (
    <div className="dice-outer">
      <main>
        <div className="dice-container">
          <Die value="1" />
          <Die value="2" />
          <Die value="3" />
          <Die value="4" />
          <Die value="5" />
          <Die value="6" />
          <Die value="5" />
          <Die value="4" />
          <Die value="3" />
          <Die value="2" />
        </div>
      </main>
    </div>
  )
}

export default App
