import React  from "react"
import reactLogo from "../assets/react.svg";

function NavBar () {
  return (
    <nav>
      <img src={reactLogo} className="nav--icon"/>
      <h3 class="nav--logo_text">ReactFacts</h3>
      <h4 class="nav--title">React Course - Project 1</h4>
    </nav>
  )
}

export default NavBar