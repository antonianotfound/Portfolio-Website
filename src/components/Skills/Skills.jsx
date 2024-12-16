import React from "react"

import styles from "./Skills.module.css";
import css from "../../../assets/skills/css.png";
import javascript from "../../../assets/skills/javascript.png";
import jupyter from "../../../assets/skills/jupyter.png";
import mysql from "../../../assets/skills/mysql.png";
import python from "../../../assets/skills/python.png";
import react from "../../../assets/skills/react.png";
import tableau from "../../../assets/skills/tableau.png";
import cpp from "../../../assets/skills/cpp.png";
import node from "../../../assets/skills/node.png";


export const Skills = () => {
    return (
        <section className={styles.container} id="experience">
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.content}> 
                    <div className={styles.skills}>
                    <img className={styles.cssImage} src={css} alt="css icon" />
                    <p>
                        CSS
                    </p>
                    </div>
                    <div className={styles.skills}>
                        <img src={javascript} alt="javascript icon" className={styles.jsImage} />
                        <p>
                            JavaScript
                        </p>
                    </div>
                    <div className={styles.skills}>
                        <img src={python} alt="python icon" className={styles.pythonImage} />
                        <p>
                            Python
                        </p>
                    </div>
                    <div className={styles.skills}>
                        <img src={mysql} alt="sql icon" className={styles.sqlImage} />
                        <p>
                            MySQL
                        </p>
                    </div>
                    <div className={styles.skills}>
                        <img src={jupyter} alt="jupyter icon" className={styles.jupyterImage} />
                        <p>
                            Jupyter 
                        </p>
                    </div>
                    <div className={styles.skills}>
                        <img src={tableau} alt="tableau icon" className={styles.tableauImage}/>
                        <p>
                            Tableau
                        </p>
                    </div>
                    <div className={styles.skills}>
                        <img src={react} alt="react icon" className={styles.reactImage} />
                        <p className={styles.text}>
                            React 
                        </p>
                        </div>
                        <div className={styles.skills} >
                            <img src={cpp} alt="cpp icon" className={styles.cppImage} />
                            <p className={styles.text}>
                                C++
                            </p>
                        </div>
                        <div className={styles.skills}>
                            <img src={node} alt="node icon" className={styles.nodeImage}/>
                            <p className={styles.text}>
                                Node
                            </p>
                        </div>
                    </div>
        </section>

    ) 
};

