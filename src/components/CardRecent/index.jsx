import React from 'react';
import IconButton from '../IconButton';
import styles from './styles.module.css';
import { IconBookmark, IconBookmarkFilled } from '../Icons';

function CardRecent(props) {
  const { img, category, title, author, time, link, description } = props.data;
  return (
    <div className={styles.card}>
      <img src={img} alt="news-cover" />
      <div className="card-body">
        <h2 className="card-title">{category}</h2>
        <a href={link} className="text-decoration-none text-dark">
          <h3 className="card-title">{title}</h3>
        </a>
        <p className="card-text">{description}</p>
        <div className={`d-flex ${styles['information_container']}`}>
          <h6 className="card-header d-flex justify-content-between">
            {author ? author : 'Unknown'} | {time}
          </h6>
          <IconButton
            onClick={() => {
              console.log(props.data);
            }}
            className={styles.button}
          >
            {props.active ? (
              <IconBookmark color="#ffffff" />
            ) : (
              <IconBookmarkFilled width={26} height={26} />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default CardRecent;
