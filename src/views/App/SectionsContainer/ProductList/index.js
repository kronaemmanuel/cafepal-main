import React from "react";
import styles from "./ProductList.module.css";
import prodList1 from "../../../../assets/images/banklist01.png";
import prodList2 from "../../../../assets/images/banklist02.png";
import prodList3 from "../../../../assets/images/banklist03.png";
import prodList4 from "../../../../assets/images/banklist04.png";

const ProductList = props => {
  const prodListArr = [prodList1, prodList2, prodList3, prodList4];
  const prodListItems = prodListArr.map((prodListItem, index) => {
    return (
      <li className={styles.prodListItem}>
        <img className={styles.prodListImg} src={prodListItem} alt="banklist" />
      </li>
    );
  });
  return (
    <div>
      <div
        className={
          props.isClosed
            ? `${styles.prodListWrapper} ${styles.hide}`
            : `${styles.prodListWrapper} ${styles.show}`
        }
      >
        <div className={styles.prodList}>
          <ul>{prodListItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
