import classes from "./MainFooter.module.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 1, delayChildren: 2.7, staggerChildren: 0.5 },
  },
};


const socialsVariants = {
  hidden: { opacity: 0,x:-150},
  visible: { opacity: 1,x:0},
};

const MainFooter = () => {
  return (
    <div className={classes.footer}>
      <motion.div
        className={classes.socials}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible">
        <motion.div variants={socialsVariants}>instagram</motion.div>
        <motion.div variants={socialsVariants}>twitter</motion.div>
        <motion.div variants={socialsVariants}>linkedin</motion.div>
      </motion.div>
      <p>&copy;2023 All Rights Reserved.</p>
    </div>
  );
};

export default MainFooter;
