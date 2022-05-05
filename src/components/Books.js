import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import NewBook from './NewBook';

function Books() {
  const books = useSelector((state) => state.booksReducer);
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li><BookItem key={book.id} book={book} /></li>
        ))}

      </ul>
      <NewBook />
    </div>
  );
}

export default Books;
