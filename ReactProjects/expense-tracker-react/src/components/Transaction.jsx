import React from 'react'

const Transaction = (props) => {
  const sign = props.transaction.amount < 0 ? '-' : '+';

  return (
    <li className={props.transaction.amount > 0 ? 'plus' : 'minus'}>
      {props.transaction.text}
      <span>{sign}${Math.abs(props.transaction.amount)}</span>
      <button className="delete-btn">x</button>
    </li>
  )
}

export default Transaction
