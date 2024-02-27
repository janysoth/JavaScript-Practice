function Meme(){
  return (
        <main>
            <form className="form">
                <label>Top Text
                  <input
                    type="text"
                    placeholder="Shut up"
                    className="form--input" />
                </label>
                <label>Bottom Text
                  <input
                    type="text"
                    placeholder="and take my money"
                    className="form--input" />
                </label>
                <button className="form--button">Get a new meme image 🖼</button>
            </form>
        </main>
  )
}

export default Meme