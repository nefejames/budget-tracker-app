import { TiDelete } from "react-icons/ti";

export default function ExpenseItem({ name, cost }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">£{cost}</span>
        <TiDelete size="1.5em"></TiDelete>
      </div>
    </li>
  );
}
