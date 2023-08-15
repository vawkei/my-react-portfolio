import classes from "./Home.module.css";
import profilePix from "../../assets/profilepix.jpg";
import { motion } from "framer-motion";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      delayChildren: 3.7,
      staggerChildren: 0.5,
    },
  },
};
const iconVariants = {
  hidden: { opacity: 0, },
  visible: { opacity: 1},
};

const Home = () => {
  return (
    <div className={classes.home}>
      <motion.div
        className={classes.icons}
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        
        <Link to="https://www.linkedin.com/in/voke-bernard/">
          <motion.div variants={iconVariants}>
            <AiFillLinkedin size={22} className={classes.icon} />
          </motion.div>
        </Link>

        <Link to="https://github.com/vawkei">
          <motion.div variants={iconVariants}>
            <AiFillGithub size={22} className={classes.icon} />
          </motion.div>
        </Link>
      </motion.div>
      <div className={classes["name-container"]}>
        <div className={classes.name}>
          <h1>
            Houseof<span>WebZ</span>
          </h1>
        </div>
        <div className={classes["name-description"]}>
          <p>{`${`I am Voke, but go by the name HouseofWebZ <HowZ/ >.`}`} </p>
          <p>
            I am a front-end developer, who is obsessed about becoming a
            full-stack developer.
          </p>
          <p>You are welcome to my portfolio.</p>
        </div>
      </div>
      <div className={classes["image-container"]}>
        <img src={profilePix} alt={"profilePix"} />
      </div>
    </div>
  );
};

export default Home;
