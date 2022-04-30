import React from 'react';
import './reset.css';
import styles from './BookItem.module.css';

function BookItem() {
  return (
    <div>
    <div className={styles.bookItem}>
      <p className={styles.itemCategory}>Action</p>
      <h2 className={styles.itemTitle}>The Hunger Games</h2>
      <p className={styles.itemAuthor}>Suzanne Collins</p>
      <ul className={styles.itemActions}>
        <li><button type="button" onClick="">Comments</button></li>
        <li><button type="button" onClick="">Remove</button></li>
        <li><button type="button" onClick="">Edit</button></li>
      </ul>
    </div>
    <div className={styles.bookItem}>
      <p className={styles.itemCategory}>Science Fiction</p>
      <h2 className={styles.itemTitle}>Dune</h2>
      <p className={styles.itemAuthor}>Frank Herbert</p>
      <ul className={styles.itemActions}>
        <li><button type="button" onClick="">Comments</button></li>
        <li><button type="button" onClick="">Remove</button></li>
        <li><button type="button" onClick="">Edit</button></li>
      </ul>
    </div>
    <div className={styles.bookItem}>
      <p className={styles.itemCategory}>Economy</p>
      <h2 className={styles.itemTitle}>Capital in the Twenty-First Century</h2>
      <p className={styles.itemAuthor}>Suzanne Collins</p>
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
