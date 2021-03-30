export default function Card({ alertType, data }) {
  return (
    <div className={`alert ${alertType ? alertType : "alert-secondary"}`}>
      <span>{data}</span>
    </div>
  );
}
