import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer.jsx';

// Initial State
const initialState = {
  transactions: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Create Provider component for another component to use
// The Provider is used to provide the state to other components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions to make the calls to the reducer
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    })
  }
  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction,
    }}>
      {children}
    </GlobalContext.Provider>
  );
}