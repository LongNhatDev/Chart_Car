import './App.css';

import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expense from './components/Expense/Expense';


const DUMMY_EXPENSES = [
  {
    title: "Cadilac Luxury",
    amount: 294.67,
    date: new Date(2021, 7, 18)
  },
  {
    title: "Vinfast Turbo 2.0",
    amount: 194.67,
    date: new Date(2022, 12, 3)
  },
  {
    title: "Lexus LX570",
    amount: 888.22,
    date: new Date(2022, 8, 25)
  },
  {
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
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense item={expenses} />
    </div>
  );
}


export default App;
