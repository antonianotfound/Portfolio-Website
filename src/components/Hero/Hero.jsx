import React from "react";
import heroImage from "../../../assets/about/heroImage.png";
import styles from "./Hero.module.css";

 export const Hero = () => {
    return (
    <section className={styles.container}>
        <div classname={styles.content}>
            <h1 className={styles.title}>
                Antonia Watts</h1>
        <p className={styles.description}>
        I'm currently studying Applied Computing with a focus in Information Management at the University of Arizona.
        Contact me if you'd like to learn more!
        </p>
        <a href="mailto:antoniawatts01@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={heroImage} alt="Hero Icon" className={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
    );
 };