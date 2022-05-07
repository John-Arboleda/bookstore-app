import addBookAPI from '../../API/book';

const ADD_BOOK = 'bookstore_app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore_app/books/REMOVE_BOOK';
const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const addBookAsync = (book) => async (dispatch) => {
  await addBookAPI(book);
  dispatch(addBook(book));
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
      return state.filter((book) => book.item_id !== action.item_id);
    default:
      return state;
  }
};

export default booksReducer;
