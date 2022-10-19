import React from 'react';
import styles from './style.module.css';

function ButtonSave(props) {
  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default ButtonSave;
