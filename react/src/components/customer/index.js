export default function Customer({ name, type }) {
  return (
    <div className="customer">
      <div className="info">
        <img src="./img/2.jpg" width="40px" height="40px" alt="" />
        <div>
          <h4>{name}</h4>
          <small>{type}</small>
        </div>
        <div className="contact">
          <span className="las la-user-circle" />
          <span className="las la-comment" />
          <span className="las la-phone" />
        </div>
      </div>
    </div>
  );
}
