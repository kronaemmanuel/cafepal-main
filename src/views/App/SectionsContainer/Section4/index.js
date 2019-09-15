import React from "react";
import styles from "./Section4.module.css";
import card01 from "../../../../assets/images/card_01.png";
import card02 from "../../../../assets/images/card_02.png";
import card03 from "../../../../assets/images/card_03.png";

const Section4 = () => {
  const cardArr = [
    {
      name: "Hyundae Card",
      balance: "836,800",
      img: card01
    },
    {
      name: "KB Card",
      balance: "432,200",
      img: card02
    },
    {
      name: "Samsung Amex Explorer",
      balance: "968,000",
      img: card03
    }
  ];

  const cardItems = cardArr.map((card, index) => {
    return (
      <li key={card.name} className={styles.cardItem}>
        <img className={styles.cardImg} src={card.img} alt={`card${index}`} />
        <div className={styles.cardText}>
          <div className={styles.cardName}>{card.name}</div>
          <div className={styles.cardBalance}>${card.balance}</div>
        </div>
      </li>
    );
  });

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2 className={styles.text}>
              View all your card <br />
              statements at once
            </h2>
            <div className={styles.description}>
              Check all your card statements at a glance
            </div>
          </div>
          <div className={styles.cards}>
            <div className={`${styles.badge} onlyDesktop`}>
              This month's bill
            </div>
            <div className={`${styles.total} onlyDesktop`}>$2,237,000</div>
            <ul>{cardItems}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
