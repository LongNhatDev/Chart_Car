import React, { useState } from "react"
import styled from "styled-components"


import "./ExpenseForm.css"

const Button = styled.button`
    border: 1px solid black;
    &:focus
    {

    }
`;
const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("")

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            id: Math.floor(Math.random() * 1),
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        if (expenseData.title.trim().length === 0) return;
        if (expenseData.amount.trim().length === 0) return;
        if (expenseData.date.trim().length === 0) return;
    
        props.onSaveNewExpenseData(expenseData);
        setEnteredAmount("")
        setEnteredDate("");
        setEnteredTitle("")
    }
   
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className={`new-expense__control ${0 ? "invalid" : ""}`}>
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label >Amount</label>
                    <input type="number"
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                        value={enteredAmount}
                    ></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"
                        min="2021-01-01"
                        max="2022-01-20"
                        onChange={dateChangeHandler}
                        value={enteredDate}
                    ></input>
                </div>
                <div className="new-expense__actions">
                    <button type="reset">Cancel</button>
                    <button type="submit">Add New Expense</button>

                </div>
            </div>
        </form>
    )
};
export default ExpenseForm;
