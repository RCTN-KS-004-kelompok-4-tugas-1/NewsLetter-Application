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
      <img src={img ? img : 'placeholder-image.png'} alt="news-cover" />
      <div className="card-body">
        <h2>{category}</h2>
        <a href={link} className="text-decoration-none text-dark">
          <h3 className="card-title">
            {title?.toString().length > 70
              ? `${title.substring(0, 67)}...`
              : title}
          </h3>
        </a>
        <p className="card-text">{description}</p>
        <div className={styles['information_container']}>
          <h6 className="card-header d-flex justify-content-between">
            {author
              ? author?.length > 60
                ? `${author.substring(0, 40)}...`
                : author
              : 'Unknown'}{' '}
            | {time}
          </h6>
          <IconButton
            onClick={() => {
              state
                ? dispatch(deleteSaved(title))
                : dispatch(addSaved(props.data));
            }}
            className={styles.button}
          >
            {state ? <IconBookmarkFilled /> : <IconBookmark />}
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default CardRecent;
