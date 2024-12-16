import React from "react";
import project from "../../../assets/projects/project.png";
import styles from "./Projects.module.css";

export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
                <div className={styles.projects}>
                    <ul className={styles.projectText}>
                        <li className={styles.list}>
                        <img className={styles.image} src={project} alt="project image"/>
                            <h3 className={styles.titleMini}>Text-Based RPG game</h3>
                            <p className={styles.description}>
                            This is an interactive free-roam game.
                            </p>
                            <a className={styles.link} href="https://github.com/antonianotfound/text-based-game">Source</a>
                        </li>
                    </ul>
                    </div>
                    <div className={styles.projects}>
                    <ul className={styles.projectText}>
                        <li className={styles.list}>
                        <img src={project} alt="project image" className={styles.image}/>
                            <h3 className={styles.titleMini}>Dual World Clock</h3>
                            <p className={styles.description}>
                            This is a clock program that translates user-inputs into both 24-hour and 12-hour times.
                            </p>
                            <a href="https://github.com/antonianotfound/clock-project" className={styles.link}>Source</a>
                        </li>
                    </ul>
                    </div>
                    <div className={styles.projects}>
                    <ul className={styles.projectText}>
                        <li className={styles.list}>
                        <img src={project} alt="project image" className={styles.image}/>
                            <h3 className={styles.titleMini}>Portfolio Website</h3>
                            <p className={styles.description}>
                            This is a website that provides details about my background.
                            </p>
                            <a href="https://github.com/antonianotfound/Portfolio-Website" className={styles.link}>Source</a>
                        </li>
                    </ul>
                </div>
        </section>
    );
};