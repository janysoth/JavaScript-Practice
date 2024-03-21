import React from "react"

export default function ApiCall() {
  const [starWarsData, setStarWarsData] = React.useState({})

  // 1. GET the data (fetch)
  // 2. Save the data to state

  fetch("https://swapi.dev/api/people/1")
    .then(res => res.json())
    .then(data => setStarWarsData(data))

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}