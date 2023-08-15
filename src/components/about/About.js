import classes from "./About.module.css";
import profilepix from "../../assets/profilepix.jpg";
import { motion } from "framer-motion";

const line1 = "World! Say Hello to Voke.";
const line2 =
  "I am Voke, a frontend developer who goes by the name of HowZ, House of webz.";
const line3 =
  "I am also a Fullstack aspirant who is really obsessed with the technologies used in building the web.";
const line4 =
  "Passionate about the front end, but usually light up whenever I hear anything concerning the backend.";
const line5 =
  "When I am not writing web codes or studying web codes, I usually watch football.";
const line6 = "Or watching a thriller type or crime type TV series.";
const line7 = "Or could be occupied playing Playstation.";
const line8 =
  "I am actively seeking a frontend developer role in an organization where I can apply my creativity. I am also available for work on frontend projects as a freelancer.";
const line9 ="And yeah! Coding is not a job to me, Coding is my life.";
const line10 ="Pleased to meet you.";

const containerVariant = {
  hidden: { x: -900 },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 100, delayChildren: 1.7 },
  },
};
const sentence = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, ease: "easeInOut" },
  },
};

const letters = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, },
};

const About = () => {
  return (
    <motion.div
      className={classes.container}
      variants={containerVariant}
      initial="hidden"
      animate="visible">

      <h2>About Me</h2>
      <div className={classes.about}>
        <div className={classes.image}>
          <img src={profilepix} alt={profilepix} />
        </div>
        
        <motion.div className={classes["about-desc"]} variants={sentence}>
          {line1.split("").map((character, index) => {
            return (
              <motion.span key={index} variants={letters}>
                {character}
              </motion.span>
            );
          })}
          <br />
          {line2.split("").map((character, index) => {
            return (
              <motion.span key={index} variants={letters}>
                {character}
              </motion.span>
            );
          })}
          <br />
          {line3.split("").map((character, index) => {
            return (
              <motion.span key={index} variants={letters}>
                {character}
              </motion.span>
            );
          })}
          <br />
          {line4.split("").map((character, index) => {
            return (
              <motion.span key={index} variants={letters}>
                {character}
              </motion.span>
            );
          })}
          <br />
          {line5.split("").map((character, index) => {
            return (
              <motion.span key={index} variants={letters}>
                {character}
              </motion.span>
            );
          })}
          <br />
          {line6.split("").map((character, index) => {
            return (
              <motion.span key={index} variants={letters}>
                {character}
              </motion.span>
            );
          })}
          <br />
          {line7.split("").map((character, index) => {
            return (
              <motion.span key={index} variants={letters}>
                {character}
              </motion.span>
            );
          })}
          <br />
          {line8.split("").map((character, index) => {
            return (
              <motion.span key={index} variants={letters}>
                {character}
              </motion.span>
            );
          })}
          <br />
          {line9.split("").map((character, index) => {
            return (
              <motion.span key={index} variants={letters}>
                {character}
              </motion.span>
            );
          })}
          <br />
          {line10.split("").map((character, index) => {
            return (
              <motion.span key={index} variants={letters}>
                {character}
              </motion.span>
            );
          })}
          <br />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
