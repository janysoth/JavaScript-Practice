function Meme(){
  return (
        <main>
            <form className="form">
                <label htmlFor="top-text">Top Text</label>
                  <input
                    id="top-text"
                    type="text"
                    placeholder="Shut up"
                    className="form--input" />
                <label htmlFor="bottom-text">Bottom Text</label>
                  <input
                    id="bottom-text"
                    type="text"
                    placeholder="and take my money"
                    className="form--input" />
                <button className="form--button">Get a new meme image 🖼</button>
            </form>
        </main>
  )
}

export default Meme