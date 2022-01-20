import React from "react";
import ExpenseChart from "./ExpenseChart";
import "./ExpenseFilter.css"

const ExpenseFilter = (props) => {

    const dropdownChangeHandler=(event) =>{
        props.onChangeFilter(event.target.value);
    }
    return (
        <div className="filterHandler">
            <div className="titleFilter">
                <p>Filter by year</p>
                <select value={props.seleteced} onChange={dropdownChangeHandler}>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
            <ExpenseChart className="demoFilter"

            />
        </div >
    )
}

export default ExpenseFilter