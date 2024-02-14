import './App.css'
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import katieZPhoto from "./assets/katie-zaferes.png"
import star from "./assets/star.png"

function App() {

  return (
    <div>
      <NavBar />
      <Hero />
      <Card 
        img= {katieZPhoto}
        rating={5}
        reviewCount={6}
        country="USA"
        star= {star}
        title= "Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  )
}

export default App
