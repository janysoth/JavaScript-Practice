import React from "react"
import memesData from "../assets/memesData";

function Meme() {

  const [memeImage, setMemImage] = React.useState("")

  function getMemesImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemImage(memesArray[randomNumber].url)
  }

  return (
    <main>
      <div className="form">
        <input 
            type="text"
            placeholder="Top text"
            className="form--input"
        />
        <input 
            type="text"
            placeholder="Bottom text"
            className="form--input"
        />
        <button 
            className="form--button"
            onClick={getMemesImage}
        >
            Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} className="meme--image" />
    </main>
  );
}

export default Meme;