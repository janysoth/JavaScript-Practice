import './App.css'
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Jokes from "./components/Jokes"
import jokesData from './assets/jokesData'
import cardData from './assets/data'

// import katieZPhoto from "./assets/katie-zaferes.png"
// import star from "./assets/star.png"

function App() {
  const jokesElement = jokesData.map(joke => {
    return <Jokes 
              setup={joke.setup}
              punchline={joke.punchline}
            />
  })

  const cardsElement = cardData.map(data => {
    return <Card 
              img={data.coverImg}
              star="star.png"
              rating={data.stats.rating}
              reviewCount={data.stats.reviewCount}
              location={data.location}
              title={data.title}
              price={data.price}
            />
  })
  return (
    <div>
      <NavBar />
      <Hero />
      {cardsElement}
    </div>
  )
}

export default App
