export function selectedBook(book){
  console.log(book.title);
  return ({
    type: 'SELECTED_BOOK',
    payload: book
  })
}