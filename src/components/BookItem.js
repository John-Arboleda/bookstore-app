import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './reset.css';
import styles from './BookItem.module.css';

function BookItem({ book }) {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <div>
    <div className={styles.bookItem}>
      <p className={styles.itemCategory}>{book.category}</p>
      <h2 className={styles.itemTitle}>{book.title}</h2>
      {/* <p className={styles.itemAuthor}>{book.author}</p> */}
      <ul className={styles.itemActions}>
        <li><button type="button" onClick="">Comments</button></li>
        <li><button type="button" onClick={removeHandler}>Remove</button></li>
        <li><button type="button" onClick="">Edit</button></li>
      </ul>
    </div>
    </div>
  );
}

export default BookItem;
