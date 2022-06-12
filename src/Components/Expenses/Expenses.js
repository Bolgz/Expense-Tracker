import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <ExpenseItem
          title={props.expensesList[0].title}
          amount={props.expensesList[0].amount}
          date={props.expensesList[0].date}
        />
        <ExpenseItem
          title={props.expensesList[1].title}
          amount={props.expensesList[1].amount}
          date={props.expensesList[1].date}
        />
        <ExpenseItem
          title={props.expensesList[2].title}
          amount={props.expensesList[2].amount}
          date={props.expensesList[2].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
