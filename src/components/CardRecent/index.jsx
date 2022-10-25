import React from 'react';
import IconButton from '../IconButton';
import styles from './styles.module.css';
import { IconBookmark, IconBookmarkFilled } from '../Icons';

function CardRecent(props) {
  return (
    <div className={styles.card}>
    
      {!props.isReversed && <img src={props.img} alt="" />}
      <div className="card-bodyz">
      {/* <div class="d-flex flex-row gap-5 align-items-center justify-content-between style_cards_aTBwN">
      <div class="ntainer d-coflex flex-column ps-3"> */}
        <h2 className="card-title">{props.category}</h2>
        <h3 className="card-title">{props.title}</h3>
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
    {/* </div>
    </div> */}
    </div>
  );
}

export default CardRecent;
