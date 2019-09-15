import React from "react";
import styles from "./Section1.module.css";
import particleImg from "../../../../assets/images/particle.png";
import { Link } from "react-router-dom";
import cert1 from "../../../../assets/images/cert01.png";
import cert2 from "../../../../assets/images/cert02.png";
import cert3 from "../../../../assets/images/cert03.png";

const Section1 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.particle}>
          <img src={particleImg} alt="particle" />
        </div>
        <div className={styles.certWrapper}>
          <Link to="/">
            <img className={styles.certImage} src={cert1} alt="cert1" />
          </Link>
          <Link to="/">
            <img className={styles.certImage} src={cert2} alt="cert1" />
          </Link>
          <Link to="/">
            <img className={styles.certImage} src={cert3} alt="cert1" />
          </Link>
        </div>
        <h2 className={styles.text}>
          <div className={styles.record}>
            <span>#1</span> P2P money transfer service in Korea
          </div>
          <div className={styles.record}>
            <span>23 million</span> downloads
          </div>
          <div className={styles.record}>
            <span>36 trillion won</span> transferred
          </div>
          <div className={styles.record}>
            <span>0</span> security breaches since launch
            <Link className={`${styles.button} onlyDesktop`}>
              Toss Security >
            </Link>
          </div>
          <div className={`${styles.buttonWrapper} ${styles.record}`}>
            <Link className={`${styles.button} onlyMobile`} to="/">
              Toss Security >
            </Link>
          </div>
        </h2>
        <div className={styles.desc}>Updated March 2019</div>
      </div>
    </div>
  );
};

export default Section1;
