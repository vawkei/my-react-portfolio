import classes from "./Contact.module.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { useState, useRef, Fragment } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";


const Contact = () => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    email: true,
    subject: true,
    message: true,
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const subjectInputRef = useRef();
  const messageInputRef = useRef();

  const form = useRef();

  const isMobile = useMediaQuery({ maxWidth: 768 });
  //const isMobile = useMediaQuery({ maxWidth: 768 });

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredSubject = subjectInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    const enteredNameIsValid = enteredName.trim() !== "";
    const enteredEmailIsValid = enteredEmail.trim() !== "";
    const enteredSubjectIsValid = enteredSubject.trim() !== "";
    const enteredMessageIsValid = enteredMessage.trim() !== "";

    setFormInputValidity({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      subject: enteredSubjectIsValid,
      message: enteredMessageIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredSubjectIsValid &&
      enteredMessageIsValid;

    if (!formIsValid) {
      console.log("Please fill out the inputs");
      return;
    }
    // console.log({
    //   name: enteredName,
    //   email: enteredEmail,
    //   subject: enteredSubject,
    //   message: enteredMessage,
    // });

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_YOUR_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={classes["main-container"]}>
      {isMobile ? (
        <Fragment>
          <h2>Contact</h2>
          <div className={classes.container}>
            <div className={classes["contact-form"]}>
              <motion.form
                onSubmit={submitHandler}
                ref={form}
                initial={{ x: "-90vw" }}
                whileInView={{
                  x: 0,
                  transition: {
                    delay: 1,
                    duration: 6,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                  },
                }}
                exit={{y:"90vh",transition:{ease:"easeInOut"}}}
                >
                <h4>Contact Form</h4>

                <div
                  className={`${classes.control} ${
                    formInputValidity.name ? "" : classes.invalid
                  }`}>
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    placeholder="Please enter your name"
                    ref={nameInputRef}
                    name="user_name"
                  />
                  {!formInputValidity.name && (
                    <p style={{ color: "red" }}>name input should be filled</p>
                  )}
                </div>

                <div
                  className={`${classes.control} ${
                    formInputValidity.email ? "" : classes.invalid
                  }`}>
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    placeholder="Please enter your email address"
                    ref={emailInputRef}
                    name="user_email"
                  />
                  {!formInputValidity.email && (
                    <p style={{ color: "red" }}>email input should be filled</p>
                  )}
                </div>

                <div
                  className={`${classes.control} ${
                    formInputValidity.subject ? "" : classes.invalid
                  }`}>
                  <label htmlFor="">Subject</label>
                  <input
                    type="text"
                    placeholder="subject of the email"
                    ref={subjectInputRef}
                    name="subject"
                  />
                  {!formInputValidity.subject && (
                    <p style={{ color: "red" }}>
                      state the subject of your mail
                    </p>
                  )}
                </div>

                <div
                  className={`${classes.control} ${
                    formInputValidity.message ? "" : classes.invalid
                  }`}>
                  <label htmlFor="">Message</label>
                  <textarea
                    name="user_message"
                    id=""
                    rows="5"
                    ref={messageInputRef}></textarea>
                  {!formInputValidity.message && (
                    <p style={{ color: "red" }}>drop a message</p>
                  )}
                </div>

                <div className={classes.action}>
                  <button>Send</button>
                </div>
              </motion.form>
            </div>

            <motion.div
              className={classes["address-section"]}
              initial={{ x: "-90vw" }}
                whileInView={{
                  x: 0,
                  transition: {
                    delay: 1,
                    duration: 6,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                  },
                }}
                // exit={{x:"90vw",transition:{ease:"easeInOut"}}}
              >
              <h4>Address</h4>
              <div className={classes.paragraph}>
                <MdOutlineLocationOn />
                <p>Delta State, Nigeria.</p>
              </div>
              <div className={classes.paragraph}>
                <AiOutlineMail />
                <p>vawkeicodewebz@gmail.com</p>
              </div>
            </motion.div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h2>Contact</h2>
          <motion.div 
          className={classes.container}
          exit={{x:"90vw",transition:{ease:"easeInOut"}}}
          >
            <div className={classes["contact-form"]}>
              <motion.form
                onSubmit={submitHandler}
                ref={form}
                initial={{ y: -800 }}
                animate={{
                  y: 0,
                  transition: {
                    delay: 1,
                    duration: 6,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                  },
                }}>
                <h4>Contact Form</h4>

                <div
                  className={`${classes.control} ${
                    formInputValidity.name ? "" : classes.invalid
                  }`}>
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    placeholder="Please enter your name"
                    ref={nameInputRef}
                    name="user_name"
                  />
                  {!formInputValidity.name && (
                    <p style={{ color: "red" }}>name input should be filled</p>
                  )}
                </div>

                <div
                  className={`${classes.control} ${
                    formInputValidity.email ? "" : classes.invalid
                  }`}>
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    placeholder="Please enter your email address"
                    ref={emailInputRef}
                    name="user_email"
                  />
                  {!formInputValidity.email && (
                    <p style={{ color: "red" }}>email input should be filled</p>
                  )}
                </div>

                <div
                  className={`${classes.control} ${
                    formInputValidity.subject ? "" : classes.invalid
                  }`}>
                  <label htmlFor="">Subject</label>
                  <input
                    type="text"
                    placeholder="subject of the email"
                    ref={subjectInputRef}
                    name="subject"
                  />
                  {!formInputValidity.subject && (
                    <p style={{ color: "red" }}>
                      state the subject of your mail
                    </p>
                  )}
                </div>

                <div
                  className={`${classes.control} ${
                    formInputValidity.message ? "" : classes.invalid
                  }`}>
                  <label htmlFor="">Message</label>
                  <textarea
                    name="user_message"
                    id=""
                    rows="5"
                    ref={messageInputRef}></textarea>
                  {!formInputValidity.message && (
                    <p style={{ color: "red" }}>drop a message</p>
                  )}
                </div>

                <div className={classes.action}>
                  <button>Send</button>
                </div>
              </motion.form>
            </div>

            <motion.div
              className={classes["address-section"]}
              initial={{ y: 600 }}
              animate={{
                y: 0,
                transition: {
                  delay: 1,
                  duration: 6,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 100,
                },
              }}>
              <h4>Address</h4>
              <div className={classes.paragraph}>
                <MdOutlineLocationOn />
                <p>Delta State, Nigeria.</p>
              </div>
              <div className={classes.paragraph}>
                <AiOutlineMail />
                <p>vokes9810@gmail.com</p>
              </div>
            </motion.div>
          </motion.div>
        </Fragment>
      )}
    </div>
  );
};

export default Contact;
