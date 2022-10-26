import React from 'react';
import IconButton from '../IconButton';
import styles from './styles.module.css';
import { IconBookmark, IconBookmarkFilled } from '../Icons';

function CardRecent(props) {
  return (
    <div className={styles.card}>
      {!props.isReversed && <img src={props.img} alt="" />}
      <div className="card-body">
        <h2 className="card-title">{props.category}</h2>
        <h3 onClick={props.onClick} className="card-title">
          {props.title}
        </h3>
        <p className="card-text">{props.description}</p>
        <h6 className="card-header d-flex justify-content-between">
          {props.author}
          <IconButton>
            {props.active ? (
              <IconBookmark color="#ffffff" />
            ) : (
              <IconBookmarkFilled width={26} height={26} />
            )}
          </IconButton>
        </h6>
      </div>
      {props.isReversed && (
        <img className={styles.imgReversed} src={props.img} alt="" />
      )}
    </div>
  );
}

export default CardRecent;
