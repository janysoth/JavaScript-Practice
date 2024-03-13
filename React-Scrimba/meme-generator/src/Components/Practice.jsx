import React from "react"
import boxes from "../assets/boxes"
import Box from "./Box"
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

function Practice () {
    const [squares, setSquares] = React.useState(boxes)
    
    const toggleOn = (id) => {
        setSquares(prevSquares => {
            return prevSquares.map(square => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggleOn}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}

export default Practice;