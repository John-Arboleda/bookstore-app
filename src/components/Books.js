import React from 'react';
import BookItem from './BookItem';
import NewBook from './NewBook';

function Books() {
  return (
    <div>
      <ul>
        <li><BookItem /></li>
      </ul>
      <NewBook />
    </div>
  );
}

export default Books;
