import classes from "./Contact.module.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { useState, useRef } from "react";

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
    console.log({
      name: enteredName,
      email: enteredEmail,
      subject: enteredSubject,
      message: enteredMessage,
    });
  };

  return (
    <div className={classes["main-container"]}>
      <h2>Contact</h2>
      <div className={classes.container}>
        <div className={classes["contact-form"]}>
          <form onSubmit={submitHandler}>
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
              <input type="text" placeholder="subject of the email" ref={subjectInputRef} />
              {!formInputValidity.subject && (
                <p style={{ color: "red" }}>state the subject of your mail</p>
              )}
            </div>

            <div
              className={`${classes.control} ${
                formInputValidity.message ? "" : classes.invalid
              }`}>
              <label htmlFor="">Message</label>
              <textarea name="" id="" rows="5" ref={messageInputRef}></textarea>
              {!formInputValidity.message && (
                <p style={{ color: "red" }}>drop a message</p>
              )}
            </div>
            
            
            <div className={classes.action}>
              <button>Send</button>
            </div>
          
          </form>
        
        </div>
        
        <div className={classes["address-section"]}>
          <h4>Address</h4>
          <div className={classes.paragraph}>
            <MdOutlineLocationOn />
            <p>Delta State, Nigeria.</p>
          </div>
          <div className={classes.paragraph}>
            <AiOutlineMail />
            <p>vokes9810@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
