import React from "react";
import styles from "./Section5.module.css";
import iPhoneImg from "../../../../assets/images/device.png";
import credit01 from "../../../../assets/images/credit_1.png";
import credit02 from "../../../../assets/images/credit_2.png";
import credit03 from "../../../../assets/images/credit_3.png";
import Multislider from "../../../../components/Multislider";

const Section5 = () => {
  const screens = [credit01, credit02, credit03];
  const features = [
    "Credit Management",
    "Loan Recommendation",
    "Credit Status"
  ];
  const descriptions = [
    <span>Check your credit score for free without long processes.</span>,
    <span>Compare the selected loans to find the right.</span>,
    <span>Check your cards, loans and sureties at a glance.</span>
  ];
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.text}>
            Stay on top of your credit <br /> health with a click
          </h2>
          <Multislider
            layout="2"
            theme="blue"
            iPhoneImg={iPhoneImg}
            screens={screens}
            features={features}
            descriptions={descriptions}
          />
        </div>
      </div>
    </div>
  );
};

export default Section5;
