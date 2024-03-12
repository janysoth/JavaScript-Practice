import React from "react"
// import Star from "./Star";
import Header from "./Header"
import Body from "./Body"

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

    const [user, setUser] = React.useState("Jonny")
    return (
        <main>
            <Header user = {user} />
            <Body user = {user} />
        </main>
    )
}

export default Practice;