import React from "react";
import styles from "./Section10.module.css";
import googleIcon from "../../../../assets/images/icon_google.png";
import appleIcon from "../../../../assets/images/icon_apple_dark.png";

const Section10 = () => {
  return (
    <div className={`${styles.section} onlyDesktop`}>
      <div className={styles.wrapper}>
        <div className={styles.left}>Mobile finances as it should be</div>
        <div className={styles.right}>
          <a href="/">
            <button className={styles.button}>
              <img src={googleIcon} alt="" />
              Google Play
            </button>
          </a>
          <a href="/">
            <button className={styles.button}>
              <img src={appleIcon} alt="" />
              App Store
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section10;
