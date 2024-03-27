import React from "react"
import './App.css'
import MainContent from './components/MainContent'
import NavBar from './components/NavBar'

function App() {
  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className="container">
      <NavBar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode} />
      <MainContent
        darkMode={darkMode} />
    </div>
  )
}

export default App
