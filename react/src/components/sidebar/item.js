export default function Item({ active, name, className }) {
  return (
    <li>
      <a className={active && "active"}>
        <span className={`las la-${className}`}></span>
        <span>{name}</span>
      </a>
    </li>
  );
}
