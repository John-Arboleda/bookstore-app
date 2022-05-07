const appURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ejMpheHPDy8O252qwNvz';

const addBookAPI = async (book) => {
  const response = await fetch(`${appURL}/books`, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  const data = await response.text();
  return data;
};

export default addBookAPI;
