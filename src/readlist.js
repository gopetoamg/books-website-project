let readlist = JSON.parse(localStorage.getItem('readlist')) || [];

const addToReadlist = (bookId) => {
  if (!readlist.includes(bookId)) {
    readlist.push(bookId);
    localStorage.setItem('readlist', JSON.stringify(readlist));
  };
};
const removeFromReadlist = (bookId) => {
  if (readlist.includes(bookId)) {
    readlist = readlist.filter((id) => id !== bookId);
    localStorage.setItem('readlist', JSON.stringify(readlist));
  };
};

export const getReadlist = () => [...readlist];

export const manageLocaleStorage = (bookId) => {
  const allReadlist = getReadlist();
  if (allReadlist.includes(bookId)) {
    removeFromReadlist(bookId);
  } else {
    addToReadlist(bookId);
  };
};