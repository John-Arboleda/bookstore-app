import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const combReducer = combineReducers({
  booksReducer,
  categoriesReducer,
  // additional reducers could be added here
});

const store = configureStore(
  { reducer: combReducer },
  applyMiddleware(logger),
);

export default store;
