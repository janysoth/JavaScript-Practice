import React  from "react"
import reactLogo from "../assets/react.svg";

function NavBar () {
  return (
    <nav>
      <img src={reactLogo} className="logo"/>
      <h3>ReacFacts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  )
}

export default NavBar