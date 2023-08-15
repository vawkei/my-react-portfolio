import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Fragment } from "react";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 3, delayChildren: 3.7, staggerChildren: 0.5 },
    // transition: { delay: 3, delayChildren: 2.7, staggerChildren: 0.5 },
  },
};
const items = {
  hidden: { opacity: 0, x: -150 },
  visible: { opacity: 1, x: 0 },
};

const Header = () => {
  const navDataHandler = (navData) => {
    return navData.isActive ? classes.active : "";
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Fragment>
      {isMobile ? (
        <motion.div
          className={classes.header}
          variants={containerVariant}
          initial="hidden"
          animate="visible">
          <div>
            <motion.h1
              initial={{ y: -300 }}
              animate={{
                y: 0,
                transition: {
                  delay: 3,
                  duration: 3,
                  type: "spring",
                  stiffness: 500,
                },
              }}>
              HowZ
            </motion.h1>
          </div>
          <nav>
            <ul>
              <motion.li variants={items}>
                <NavLink className={navDataHandler} to={"/"}>
                  Home
                </NavLink>{" "}
              </motion.li>
              <motion.li variants={items}>
                {" "}
                <NavLink className={navDataHandler} to={"/about"}>
                  About
                </NavLink>{" "}
              </motion.li>
              <motion.li variants={items}>
                <NavLink className={navDataHandler} to={"/skills"}>
                  {" "}
                  Skills
                </NavLink>
              </motion.li>
              <motion.li variants={items}>
                <NavLink className={navDataHandler} to={"/projects"}>
                  Projects
                </NavLink>
              </motion.li>
              <motion.li variants={items}>
                <NavLink className={navDataHandler} to={"/contact"}>
                  Contact
                </NavLink>
              </motion.li>
            </ul>
          </nav>
        </motion.div>
      ) : (
        <div className={classes.header}>
          <div>
            <motion.h1
              initial={{ x: -300 }}
              animate={{
                x: 0,
                transition: { delay: 2, duration: 3, ease: "easeInOut" },
              }}>
              HowZ
            </motion.h1>
          </div>
          <nav>
            <motion.ul
              initial={{ y: -100 }}
              animate={{
                y: 0,
                transition: { delay: 6, type: "spring", stiffness: 500 },
              }}>
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
            </motion.ul>
          </nav>
        </div>
      )}
    </Fragment>
  );
};

export default Header;
