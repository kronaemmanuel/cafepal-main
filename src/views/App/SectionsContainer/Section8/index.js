import React from "react";
import styles from "./Section8.module.css";
import image1 from "../../../../assets/images/wallet.png";
import image2 from "../../../../assets/images/wallet_device.png";
import store1 from "../../../../assets/images/conv_01.png";
import store2 from "../../../../assets/images/conv_02.png";
import store3 from "../../../../assets/images/conv_03.png";
import store4 from "../../../../assets/images/conv_04.png";
import store5 from "../../../../assets/images/conv_05.png";

const Section8 = () => {
  const storeArr = [store1, store2, store3, store4, store5];
  const stores = storeArr.map((store, index) => {
    return (
      <li className={styles.item}>
        <img src={store} alt={`store${index}`} />
      </li>
    );
  });
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.text}>
            If you have Toss,
            <br />
            you don’t need
            <br />a wallet.
          </h2>
          <div className={styles.description}>
            Toss lets you withdraw money from ATMs without a card.
          </div>
          <div className={`${styles.stores} onlyDesktop`}>
            <ul>{stores}</ul>
          </div>
          <div className={styles.image}>
            <img className={styles.image1} src={image1} alt="Wallet" />
            <img className={styles.image2} src={image2} alt="Wallet Device" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
