import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.expensedata[0].title}
        amount={props.expensedata[0].amount}
        date={props.expensedata[0].date}
      />
      <ExpenseItem
        title={props.expensedata[1].title}
        amount={props.expensedata[1].amount}
        date={props.expensedata[1].date}
      />
      <ExpenseItem
        title={props.expensedata[2].title}
        amount={props.expensedata[2].amount}
        date={props.expensedata[2].date}
      />
      <ExpenseItem
        title={props.expensedata[3].title}
        amount={props.expensedata[3].amount}
        date={props.expensedata[3].date}
      />
    </div>
  );
}

export default Expenses;
