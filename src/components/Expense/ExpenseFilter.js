import React from "react";
import "./ExpenseFilter.css"

const ExpenseFilter = (props) => {

    const dropdownChangeHandler = (event) => {
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
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
            </div>
        </div >
    )
}

export default ExpenseFilter