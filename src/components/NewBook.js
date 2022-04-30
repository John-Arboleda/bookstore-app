import React from 'react';

function NewBook() {
  return (
    <form>
      <h2>ADD NEW BOOK</h2>
      <input type="text" />
      <select>
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  );
}

export default NewBook;
