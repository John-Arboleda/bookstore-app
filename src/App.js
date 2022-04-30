import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Books from './components/Books';
import Navbar from './components/Navbar';

function App() {
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
