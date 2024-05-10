import React, { useState } from 'react'

const AddTransaction = () => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  console.log(text, amount);

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form>
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