import React from 'react'

const AddTransaction = () => {
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor='text'>Text</label>
          <input type="text" id="text" placeholder='Enter Description Here...' />
        </div>
        <div className="form-control">
          <label htmlFor='amount'>Amount <br />
            (Negative for Expense, Positive for Income)
          </label>
          <input type='number' id='amount' placeholder='Enter Amount Here...'></input>
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction