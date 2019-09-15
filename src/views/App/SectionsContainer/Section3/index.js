import React from "react";
import styles from "./Section3.module.css";
import bank01 from "../../../../assets/images/bank01.png";
import bank02 from "../../../../assets/images/bank02.png";
import bank03 from "../../../../assets/images/bank03.png";
import bank04 from "../../../../assets/images/bank04.png";
import bank05 from "../../../../assets/images/bank05.png";

const Section3 = props => {
  const banks = [
    {
      name: "Kookmin Bank",
      balance: "$2,134,000",
      logo: bank01
    },
    {
      name: "Shinhan Bank",
      balance: "$1,126,600",
      logo: bank02
    },
    {
      name: "Hana Bank",
      balance: "$684,000",
      logo: bank03
    },
    {
      name: "Woori Bank",
      balance: "$339,050",
      logo: bank04
    },
    {
      name: "Nonghyup Bank",
      balance: "$1,412,000",
      logo: bank05
    }
  ];

  const bankCards = banks.map((bank, index) => {
    const classList =
      index > 2 ? `${styles.bankItem} onlyDesktop` : styles.bankItem;

    return (
      <li className={classList}>
        <img
          className={styles.bankImg}
          src={bank.logo}
          alt={`${bank.name} Logo`}
        />
        <div className={styles.bankText}>
          <div className={styles.bankName}>{bank.name}</div>
          <div className={styles.bankBalance}>{bank.balance}</div>
        </div>
      </li>
    );
  });

  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.text}>
            Manage all your bank
            <br />
            accounts in one place
          </h2>
          <div className={styles.description}>
            You can check and manage different bank accounts{" "}
            <br className="desk-only-break" />
            together with fingerprint identification.
          </div>
          <div className={styles.banks}>
            <ul>{bankCards}</ul>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button onClick={props.toggleProdList} className={styles.button}>
            {props.isClosed ? "View All Partner Banks" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section3;
