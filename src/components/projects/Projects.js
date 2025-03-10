import classes from "./Projects.module.css";
import { DUMMYPROJECTS } from "./ProjectData";
import { Link } from "react-router-dom";
import Card from "../../ui/card/Card";
import { easeInOut, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { Fragment } from "react";

const Projects = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  const data = DUMMYPROJECTS.map((x) => {
    return (
      <Fragment key={x.id}>
        {isMobile ? (
          <motion.li
            initial={{ x: "-90vw" }}
            whileInView={{
              x: 0,
              transition: { delay: 1, type: "spring", stiffness: 500 },
            }}
            exit={{x:"-100vw",transition:{ease:easeInOut}}}
            >
            <div className={classes.image}>
              <img src={x.img} alt={x.title} />
            </div>
            <div className={classes.action}>
              <button>
                <Link to={x.link}>Check it out</Link>
              </button>
            </div>
            <p>{x.title}</p>
            <p>{x.desc}</p>
          </motion.li>
        ) : (
          <div>
            <Card>
              <li>
                <div className={classes.image}>
                  <img src={x.img} alt={x.title} />
                </div>
                <div className={classes.action}>
                  <button>
                    <Link to={x.link}>Check it out</Link>
                  </button>
                </div>
                <p>{x.title}</p>
                <p>{x.desc}</p>
              </li>
            </Card>
          </div>
        )}
      </Fragment>
    );
  });

  return (
    <Fragment>
      {isMobile ? (
        <div className={classes.projectContainer}>
          <h2>Projects</h2>
          <ul>{data}</ul>
        </div>
      ) : (
        <motion.div
          className={classes.projectContainer}
          initial={{ x: "-1200px" }}
          animate={{
            x: 0,
            transition: { delay: 1, type: "spring", stiffness: 200 },
          }}
          exit={{x:"-100vw",transition:{ease:"easeInOut"}}}
          >
          <h2>Projects</h2>
          <ul>{data}</ul>
        </motion.div>
      )}
    </Fragment>
  );
};

export default Projects;

// import classes from "./Projects.module.css";
// import { DUMMYPROJECTS } from "./ProjectData";
// import { Link } from "react-router-dom";
// import Card from "../../ui/card/Card";
// import { motion } from "framer-motion";
// import { useMediaQuery } from "react-responsive";
// import { Fragment } from "react";

// const Projects = () => {

//   const isMobile = useMediaQuery({maxWidth:640 });

//   const data = DUMMYPROJECTS.map((x) => {
//     return (
//       <Fragment key={x.id}>
//       {isMobile ? (
//         <motion.div

//         initial={{x:"-95vw"}}
//         whileInView={{x:0, transition:{delay:1,type:"spring",stiffness:500}}}>

//           <li>
//             <div className={classes.image}>
//               <img src={x.img} alt={x.title} />
//             </div>
//             <div className={classes.action}>
//               <button>
//                 <Link to={x.link}>Check it out</Link>
//               </button>
//             </div>
//             <p>{x.title}</p>
//           </li>

//         </motion.div>
//       ):(
//         <div>
//       <Card>
//         <li>
//           <div className={classes.image}>
//             <img src={x.img} alt={x.title} />
//           </div>
//           <div className={classes.action}>
//             <button>
//               <Link to={x.link}>Check it out</Link>
//             </button>
//           </div>
//           <p>{x.title}</p>
//         </li>
//       </Card>
//       </div>
//       )}

//       </Fragment>
//     );
//   });

//   return (
//     <Fragment>
//       {isMobile ? (
//         <div className={classes.projectContainer}>
//           <h2>Projects</h2>
//           <ul>{data}</ul>
//         </div>
//       ) : (
//         <motion.div
//           className={classes.projectContainer}
//           initial={{ x: "-1200px" }}
//           animate={{
//             x: 0,
//             transition: { delay: 1, type: "spring", stiffness: 200 },
//           }}>
//           <h2>Projects</h2>
//           <ul>{data}</ul>
//         </motion.div>
//       )}
//     </Fragment>
//   );
// };

// export default Projects;
