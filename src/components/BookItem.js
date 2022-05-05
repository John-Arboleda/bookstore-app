import React from 'react';
import './reset.css';
import styles from './BookItem.module.css';

function BookItem({ book }) {
  return (
    <div>
    <div className={styles.bookItem}>
      <p className={styles.itemCategory}>Action</p>
      <h2 className={styles.itemTitle}>{book.title}</h2>
      <p className={styles.itemAuthor}>{book.author}</p>
      <ul className={styles.itemActions}>
        <li><button type="button" onClick="">Comments</button></li>
        <li><button type="button" onClick="">Remove</button></li>
        <li><button type="button" onClick="">Edit</button></li>
      </ul>
    </div>
    </div>
  );
}

export default BookItem;
