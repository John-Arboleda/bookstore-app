import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { addBookAsync } from '../redux/books/books';
import styles from '../styles/InputBook.module.css';

function InputBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Action');

  const dispatch = useDispatch();

  const AuthorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const TitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const CategoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBookAsync(newBook));
  };

  return (
    <div>
    <h2 className={styles.header}>ADD NEW BOOK</h2>
    <form>
      <input
        type="text"
        value={author}
        className={styles.input}
        onChange={AuthorHandler}
        placeholder="Author"
      />
      <input
        type="text"
        value={title}
        className={styles.input}
        onChange={TitleHandler}
        placeholder="Title"
      />
      <select className={styles.selectCategory} value={category} onChange={CategoryHandler}>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <button className={styles.addBtn} type="submit" onClick={submitBookToStore}>ADD BOOK</button>
    </form>
    </div>
  );
}

export default InputBook;
