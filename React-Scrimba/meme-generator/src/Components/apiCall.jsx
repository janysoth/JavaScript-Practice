import React from "react"

export default function ApiCall() {
  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(1)

  const api = `https://swapi.dev/api/people/${count}`

  function setCounter() {
    setCount(prevCount => prevCount + 1)
  }

  React.useEffect(function () {
    console.log("Effect ran")
    fetch(api)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, [count])

  return (
    <div>
      <h2>The count is {count}</h2>
      <button onClick={setCounter}>Get Next Character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}