import "./ExpenseDate.css"

function ExpenseDate(props) {
    const month = props.date.toLocaleString("en-US", { month: 'long' });
    const year = props.date.getFullYear();
    const date = props.date.toLocaleString("en-US", { day: 'numeric' });

    return (
        <div className="expense-date">
            <div className="size1">{month}</div>
            <div className="size2">{year}</div>
            <div className="size3">{date}</div>
        </div>)
}

export default ExpenseDate;

