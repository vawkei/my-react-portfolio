import classes from "./Skills.module.css";
import {motion} from "framer-motion";


const Skills = () => {
  return (
    
      <motion.div 
      className={classes.container}
      initial={{y:900}}
      animate={{y:0,transition:{type:"spring",stiffness:100}}}
      >
        <h2>Skills</h2>
        <div className={classes.skills}>
          <div className={classes["frontend-skills-container"]}>
            <h2>Frontend Skills and Tools</h2>
            <div className={classes["frontend-skills"]}>
              <ul>
                <li>
                  <div>
                    <p>Html</p>
                    <span>Experienced</span>
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
                    <span>Experienced</span>
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
                    <span>Intermediate</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={classes["backend-skills-container"]}>
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
          </div>
        </div>
      </motion.div>
  );
};

export default Skills;
