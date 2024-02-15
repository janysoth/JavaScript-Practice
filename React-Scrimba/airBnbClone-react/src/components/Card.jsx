
function Card (props) {
  return (
    <div className="card">
        <img 
            src={`/images/${props.img}`}
            className="card--image"
            alt="Main Card Image" 
        />
        <div className="card--stats">
          <img 
              src={`/images/${props.star}`}
              className="card--star"
              alt="Star Icon"
          />
          <span>{props.rating}</span>
          <span className="gray">({props.reviewCount}) • </span>
          <span className="gray">{props.country}</span>
        </div>
        <h2>{props.title}</h2>
        <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card