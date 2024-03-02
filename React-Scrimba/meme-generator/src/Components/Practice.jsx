import React from "react"

function Practice () {
    let [count, setCount] = React.useState(0)
    
    function add (){
      setCount(prevCount =>  prevCount + 1)
    }

    function minus(){
      if (count > 0)
      setCount(prevCount =>  prevCount -1 )
      else
      setCount(count = 0)
    }
    return (
        <div className="counter">
            <button className="counter--minus" onClick={minus}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}

export default Practice;