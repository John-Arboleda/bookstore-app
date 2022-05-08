import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/books';
import styles from '../styles/BookItem.module.css';

function BookItem({ book }) {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeBookAsync(book.item_id));
  };

  return (
    <div className={styles.container}>
    <div className={styles.bookInfo}>
      <p className={styles.itemCategory}>{book.category}</p>
      <h2 className={styles.title}>{book.title}</h2>
      <p className={styles.author}>Suzanne Collins</p>
      <ul className={styles.interfaceBtns}>
        <li><button type="button" className={styles.interfaceButton} onClick="">Comments</button></li>
        <li><button type="button" className={styles.interfaceButton} onClick={removeHandler}>Remove</button></li>
        <li><button type="button" className={styles.interfaceButton} onClick="">Edit</button></li>
      </ul>
    </div>
    <div className={styles.contentRight}>
        <div className={styles.progress}>
          <div className={styles.progress_outer}>
            <div className={styles.progress_inner} />
          </div>
          <div className={styles.percentText}>
            <span className={styles.percent}>0%</span>
            <span className={styles.completed}>completed</span>
          </div>
        </div>
        <div className={styles.bookMark}>
          <span className={styles.currentChapter}>CURRENT CHAPTER</span>
          <span className={styles.chapterNum}>Chapter 1</span>
          <button type="button" className={styles.updateProgress}>UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
