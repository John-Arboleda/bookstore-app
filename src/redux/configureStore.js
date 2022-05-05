import { configureStore, combineReducers } from 'redux';
import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer,
  // additional reducers could be added here
});

const store = configureStore(
  reducer,
);

export default store;
