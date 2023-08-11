import classes from "./About.module.css";
import profilepix from "../../assets/profilepix.jpg";


const About = () => {
    return ( 
        <div className={classes.container}>
            <h2>About Me</h2>
            <div className={classes.about}>
                <div className={classes.image} >
                    <img src={profilepix}  alt={profilepix} />
                </div>
                <div className={classes["about-desc"]}>
                    <p>World! Say Hello to Voke.</p>
                    <p>I am Voke, a frontend developer who goes by the name of HowZ, House of webz.</p>
                    <p>I am also a Fullstack aspirant who is really obsessed with the technologies used in building the web</p>
                    <br/>

                    <p>Passionate about the front end, but usually light up whenever I hear anything concerning the backend.</p>
                    <p>When I am not writing web codes or studying web codes, I usually watch football, could be men or women's soccer.</p>
                    <p>Or watching a thriller type or crime type TV series,</p>
                    <p>Or could be occupied playing Playstation.</p>
                    <br />

                    <p>I am actively seeking a frontend developer role in an organization where I can apply my creativity, or working on frontend projects as a freelancer.</p>
                    <br />

                    <p>And yeah! Coding is not a job to me, Coding is my life</p>
                    <p>Pleased to meet you.</p>
                </div>
            </div>
        </div>
     );
}
 
export default About;