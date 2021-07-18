export default function Header({ isActive, setIsActive }) {
  return (
    <header>
      <h2>
        <label onClick={() => setIsActive(!isActive)}>
          <span className="las la-bars" />
        </label>
        Dashboard
      </h2>

      <div className="search-wrapper">
        <span className="las la-search" />
        <input type="search" placeholder="Search here" />
      </div>

      <div className="user-wrapper">
        <img src="./img/2.jpg" width="40px" height="40px" alt="" />
        <div>
          <h4>omid</h4>
          <small>Super admin</small>
        </div>
      </div>
    </header>
  );
}
