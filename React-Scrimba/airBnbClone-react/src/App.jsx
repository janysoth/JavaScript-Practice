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
  const cards = cardData.map(item => {
    return <Card
              key={item.id}
              {...item}
            />
  })
  return (
    <div>
      <NavBar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App
