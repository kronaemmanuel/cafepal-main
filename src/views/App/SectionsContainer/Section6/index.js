import React from "react";
import styles from "./Section6.module.css";
import service1 from "../../../../assets/images/toss_plus.png";
import service2 from "../../../../assets/images/realestate.png";
import service3 from "../../../../assets/images/invest.png";
import service4 from "../../../../assets/images/bitcoin.png";

const Section6 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.text}>
            Investing process
            <br />
            made seamless
          </h2>
          <div className={styles.description}>
            Toss is your one-stop investment platform.
          </div>
        </div>
      </div>
      <div className={styles.servicesContainer}>
        <div className={styles.services}>
          <div className={`${styles.item} ${styles.left}`}>
            <div className={styles.servicesContent}>
              <div className={styles.servicesTitle}>
                Open a Toss Shinhan Securities Account
              </div>
              <div className={styles.servicesDescription}>
                Up to 1.3% interest, unlimited free transfers up to 2 million
                won per day.
              </div>
              <div className={styles.image}>
                <img className={styles.image1} src={service1} alt="Service 1" />
              </div>
            </div>
          </div>
          <div className={`${styles.item} ${styles.right}`}>
            <div className={styles.servicesContent}>
              <div className={styles.servicesTitle}>
                Real Estate Micro-Investment
              </div>
              <div className={styles.servicesDescription}>
                Start investing in real estate financing projects for as little
                as $100.
              </div>
              <div className={styles.image}>
                <img className={styles.image2} src={service2} alt="Service 2" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.services}>
          <div className={`${styles.item} ${styles.left}`}>
            <div className={styles.servicesContent}>
              <div className={styles.servicesTitle}>P2P Investment</div>
              <div className={styles.servicesDescription}>
                Choose your preference and invest in the right portfolio for
                you.
              </div>
              <div className={styles.image}>
                <img className={styles.image3} src={service3} alt="Service 3" />
              </div>
            </div>
          </div>
          <div className={`${styles.item} ${styles.right}`}>
            <div className={styles.servicesContent}>
              <div className={styles.servicesTitle}>Fund Investment</div>
              <div className={styles.servicesDescription}>
                Start investing in mutual funds for as little as $1.
              </div>
              <div className={styles.image}>
                <img className={styles.image4} src={service4} alt="Service 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
