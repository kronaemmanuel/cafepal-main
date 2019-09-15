import React from "react";
import styles from "./Section2.module.css";
import Multislider from "../../../../components/Multislider";

const Section2 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.text}>
            Make Seamless <br />
            Money Transfer
          </h2>
          <Multislider />
        </div>
      </div>
    </div>
  );
};

export default Section2;
