import React from "react"
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveNewExpenseData = (enteredNewExpenseData) => {
        
        const expenseData ={
            ...enteredNewExpenseData,
        }
        props.onAddExpense(saveNewExpenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveNewExpenseData={saveNewExpenseData}/>
        </div>
    )
};

export default NewExpense;