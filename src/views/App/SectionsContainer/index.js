import React, { useState } from "react";
import styles from "./SectionsContainer.module.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import ProductList from "./ProductList";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";

const SectionsContainer = () => {
  const [prodListVisible, setProdListVisible] = useState(false);

  const toggleProdList = () => {
    console.log("Called");
    setProdListVisible(!prodListVisible);
  };

  return (
    <div>
      <section className={styles.section} id="section1">
        <Section1 />
      </section>
      <section className={styles.section} id="section2">
        <Section2 />
      </section>
      <section className={styles.section} id="section3">
        <Section3 isClosed={!prodListVisible} toggleProdList={toggleProdList} />
        <ProductList isClosed={!prodListVisible} />
      </section>
      <section className={styles.section} id="section4">
        <Section4 />
      </section>
      <section className={styles.section} id="section5">
        <Section5 />
      </section>
      <section className={styles.section} id="section6">
        <Section6 />
      </section>
      <section className={styles.section} id="section7">
        <Section7 />
      </section>
      <section className={styles.section} id="section8">
        <Section8 />
      </section>
      <section className={styles.section} id="section9">
        <Section9 />
      </section>
      <section className={styles.section} id="section10">
        <Section10 />
      </section>
    </div>
  );
};

export default SectionsContainer;
