import { configureStore, combineReducers } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  categoriesReducer,
  // additional reducers could be added here
});

const store = configureStore(
  reducer,
);

export default store;
