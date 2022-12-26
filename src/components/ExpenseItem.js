import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date().toLocaleDateString();
  const expenseTitle = "Test expense";
  const expenseAmount = 100.51;
  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{`${expenseAmount} €`}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
