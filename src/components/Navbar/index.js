import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { ReactComponent as BlueLogo } from "../../assets/images/logo_blue.svg";
import { ReactComponent as WhiteLogo } from "../../assets/images/logo_white.svg";

const Navbar = () => {
  // TODO: Optimize such that all methods using the scroll event listener actually use information from just one context
  const [Scrolled, setScrolled] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const isScrolled = Scrolled ? "" : styles.top;
  let logoImg = <WhiteLogo className={styles.logo} />;

  if (isMobile) {
    logoImg = <BlueLogo className={styles.logo} />;
  } else {
    if (isScrolled) {
      logoImg = <WhiteLogo className={styles.logo} />;
    } else {
      logoImg = <BlueLogo className={styles.logo} />;
    }
  }

  const show = () => {
    window.scrollY > 80 ? setScrolled(true) : setScrolled(false);
    window.innerWidth < 480 ? setMobile(true) : setMobile(false);
  };

  useEffect(() => {
    // On Component Update
    window.addEventListener("scroll", show);

    return () => {
      // On Component Destroy
      window.removeEventListener("scroll", show);
    };
  });

  return (
    <div className={`${styles.wrapper} ${isScrolled}`}>
      <nav className={styles.navbar}>
        <Link to={ROUTES.LANDING}>{logoImg}</Link>
        <ul className={styles.menu}>
          <Link to={ROUTES.ABOUT}>
            <li className={styles.item}>About</li>
          </Link>
          <Link to={ROUTES.CAREERS}>
            <li className={styles.item}>Careers</li>
          </Link>
          <Link to={ROUTES.LANDING}>
            <li className={styles.item}>KOR</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
