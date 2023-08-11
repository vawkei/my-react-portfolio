// import classes from "./Skills.module.css";

// const Skills = () => {
//   return (
//     <div className={classes.container}>
//       <h2>Skills</h2>
//       <div className={classes.skills}>
//         {/* <svg
//           xmlns="http://www.w3.org/2000/svg"
//           height="3rem"
//           viewBox="0 0 448 512">
//           <path d="M201 10.3c14.3-7.8 31.6-7.8 46 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L201 10.3zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L25 423.1C9.6 414.7 0 398.6 0 381V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V381c0 17.6-9.6 33.7-25 42.1L263.7 510c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z" />
//         </svg> */}

//         <div className={classes["frontend-skills-container"]}>
//           <h2>Frontend Skills and Tools</h2>
//           <div className={classes["frontend-skills"]}>
//             <ul>
//               <li>Html</li>
//               <li>Css</li>
//               <li>Javascript</li>
//             </ul>

//             <ul>
//               <li>Reactjs</li>
//               <li>Redux</li>
//               <li>Tailwind</li>
//             </ul>

//             <ul>
//               <li>Git</li>
//               <li>Github</li>
//               <li>Nextjs</li>
//             </ul>
//           </div>
//         </div>

//          <div className={classes["backend-skills-container"]}>
//           <h2>Backend Skills and Tools</h2>
//           <div className={classes["backend-skills"]}>
//             <ul>
//               <li>Firebase</li>
//               <li>Nodejs [beginner]</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

import classes from "./Skills.module.css";



const Skills = () => {
  return (
    <div className={classes.container}>
      
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
      
    </div>
  );
};

export default Skills;
{/* <svg
          xmlns="http://www.w3.org/2000/svg"
          height="3rem"
          viewBox="0 0 448 512">
          <path d="M201 10.3c14.3-7.8 31.6-7.8 46 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L201 10.3zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L25 423.1C9.6 414.7 0 398.6 0 381V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V381c0 17.6-9.6 33.7-25 42.1L263.7 510c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z" />
        </svg> */}