import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
import React,{useState} from "react";

import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [title,setTitle] =useState(props.title);

    const clickHandler=() =>{
      setTitle("Sold Out !!!");
      console.log(title);
    }
    return (
        <Card className="expense-item">
            <div className="expense-DateMonthYear">
                <ExpenseDate date={props.date}
                />
            </div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>BUY</button>
        </Card>
    );
}

export default ExpenseItem;