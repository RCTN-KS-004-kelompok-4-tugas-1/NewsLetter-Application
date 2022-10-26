import React from 'react';
import styles from './styles.module.css';
function IconButton(props) {
  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default IconButton;
