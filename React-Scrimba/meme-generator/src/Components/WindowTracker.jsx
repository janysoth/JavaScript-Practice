import React from "react"

export default function WindowTracker() {

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    const watchWidth = () => {
      console.log("Window Resized")
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", watchWidth)

    // useEffect Cleanup 
    // To clean up any sideEffect
    // use function to  ensure the event listener is removed when this component unmounts
    return function () {
      console.log("Cleaning up")
      window.removeEventListener("resize", watchWidth)
    }
  }, [])

  return (
      <h1>Window width: {windowWidth}</h1>
  )
}