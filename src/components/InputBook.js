import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { addBookAsync } from '../redux/books/books';

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
    <form>
      <h2>ADD NEW BOOK</h2>
      <input
        type="text"
        value={author}
        onChange={AuthorHandler}
        placeholder="Author"
      />
      <input
        type="text"
        value={title}
        onChange={TitleHandler}
        placeholder="Title"
      />
      <select value={category} onChange={CategoryHandler}>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <button type="submit" onClick={submitBookToStore}>ADD BOOK</button>
    </form>
  );
}

export default InputBook;
