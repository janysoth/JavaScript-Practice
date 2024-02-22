
function Card (props) {
  let badgeText
  if (props.item.openSpots === 0)
    badgeText = "SOLD OUT"
  else if (props.item.location === "Online")
    badgeText = "ONLINE"

  return (
    <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img 
            src={`/images/${props.item.coverImg}`}
            className="card--image"
            alt="Main Card Image" 
        />
        <div className="card--stats">
          <img 
              src={`/images/star.png`}
              className="card--star"
              alt="Star Icon"
          />
          <span>{props.item.stats.rating}</span>
          <span className="gray">({props.item.stats.reviewCount}) • {props.item.location}</span>
          {/* <span className="gray">{props.location}</span> */}
        </div>
        <h2>{props.item.title}</h2>
        <p><span className="bold">From ${props.item.price}</span> / person</p>
    </div>
  )
}

export default Card