import React from 'react';
import IconButton from '../IconButton';
import styles from './styles.module.css';
import { IconBookmark, IconBookmarkFilled } from '../Icons';
import { useDispatch, useSelector } from 'react-redux';
import { addSaved, deleteSaved } from '../../store/reducer/savedSlice';

function CardRecent(props) {
  const { img, category, title, author, time, link, description } = props.data;
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.saved.value);
  const state = newsList.filter((news) => news.title === title)[0];
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
              state
                ? dispatch(deleteSaved(title))
                : dispatch(addSaved(props.data));
            }}
            className={styles.button}
          >
            {state ? (
              <IconBookmarkFilled width={26} height={26} />
            ) : (
              <IconBookmark color="#ffffff" />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default CardRecent;
