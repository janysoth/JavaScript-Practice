import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transaction = (props) => {
  const sign = props.transaction.amount < 0 ? '-' : '+';;

  const { deleteTransaction } = useContext(GlobalContext)

  return (
    <li className={props.transaction.amount > 0 ? 'plus' : 'minus'}>
      {props.transaction.text}
      <span>{sign}${Math.abs(props.transaction.amount)}</span>
      <button className="delete-btn" onClick={() => deleteTransaction(props.transaction.id)}>
        x
      </button>
    </li>
  )
}

export default Transaction
