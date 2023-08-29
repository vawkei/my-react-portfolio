import classes from "./About.module.css";
import profilepix from "../../assets/profilepix.jpg";
import profilePix from "../../assets/profilepix-removebg.png";
import { motion } from "framer-motion";
import {useMediaQuery} from "react-responsive";



const line1 = "World! Say Hello to Voke.";
const line2 =
  "I am Voke, a frontend developer who's known in the digital sphere as HowZ, HouseofwebZ.";
const line3 =
  "I have a heart that beats for the frontend, but it usually feels alive when I hear or read about backend technologies. I'm a Fullstack aspirant, who is really obsessed about the technologies used in building the web. Feel free to call it a beautiful obsession.";
const line4 =
  "When I'm not writing web codes or studying web codes,";
const line5 = "you'll find me watching football or immersed in captivating thrillers and crime TV series/movies.";
const line6 = "Or I might be having a good time on a Playstation.";
const line7 =
  "I'm actively seeking a frontend developer role as a React.js developer in an organization, where I can channel my creativity and skills into building stunning user interfaces.";
const line8 ="Additionally, I'm open to freelance opportunities for React projects.";
const line9 ="And yeah! Coding is not a job to me, Coding is my life.";
const line10 ="I'm pleased to make your acquaintance.";
const line11 = "Now let's get this party started...";

const containerVariant = {
// i set no hidden property for the container
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

  const isMobile = useMediaQuery({maxWidth:640});

  return (
    <motion.div
      className={classes.container}
      variants={containerVariant}
      initial="hidden"
      animate="visible">

      <h2>About Me</h2>
{/*===================== IMAGE =====================*/}
      <div className={classes.about}>
        {isMobile ?(
          <div className={classes.image}>
          <img src={profilePix} alt={profilePix} />
        </div>
        ):(
          <div className={classes.image}>
          <img src={profilepix} alt={profilepix} />
        </div>
        )}
        
{/*===================== DESCRIPTION =====================*/}        
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
          {line11.split("").map((character, index) => {
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
