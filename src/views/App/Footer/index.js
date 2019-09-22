import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.title}>Contacts</div>
          <ul>
            <li>
              Business / Partnership :{" "}
              <a href="mailto:partnership@toss.im">partnership@toss.im</a>
            </li>
            <li>
              Marketing / PR :{" "}
              <a href="mailto:pr.team@toss.im">pr.team@toss.im</a>
            </li>
          </ul>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomTitle}> ⓒ Viva Republica</div>
          <div className={styles.bottomDescription}>
            ⓒ Viva Republica
            <br />
            12th floor, Arc Place, 142, Teheran-ro, Gangnam-gu, Seoul, Korea
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
