import React from "react";
import styles from "./Section7.module.css";
import MultiSlider from "../../../../components/Multislider";
import iPhoneImg from "../../../../assets/images/device.png";
import image01 from "../../../../assets/images/insurance_1.png";
import image02 from "../../../../assets/images/insurance_2.png";
import image03 from "../../../../assets/images/insurance_3.png";

const Section7 = () => {
  const screens = [image01, image02, image03];
  const features = [
    "Check Your Insurance",
    "Custom Insurance",
    "Car Insurance"
  ];
  const descriptions = [
    <span>
      Are you paying too much for your insurance?
      <br className="desk-only-break" />
      Is your coverage enough? Let us find out.
    </span>,
    <span>
      Get insurance recommendations tailored to{" "}
      <br className="desk-only-break" />
      your situation and budget from 36 companies.
    </span>,
    <span>
      Renewing your car insurance is a pain. <br className="desk-only-break" />
      Compare your insurance fees at a glance with Toss.
    </span>
  ];
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.text}>
            Find the right insurance
            <br />
            plan for you
          </h2>
          <MultiSlider
            layout="1"
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
export default Section7;
