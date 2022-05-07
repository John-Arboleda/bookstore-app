const appURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ejMpheHPDy8O252qwNvz';

export const getBooksAPI = async () => {
  const data = await fetch(`${appURL}/books`)
    .then((responce) => responce.json());
  return data;
};

export const addBookAPI = async (book) => {
  const response = await fetch(`${appURL}/books`, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  const data = await response.text();
  return data;
};
