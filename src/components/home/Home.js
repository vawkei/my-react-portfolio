import classes from "./Home.module.css";
import profilePix from "../../assets/profilepix.jpg";


const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes["name-container"]}>
        <div className={classes.name}>
          <h1>Houseof<span>WebZ</span></h1>
        </div>
        <div className={classes["name-description"]}>
            <p>{`${`I am Voke, but go by the name HouseofWebZ <HowZ/ >.`}`} </p>
            <p>I am a front-end developer, who is obsessed about becoming a full-stack developer.</p>
            <p>You are welcome to my portfolio.</p>
        </div>
      </div>
      <div className={classes["image-container"]}>
            <img src={profilePix} alt={"profilePix"}  />
      </div>
    </div>
  );
};

export default Home;
