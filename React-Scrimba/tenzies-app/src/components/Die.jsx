// export default function Die(props) {
//   const styles = {
//     backgroundColor: props.isHeld ? "#59E391" : "white"
//   }

//   return (
//     <div
//       className="die-face"
//       style={styles}
//       onClick={props.holdDice}
//     >
//       <h2 className="die-num">{props.value}</h2>
//     </div>
//   )
// }

// components/Die.js
import React from 'react';

function Die({ value, isHeld, imageUrl, holdDice }) {
  const imageStyle = {
    backgroundColor: isHeld ? '#59E391' : 'transparent',
    borderRadius: isHeld ? '12px' : '0px',
  };

  return (
    <div className={`die ${isHeld ? 'held' : ''}`} onClick={holdDice}>
      <img 
        src={imageUrl} 
        alt={`Dice ${value}`} 
        className="die-image"
        style={imageStyle} // Apply dynamic background color
      />
    </div>
  );
}

export default Die;


