import memesData from "../assets/memesData";

function Meme() {

  function getMemesImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const {url} = memesArray[randomNumber]
    console.log({url})
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
    </main>
  );
}

export default Meme;