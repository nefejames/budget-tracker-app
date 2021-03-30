import { AppContext } from "../context";
import { useContext } from "react";

import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
  const { expenses } = useContext(AppContext);
  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
}
