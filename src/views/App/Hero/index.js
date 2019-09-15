import React from "react";
import styles from "./Hero.module.css";
import downArrow from "../../../assets/images/down_arrow.png";
import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import googleIcon from "../../../assets/images/icon_google.png";
import appleIcon from "../../../assets/images/icon_apple.png";
import { Link as Scroll } from "react-scroll";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <h1 className={styles.text}>
              Toss, Mobile Finance <br /> as it should be
            </h1>
            <div className={`${styles.downloadWrapper} onlyDesktop`}>
              <Link className={styles.button} to={ROUTES.DOWNLOADANDROID}>
                <img src={googleIcon} alt="google" />
                Google Play
              </Link>
              <Link className={styles.button} to={ROUTES.DOWNLOADAPPLE}>
                <img src={appleIcon} alt="apple" />
                App Store
              </Link>
            </div>
          </div>
          <Scroll to="section1" spy={true} smooth={true} duration={500}>
            <div className={styles.downArrowWrapper}>
              <img
                className={styles.downArrow}
                src={downArrow}
                alt="downArrow"
              />
            </div>
          </Scroll>
        </div>
      </div>
    </div>
  );
};

export default Hero;
