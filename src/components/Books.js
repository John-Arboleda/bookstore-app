import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import InputBook from './InputBook';

function Books() {
  const books = useSelector((state) => state.booksReducer);
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li><BookItem key={book.item_id} book={book} /></li>
        ))}

      </ul>
      <InputBook />
    </div>
  );
}

export default Books;
