// function Header(){
//   return (
//     <header className="header">
//       <img className="header--image" src="./images/troll-face.png"/>
//       <h2 className="header--title">Meme Generator</h2>
//       <h4 className="header--project">React Course - Project 3</h4>
//     </header>
//   )
// }

import React from "react"
function Header(props) {
    
    /**
     * Challenge:
     * Raise state up a level and pass it down to both the
     * Header and Body components through props.
     */
    // const [user, setUser] = React.useState("Joe")
    
    return (
        <header>
            <p>Current user: {props.user}</p>
        </header>
    )
}

export default Header