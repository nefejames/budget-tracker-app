import { useContext } from "react";
import Head from "next/head";
import Card from "../components/Card";
import ExpenseList from "../components/ExpenseList";
import AddExpenseForm from "../components/AddExpenseForm";
import { AppContext } from "../context";

export default function Home() {
  const { budget } = useContext(AppContext);

  return (
    <div className="container">
      <Head>
        <title>Budget Tracker App</title>
      </Head>

      <h1 className="mt-3">My Budget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Card data={`Budget: £${budget}`} />
        </div>
        <div className="col-sm">
          <Card data="Remaining: £1000" />
        </div>
        <div className="col-sm">
          <Card data="Spent so far: £1000" />
        </div>
      </div>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>

      <h3 className="mt-3">Add Expense</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpenseForm />
        </div>
      </div>
    </div>
  );
}
