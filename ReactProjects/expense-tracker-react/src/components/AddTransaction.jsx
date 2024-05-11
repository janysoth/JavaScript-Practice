import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState();
  const { addTransaction } = useContext(GlobalContext);

  // To Submit Transaction to state
  const submitTransaction = e => {
    e.preventDefault();

    const newTransaction = {
      id: generateId(),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText('');
    setAmount('');
  }

  const generateId = () => {
    return Math.floor(Math.random() * 10000000);
  }

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={submitTransaction}>
        <div className="form-control">
          <label htmlFor='text'>Text</label>
          <input type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter Description Here...' />
        </div>
        <div className="form-control">
          <label htmlFor='amount'>Amount <br />
            (Negative for Expense, Positive for Income)
          </label>
          <input type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter Amount Here...'></input>
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction