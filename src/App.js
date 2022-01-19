import Card from "./components/UI/Card"
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseItem from './components/Expense/ExpenseItem';

import './App.css';

const App = () => {
  const expenses = [
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

  const addExpenseHandler = expense => {
    console.log("In app JS !");
    console.log(expense)
  }

  return (
    <Card className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>

      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );

}

export default App;
