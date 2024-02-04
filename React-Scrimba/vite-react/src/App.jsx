import React from "react"
import './App.css'
import MainContent from './components/MainContent'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="container">
      <NavBar/>
      <MainContent/>
    </div>
  )
}

export default App
