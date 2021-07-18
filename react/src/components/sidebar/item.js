export default function Item({ active, name, className, onClick }) {
  return (
    <li onClick={() => onClick?.()}>
      <a className={active && "active"}>
        <span className={`las la-${className}`}></span>
        <span>{name}</span>
      </a>
    </li>
  );
}
