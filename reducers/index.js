import {combineReducers} from 'redux';
import BooksReducer from './books'
import activeBook from './activeBook';
const myReducer = combineReducers({
  books:BooksReducer,
  activeBook: activeBook
});
export default myReducer;