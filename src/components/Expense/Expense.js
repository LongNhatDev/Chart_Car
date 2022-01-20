import "./Expense.css"

import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter"

import Read, { useState } from "react"

const Expense = (props) => {
    // useState year 
    const [filteredYear, setFilteredYear] = useState("2021");
    // Handler change year
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    return (
        <Card className="App">
            {/* Filter */}
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

            {/* list of items */}
            {props.item.map(expense => (
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />))}
        </Card>
    )
}

export default Expense;