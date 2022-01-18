import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from "./Card";

function ExpenseItem(props) {
    return (
        <Card className="expense-item">
            <div className="expense-DateMonthYear">
                <ExpenseDate date={props.date}
                />
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;