import classes from "./MainFooter.module.css";
import { motion } from "framer-motion";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {delayChildren: 1.7, staggerChildren: 0.5 },
  },
};

const socialsVariants = {
  hidden: { opacity: 0, x: -150 },
  visible: { opacity: 1, x: 0 },
};

const MainFooter = () => {
  return (
    <div className={classes.footer}>
      <motion.div
        className={classes.socials}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible">
        <motion.div variants={socialsVariants}>
          <Link to={"https://www.instagram.com/houseofwebz"}>
            <AiOutlineInstagram
              className={`${classes.insta} ${classes.social}`}
            />
          </Link>
        </motion.div>

        <motion.div variants={socialsVariants}>
          <Link to={"https://twitter.com/lordofreact"}>
            <AiOutlineTwitter className={`${classes.twit} ${classes.social}`} />
          </Link>
        </motion.div>

        <motion.div variants={socialsVariants}>
          <Link to={"https://www.linkedin.com/in/voke-bernard/"}>
            <AiOutlineLinkedin
              className={`${classes.linked} ${classes.social}`}
            />
          </Link>
        </motion.div>
      </motion.div>
      <p>&copy;2024 All Rights Reserved.</p>
    </div>
  );
};

export default MainFooter;
