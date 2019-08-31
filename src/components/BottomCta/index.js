import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import styles from "./BottomCta.module.css";

const BottomCta = () => {
  const [scrolled, setScrolled] = useState(false);
  const isScrolled = scrolled ? styles.scrolled : "";

  const didScroll = () => {
    window.scrollY > 80 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", didScroll);
    return () => {
      window.removeEventListener("scroll", didScroll);
    };
  });

  return (
    <Link to={ROUTES.DOWNLOAD}>
      <div className={`${styles.button} ${isScrolled}`}>Download App</div>
    </Link>
  );
};

export default BottomCta;
