import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //Passing data up to App.js
    props.onAddExpense(expenseData);
    closeForm();
  }

  function openForm() {
    setIsFormOpen(true);
  }

  function closeForm() {
    setIsFormOpen(false);
  }

  if (isFormOpen) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelExpense={closeForm}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button onClick={openForm}>Add Expense</button>
      </div>
    );
  }
}

export default NewExpense;
