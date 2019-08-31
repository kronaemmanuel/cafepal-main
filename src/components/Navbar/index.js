import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Navbar = props => {
  // TODO: Optimize such that all methods using the scroll event listener actually use information from just one context
  const [visible, setVisible] = useState(false);
  const isVisible = visible ? "" : styles.top;

  const show = () => {
    window.scrollY > 80 ? setVisible(true) : setVisible(false);
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
    <div className={`${styles.wrapper} ${isVisible}`}>
      <nav className={styles.navbar}>
        <Link to={ROUTES.LANDING}>
          <Logo className={styles.logo} />
        </Link>
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
