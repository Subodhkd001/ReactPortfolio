import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils.js";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:subodhdashmukhe@gmail.com">subodhdashmukhe@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/subodh-dashmukhe-1747b1254/">linkedin.com/subodh</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Subodhkd001">github.com/subodhkd001</a>
        </li>
      </ul>
    </footer>
  );
};
