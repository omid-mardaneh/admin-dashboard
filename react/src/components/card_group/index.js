export default function CardGroup({ name, children, className }) {
  return (
    <div className={className}>
      <div className="card">
        <div className="card-header">
          <h3>{name}</h3>
          <button>
            See all
            <span className="las la-arrow-right" />
          </button>
        </div>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}
