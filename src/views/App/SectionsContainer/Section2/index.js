import React from "react";
import styles from "./Section2.module.css";
import Multislider from "../../../../components/Multislider";
import iPhoneImg from "../../../../assets/images/p1_device.png";
import screen01 from "../../../../assets/images/p1_screen01.png";
import screen02 from "../../../../assets/images/p1_screen02.png";
import screen03 from "../../../../assets/images/p1_screen03.png";
import screen04 from "../../../../assets/images/p1_screen04.png";

const Section2 = () => {
  const screens = [screen01, screen02, screen03, screen04];
  const features = [
    "Autofill",
    "Split the Bill",
    "Automatic Transfers",
    "QR Payments"
  ];
  const descriptions = [
    <span>
      Copy the text of recipient's bank information,{" "}
      <br className="desk-only-break" />
      and Toss will prefill it for your transfers
    </span>,
    <span>Split the bill without hassle</span>,
    <span>
      Make recurring transfers <br className="desk-only-break" />
      by setting up Automatic Transfers
    </span>,
    <span>
      Do you still write out your account number to receive money transfers?{" "}
      <br className="desk-only-break" />
      You can receive money in just 1 second with a QR code.
    </span>
  ];

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.text}>
            Make Seamless <br />
            Money Transfer
          </h2>
          <Multislider
            layout="1"
            theme="white"
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

export default Section2;
