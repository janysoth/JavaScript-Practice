/* eslint-disable react/prop-types */
function Star (props) {
  const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"

  return (
    <div>
      <img 
        src={`../images/${starIcon}`} 
        className="card--favorite"
        onClick={props.handleClick}
      />
    </div>
  )
}

export default Star