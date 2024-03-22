import React from "react"

export default function ApiCall() {
  const [starWarsData, setStarWarsData] = React.useState({})

  React.useEffect(() => {
    fetch("https://swapi.dev/api/people/1")
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, [starWarsData])

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}