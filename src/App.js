import './App.css';

import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expense from './components/Expense/Expense';

const DUMMY_EXPENSES = [
  {
    id:"1",
    title: "Cadilac Luxury",
    amount: 294.67,
    date: new Date(2021, 7, 18)
  },
  {
    id:"2",
    title: "Vinfast Turbo 2.0",
    amount: 194.67,
    date: new Date(2022, 12, 3)
  },
  {
    id:"3",
    title: "Lexus LX570",
    amount: 888.22,
    date: new Date(2022, 8, 25)
  },
  {
    id:"4",
    title: "Mec MayBach",
    amount: 777.67,
    date: new Date(2021, 2, 11)
  }
]

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  // Handler add new Item
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Tran Long Nhat</p>
        <p> Branch Master</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
