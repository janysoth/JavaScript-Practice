function Meme() {
  return (
    <main>
      <form className="form">
        <div className="form--input-container">
          <label htmlFor="top-text">Top Text</label>
          <input
            id="top-text"
            type="text"
            placeholder="Shut up"
            className="form--input" />
        </div>
        <div className="form--input-container">
          <label htmlFor="bottom-text">Bottom Text</label>
          <input
            id="bottom-text"
            type="text"
            placeholder="and take my money"
            className="form--input" />
        </div>
        <button className="form--button">Get a new meme image 🖼</button>
      </form>
    </main>
  );
}

export default Meme;