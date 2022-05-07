import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const combReducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const store = configureStore(
  { reducer: combReducer },
  applyMiddleware(logger, thunk),
);

export default store;
