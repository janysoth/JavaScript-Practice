import katieZPhoto from "../assets/katie-zaferes.png"
import star from "../assets/star.png"

function Card () {
  return (
    <div className="card">
        <img 
            src={katieZPhoto} 
            className="card--image"
            alt="Main Card Image" 
        />
        <div className="card--stats">
          <img 
              src={star} 
              className="card--star"
              alt="Star Icon"
          />
          <span>5.0</span>
          <span className="gray">(6) • </span>
          <span className="gray">USA</span>
        </div>
        <h2>Life Lessons with Katie Zaferes</h2>
        <p><span className="bold">From $136</span> / person</p>
    </div>
  )
}

export default Card