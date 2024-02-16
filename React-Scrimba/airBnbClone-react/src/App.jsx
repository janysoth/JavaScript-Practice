import './App.css'
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Jokes from "./components/Jokes"

// import katieZPhoto from "./assets/katie-zaferes.png"
// import star from "./assets/star.png"

function App() {

  return (
    <div>
      <NavBar />
      <Hero />
      <Card 
        img= "katie-zaferes.png"
        rating={5}
        reviewCount={6}
        country="USA"
        star= "star.png"
        title= "Life Lessons with Katie Zaferes"
        price={136}
      />
      <Jokes />
    </div>
  )
}

export default App
