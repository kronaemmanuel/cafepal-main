import React from "react";
import styles from "./Section9.module.css";
import image01 from "../../../../assets/images/pay_logo.png";
import image02 from "../../../../assets/images/pay.png";
import image03 from "../../../../assets/images/pay_mobile.png";

const Section9 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <a href="/">
          <button className={styles.button}>
            Sign up for partner stores >
          </button>
        </a>
        <div className={styles.content}>
          <h2 className={styles.text}>
            Mobile payment is
            <br />a breeze with Toss
          </h2>
          <div className={styles.description}>
            Your Toss password is your key <br className="desk-only-break" />
            to the fastest payments in the world.
          </div>
          <div className={`${styles.logos} onlyDesktop`}>
            <img src={image01} alt="" />
          </div>
          <div className={`${styles.image} onlyDesktop`}>
            <img src={image02} alt="" />
          </div>
          <div className={`${styles.image} onlyMobile`}>
            <img src={image03} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;
