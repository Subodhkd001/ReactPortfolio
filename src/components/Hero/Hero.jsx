import React from "react";
import {getImageUrl} from "../../utils";
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}> 
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Subodh</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 5 years of experience in React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:subodhdashmukhe@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage1.png")} alt="hero img" className={styles.heroImg}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section> 
  );
};


export default Hero;
