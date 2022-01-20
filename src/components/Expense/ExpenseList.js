import React from 'react';
import "./ExpenseList.css"
import ExpenseItem from './ExpenseItem';

const ExpenseList =(props) =>{
    let expenseContent =  <p id="messageNoCar">No car in {props.selected}  !</p>
    if(props.filteredExpense.length>0){
        expenseContent= (props.filteredExpense.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />))
        )
    }

    return(
        <div className="storeOfItem">
             {expenseContent}
        </div>
        )
}
 export default ExpenseList
