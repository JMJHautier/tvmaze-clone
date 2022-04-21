import "./Nav.scss";

const Nav = () => {
  return (
    <nav>
      <div className="Nav__header">
        <div className="Nav__logo">
          <img src="./logo.png" alt="logo" />
        </div>
        <div className="Nav__search">Search bar</div>
        <ul className="Nav__login">
          <li> Login </li>
          <li> Register </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
