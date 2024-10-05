import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <NavLink to="/home">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};
export const Navbar2 = () => {
  return <h1>Navbar 2</h1>;
};

export default Navbar;
