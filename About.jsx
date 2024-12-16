import React from "react"
import aboutImage from "../../../assets/about/aboutImage.png";
import cursorImage from "../../../assets/about/cursorImage.png";
import computer from "../../../assets/about/computer.png";
import pill from "../../../assets/about/pill.png";
import styles from "./About.module.css";

export const About = () => {
    return ( 
    <section classNme={styles.container} id="about">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <img
            src={aboutImage} alt="bunny on laptop" 
            className={styles.aboutImage}
            /> 
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={cursorImage} alt="cursor icon" className={styles.cursorImage}/>
                    <div className={styles.aboutItemText}>
                        <h3>Programming</h3>
                        <p>I have experience in designing responsive and 
                            optimized programs in various coding languages.
                        </p>
                    </div>
                 </li>
                 <li className={styles.aboutItem}>
                    <img src={computer} alt="computer icon" className={styles.computerImage}/>
                    <div className={styles.aboutItemText}>
                        <h3>Computers</h3>
                        <p>Built a desktop computer that runs up to Windows 11, providing
                            me with knowledge on internal hardware parts and hardware compatibility. 
                        </p>
                    </div>
                 </li>
                 <li className={styles.aboutItem}>
                    <img src={pill} alt="pill icon" className={styles.pillImage}/>
                    <div className={styles.aboutItemText}>
                        <h3>Medicine</h3>
                        <p>I have nearly three years of work experience in the medicinal field and
                            earned technician certification in pharmaceutical practices.
                        </p>
                    </div>
                 </li>
            </ul>
        </div>
    </section>
    );
};