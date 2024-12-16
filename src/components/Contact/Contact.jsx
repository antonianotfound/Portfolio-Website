import React from "react";
import mail from "../../../assets/contact/mail.png";
import git from "../../../assets/contact/git.png";
import link from "../../../assets/contact/link.png";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Reach me here!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={mail} alt="email icon" />
                    <a href="mailto:antoniawatts01@gmail.com">antoniawatts01@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={link} alt="linkedin icon" />
                    <a href="https://www.linkedin.com/in/antoniawatts-/">linkedin.com/antoniawatts-</a>
                </li>
                <li className={styles.link}>
                    <img src={git} alt="github icon" />
                    <a href="https://github.com/antoniawatts">github.com/antoniawatts</a>
                </li>
            </ul>
        </footer>
    );
};