import React, { useState } from "react";
import styles from "./Multislider.module.css";
import iphoneImg from "../../assets/images/p1_device.png";
import screen1 from "../../assets/images/p1_screen01.png";
import screen2 from "../../assets/images/p1_screen02.png";
import screen3 from "../../assets/images/p1_screen03.png";
import screen4 from "../../assets/images/p1_screen04.png";

const Multislider = () => {
  const [currentSlide, setSlide] = useState(0);
  const [lastSlide, setLastSlide] = useState(null);

  const screens = [screen1, screen2, screen3, screen4];
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

  const screenSlides = screens.map((screen, index) => {
    const classArr = [styles.screenItem];
    if (currentSlide === index) {
      classArr.push(styles.screenActive);
    }
    if (lastSlide === index) {
      classArr.push(styles.screenLast);
    }

    return (
      <img
        className={classArr.join(" ")}
        src={screen}
        alt="screen"
        key={index}
        id={`screen${index}`}
      />
    );
  });
  const featuresSlides = features.map((feature, index) => {
    const classList =
      currentSlide === index
        ? `${styles.featuresItem} ${styles.featuresActive}`
        : `${styles.featuresItem}`;
    return (
      <li
        className={classList}
        key={index}
        id={index}
        onClick={e => handleClick(e)}
      >
        {feature}
      </li>
    );
  });
  const descriptionsSlides = descriptions.map((description, index) => {
    const classList =
      currentSlide === index
        ? `${styles.descriptionsItem} ${styles.descriptionsActive}`
        : `${styles.descriptionsItem}`;
    return <div className={classList}>{description}</div>;
  });

  const handleClick = e => {
    //Apply .screenLast class to current screen
    setLastSlide(currentSlide);

    //Set the clicked slide to the current Slide
    setSlide(parseInt(e.target.id));
  };

  return (
    <div>
      <div className={styles.image}>
        <div className={styles.device}>
          <img className={styles.iphone} src={iphoneImg} alt="iphone" />
          <div className={styles.screens}>{screenSlides}</div>
        </div>
      </div>
      <div className={styles.features}>
        <ul>{featuresSlides}</ul>
      </div>
      <div className={styles.descriptions}>{descriptionsSlides}</div>
    </div>
  );
};

export default Multislider;
