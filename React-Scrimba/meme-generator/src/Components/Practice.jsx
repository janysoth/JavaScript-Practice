import React from "react"
// import boxes from "../assets/boxes"
// import Box from "./Box"
import WindowTracker from "./WindowTracker";
// import Star from "./Star";
// import Header from "./Header"
// import Body from "./Body"

// function Practice () {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         lastName: "Doe",
//         phone: "+1 (719) 555-1212",
//         email: "itsmyrealname@example.com",
//         isFavorite: true
//     })

//     function toggleFavorite() {
//         setContact(prevContact => {
//             return {
//                 ...prevContact, 
//                 isFavorite: !prevContact.isFavorite
//             }
//         })
//     }
    
//     return (
//         <main>
//             <article className="card">
//                 <img src="./images/user.png" className="card--image" />
//                 <div className="card--info">
//                 <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
//                     <h2 className="card--name">
//                         {contact.firstName} {contact.lastName}
//                     </h2>
//                     <p className="card--contact">{contact.phone}</p>
//                     <p className="card--contact">{contact.email}</p>
//                 </div>
                
//             </article>
//         </main>
//     )
// }

// function Practice () {
//     const [squares, setSquares] = React.useState(boxes)
    
//     const toggleOn = (id) => {
//         setSquares(prevSquares => {
//             return prevSquares.map(square => {
//                 return square.id === id ? {...square, on: !square.on} : square
//             })
//         })
//     }
    
//     const squareElements = squares.map(square => (
//         <Box 
//             key={square.id} 
//             on={square.on} 
//             // toggle={toggleOn}
//             toggle={()=> toggleOn(square.id)}
//         />
//     ))
    
//     return (
//         <main>
//             {squareElements}
//         </main>
//     )
// }

function Practice () {
    const [show, setShow] = React.useState(true)

    const toggle = () => {
        setShow(prevShow => !prevShow)
    }

    return (
        <div className="container">
            <button onClick={toggle}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker/>}
        </div>
    )
}

export default Practice;