import React from 'react';
import styles from './style.module.css';
function LayoutSectionPopular(props) {
  return (
    <section className={`${styles.layout} container mb-5 `}>
      <h1 className={` mb-3 mt-4`}>Popular News</h1>
      <div
        className={`d-flex flex-row gap-5 align-items-center justify-content-between ${styles.cards}`}
      >
        {props.children}
      </div>
    </section>
  );
}

export default LayoutSectionPopular;
