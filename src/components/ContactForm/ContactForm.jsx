import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import {MdMessage} from "react-icons/md"
import { MdCall } from "react-icons/md";
import { LuMail } from "react-icons/lu";
import {useState} from "react"

function ContactForm(){
    const [name, setName] = useState("demoName");
    const [email, setEmail] = useState("demoEmail");
    const [text, setText] = useState("demoText");

    function onSubmitForm(event){
      event.preventDefault();
      setName(event.target[0].value);
      setEmail(event.target[1].value);
      setText(event.target[2].value);

      console.log("I am submitting the form");
    }
    return (
      <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button
              text="VIA SUPPORT CHAT"
              icon={<MdMessage fontSize="24px" />}
            />
            <Button text="VIA CALL" icon={<MdCall fontSize="24px" />} />
          </div>
          <Button
            isOutline={true}
            text="VIA EMAIL CALL"
            icon={<LuMail fontSize="24px" />}
          />
          <div className={styles.c_form}>
            <form onSubmit={onSubmitForm}>
              <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
              </div>
              <div className={styles.form_control}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
              </div>
              <div className={styles.form_control}>
                <label htmlFor="text">Text</label>
                <textarea name="text" rows="8" />
              </div>
              <div className={styles.submit_btn}>
                <Button text="SUBMIT" />
              </div>
              {/*
              <div>
                {"name:- "+name
                + ", "+
                "email:- "+email
                +"; "+
                "text:- "+text}
              </div>
              */}
            </form>
          </div>
        </div>

        <div className={styles.contact_image}>
          <img
            src="./images/contact.svg"
            alt="contact image"
          />
        </div>
      </section>
    );
}
export default ContactForm;