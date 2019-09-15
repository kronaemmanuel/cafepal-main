import React, { useState } from "react";
import styles from "./Multislider.module.css";

const Multislider = props => {
  // TODO: Refactor with proper themeing support
  const [currentSlide, setSlide] = useState(0);
  const [lastSlide, setLastSlide] = useState(null);

  const screenSlides = props.screens.map((screen, index) => {
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
  const featuresSlides = props.features.map((feature, index) => {
    const classArr = [styles.featuresItem];
    if (props.theme === "white") {
      classArr.push(styles.white);
      if (currentSlide === index) {
        classArr.push(styles.featuresActive);
        classArr.push(styles.whiteActive);
      }
    } else if (props.theme === "blue") {
      classArr.push(styles.blue);
      if (currentSlide === index) {
        classArr.push(styles.featuresActive);
        classArr.push(styles.blueActive);
      }
    }
    return (
      <li
        className={classArr.join(" ")}
        key={index}
        id={index}
        onClick={e => handleClick(e)}
      >
        {feature}
      </li>
    );
  });
  const descriptionsSlides = props.descriptions.map((description, index) => {
    const classArr = [styles.descriptionsItem];
    props.theme === "white"
      ? classArr.push(styles.whiteDescription)
      : classArr.push(styles.blueDescription);
    currentSlide === index
      ? classArr.push(styles.descriptionsActive)
      : classArr.push();
    return <div className={classArr.join(" ")}>{description}</div>;
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
          <img className={styles.iphone} src={props.iPhoneImg} alt="iphone" />
          <div className={styles.screens}>{screenSlides}</div>
        </div>
      </div>
      <div
        className={`${styles.features} ${
          props.theme === "blue" ? styles.featuresBlue : styles.featuresWhite
        }`}
      >
        <ul>{featuresSlides}</ul>
      </div>
      <div className={styles.descriptions}>{descriptionsSlides}</div>
    </div>
  );
};

export default Multislider;
