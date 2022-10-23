import React from 'react';
import ButtonSave from '../ButtonSave';
import styles from './styles.module.css';
function CardRecent(props) {
  return (
    <div className={styles.card}>
      {!props.isReversed && <img src={props.img} alt="" />}
      <div className="card-body">
        <h2 className="card-title">{props.category}</h2>
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">{props.description}</p>

        <h6 className="card-header d-flex justify-content-between">
          {props.author}
          <button type="button" className="btn btn-sm btn-primary">
            {props.children}
          </button>
        </h6>
      </div>
      {props.isReversed && (
        <img className={styles.imgReversed} src={props.img} alt="" />
      )}
    </div>
  );
}

export default CardRecent;