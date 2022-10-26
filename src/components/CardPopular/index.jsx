import React from 'react';
import Button from '../Button';
import styles from './style.module.css';

function CardPopular(props) {
  const { img, link, category, title, description } = props.data;
  return (
    <div className={styles.card}>
      <img src={img} alt="" />
      <div className="container d-flex flex-column ps-3">
        <h2 className="mt-3 mb-2">{category}</h2>
        <a href={link} className="text-decoration-none text-dark">
          <h1 className="w-75 mb-2">{title}</h1>
        </a>
        <p className="w-100">{description}</p>
        <div className="align-self-end mb-3">
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
}

export default CardPopular;
