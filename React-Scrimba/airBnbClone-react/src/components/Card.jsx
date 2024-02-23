
function Card (props) {
  let badgeText
  if (props.openSpots === 0)
    badgeText = "SOLD OUT"
  else if (props.location === "Online")
    badgeText = "ONLINE"

  return (
    <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img 
            src={`/images/${props.coverImg}`}
            className="card--image"
            alt="Main Card Image" 
        />
        <div className="card--stats">
          <img 
              src={`/images/star.png`}
              className="card--star"
              alt="Star Icon"
          />
          <span>{props.stats.rating}</span>
          <span className="gray">({props.stats.reviewCount}) • {props.location}</span>
          {/* <span className="gray">{props.location}</span> */}
        </div>
        <h2>{props.title}</h2>
        <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card