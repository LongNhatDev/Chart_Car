import "./Expense.css"

import Card from "../UI/Card"
import ExpenseFilter from "./ExpenseFilter"

import React,{ useState } from "react"
import ExpenseList from "./ExpenseList"

const Expense = (props) => {
    // useState year 
    const [filteredYear, setFilteredYear] = useState("2021");
    // Handler change year
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpense = props.item.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <Card className="App">
            {/* Filter */}
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler} />

            {/* Value store list item */}
            <ExpenseList 
            filteredExpense={filteredExpense}
            selected={filteredYear}/>
            
        </Card>
    )
}

export default Expense;