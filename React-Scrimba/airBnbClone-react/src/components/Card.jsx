
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
          <span className="gray">({props.reviewCount}) • {props.location}</span>
          {/* <span className="gray">{props.location}</span> */}
        </div>
        <h2>{props.title}</h2>
        <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card