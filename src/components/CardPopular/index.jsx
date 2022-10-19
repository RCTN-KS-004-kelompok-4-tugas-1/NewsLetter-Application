import React from 'react';
import ButtonSave from '../ButtonSave';
import styles from './style.module.css';
function CardPopular(props) {
  return (
    <div className={styles.card}>
      {!props.isReversed && <img src={props.img} alt="" />}
      <div className={'container d-flex flex-column ps-3'}>
        <h2 className={'mt-3 mb-2'}>{props.category}</h2>
        <h1 className={'w-75 mb-2'}>{props.title}</h1>
        <p className={'w-100 '}>{props.description}</p>
        <div className={'align-self-end mb-3'}>
          <ButtonSave>Save</ButtonSave>
        </div>
      </div>
      {props.isReversed && (
        <img className={styles.imgReversed} src={props.img} alt="" />
      )}
    </div>
  );
}

export default CardPopular;
