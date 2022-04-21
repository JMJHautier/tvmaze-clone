import Search from "antd/lib/transfer/search";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  const onSearch = (value: any) => console.log(value);
  const [value, setValue] = useState("");
  const history = useHistory();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    return history.push(`/search/${value}`);
  };

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <nav>
      <div className="Nav__header">
        <div className="Nav__logo">
          <Link to="/">
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            name="search"
            type="text"
            placeholder="enter search here"
            value={value}
            onChange={handleChange}
          />
          <button type="submit">search</button>
        </form>
        {/* <Search
          placeholder="input search text"
          onSearch={onSearch}
        /> */}
        <ul className="Nav__login">
          <li> Login </li>
          <li> Register </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
