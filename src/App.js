import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Books from './components/Books';
import Navbar from './components/Navbar';
import { getBooksAsync } from './redux/books/books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksAsync());
  }, []);

  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
