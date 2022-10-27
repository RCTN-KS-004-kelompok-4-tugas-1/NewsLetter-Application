import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSaved, deleteSaved } from '../../store/reducer/savedSlice';
import Button from '../Button';
import styles from './styles.module.css';

function CardPopular(props) {
  const { img, link, category, title, description } = props.data;
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.saved.value);
  const state = newsList.filter((news) => news.title === title)[0];
  return (
    <div className={styles.card}>
      <img src={img} alt="news-cover" />
      <div className="container d-flex flex-column ps-3">
        <h2 className="mt-3 mb-2">{category}</h2>
        <a href={link} className="text-decoration-none text-dark">
          <h1 className="w-75 mb-2">{title}</h1>
        </a>
        <p className="w-100">{description}</p>
        <div className="align-self-end mb-3">
          <Button
            onClick={() => {
              state
                ? dispatch(deleteSaved(title))
                : dispatch(addSaved(props.data));
            }}
          >
            {state ? 'Unsave' : 'Save'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardPopular;
