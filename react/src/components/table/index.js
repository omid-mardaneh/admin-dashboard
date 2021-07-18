export default function Table({ header = [], items = [] }) {
  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            {header.map((name, index) => (
              <th key={index}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map(({ type, status, position, color }, index) => (
            <tr key={index}>
              <td>{position}</td>
              <td>{type}</td>
              <td>
                <span className={`status ${color}`} />
                {status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
