import React from "react"

// function Practice () {
//     let [count, setCount] = React.useState(0)
    
//     function add (){
//       setCount(prevCount =>  prevCount + 1)
//     }

//     function minus(){
//       if (count > 0)
//       setCount(prevCount =>  prevCount -1 )
//       else
//       setCount(count = 0)
//     }
//     return (
//         <div className="counter">
//             <button className="counter--minus" onClick={minus}>–</button>
//             <div className="counter--count">
//                 <h1>{count}</h1>
//             </div>
//             <button className="counter--plus" onClick={add}>+</button>
//         </div>
//     )
// }

function Practice () {

    const [isGoingOut, setIsGoingOut] = React.useState(true);

    function changeMind(){
      setIsGoingOut(prevState => !prevState)
    }

    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <button onClick={changeMind} className="state--value">
                {isGoingOut ? "Yes" : "No"}
            </button>
        </div>
    )
}

export default Practice;