import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navDataHandler = (navData) => {
    return navData.isActive ? classes.active : "";
  };

  return (
    <div className={classes.header}>
      <div>
        <h1>HowZ</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink className={navDataHandler} to={"/"}>
              Home
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink className={navDataHandler} to={"/about"}>
              About
            </NavLink>{" "}
          </li>
          <li>
            <NavLink className={navDataHandler} to={"/skills"}>
              {" "}
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink className={navDataHandler} to={"/projects"}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className={navDataHandler} to={"/contact"}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
