export default function Card({ name, number, className }) {
  return (
    <div className="card-single">
      <div>
        <h1>{number}</h1>
        <span>{name}</span>
      </div>
      <div>
        <span className={`las la-${className}`} />
      </div>
    </div>
  );
}
