import { addBookAPI, getBooksAPI } from '../../API/book';

const ADD_BOOK = 'bookstore_app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore_app/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore_app/books/GET_BOOKS';
const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const addBookAsync = (book) => async (dispatch) => {
  await addBookAPI(book);
  dispatch(addBook(book));
};

export const getBook = (payload) => ({
  type: GET_BOOKS,
  payload,
});

export const getBooksAsync = () => async (dispatch) => {
  const books = await getBooksAPI();
  const validbooks = [];
  Object.keys(books).forEach((id) => {
    validbooks.push({ item_id: id, title: books[id][0].title, category: books[id][0].category });
  });
  dispatch(getBook(validbooks));
};

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.id);
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
