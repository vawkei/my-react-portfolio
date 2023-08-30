import classes from "./Skills.module.css";
import {motion} from "framer-motion";


const Skills = () => {

  const lessThanZero= "<0";
  const zeroTo39 = "0-39";
  const fortyTo59 = "40-59";
  const sixtyTo79 = "60-79";
  const eigthyTo100 = ">80";

  return (
    
      <motion.div 
      className={classes.container}
      initial={{y:900}}
      animate={{y:0,transition:{type:"spring",stiffness:100}}}
      exit={{x:"-120vw",transition:{delay:5,type:'spring',stiffness:500}}}
      >
        <motion.h2
         exit={{y:"100vh",transition:{delay:4.5, type:"spring",stiffness:500}}}
        >Skills</motion.h2>
        <motion.div className={classes.key}
          exit={{x:"300vw",transition:{duration:3,ease:"easeInOut"}}}
          
        >
          <p>{lessThanZero} Novice</p>
          <p>{zeroTo39} Beginner</p>
          <p>{fortyTo59} Intermediate</p>
          <p>{sixtyTo79} Advanced</p>
          <p>{eigthyTo100} Expert</p>
        </motion.div>
        <div className={classes.skills}>
          <motion.div 
          className={classes["frontend-skills-container"]}
          exit={{x:"-100vw",transition:{duration:3, delay:2,ease:"easeInOut"}}}
          >
            <h2>Frontend Skills and Tools</h2>
            <div className={classes["frontend-skills"]}>
              <ul>
                <li>
                  <div>
                    <p>Html</p>
                    <span>Expert</span>
                  </div>
                </li>
                <li>
                  <div>
                    <p>Css</p>
                    <span>Advanced</span>
                  </div>
                </li>
                <li>
                  <div>
                    <p>Javascript</p>
                    <span>Advanced</span>
                  </div>
                </li>
              </ul>

              <ul>
                <li>
                  <div>
                    <p>Reactjs</p>
                    <span>Advanced</span>
                  </div>
                </li>
                <li>
                  <div>
                    <p>Redux</p>
                    <span>Advanced</span>
                  </div>
                </li>
                <li>
                  <div>
                    <p>Tailwind</p>
                    <span>Advanced</span>
                  </div>
                </li>
              </ul>

              <ul>
                <li>
                  <div>
                    <p>Git</p>
                    <span>Intermediate</span>
                  </div>
                </li>
                <li>
                  <div>
                    <p>Github</p>
                    <span>Intermediate</span>
                  </div>
                </li>
                <li>
                  <div>
                    <p>Nextjs</p>
                    <span>Advanced</span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
          className={classes["backend-skills-container"]}
          exit={{x:"300vw",transition:{delay:4,ease:"easeInOut"}}}
          
          >
            <h2>Backend Skills and Tools</h2>
            <div className={classes["backend-skills"]}>
              <ul>
                <li>
                  <div>
                    <p>Firebase</p>
                    <span>Advanced</span>
                  </div>
                </li>
                <li>
                  <div>
                    <p>Nodejs</p>
                    <span>Beginner</span>
                  </div>
                </li>
                <li>
                  <div>
                    <p>Expressjs</p>
                    <span>Novice</span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
  );
};

export default Skills;
