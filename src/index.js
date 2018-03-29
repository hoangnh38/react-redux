import React from 'react';
import { render } from 'react-dom';
import BookDetail from './../container/bookdetail';
import BookList from './../container/booklist';
import {createStore} from 'redux';
import myReducer from './../reducers/index';
import {Provider} from 'react-redux';
import './style.css';
const store = createStore(myReducer);

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
 <div className="container">
   <BookDetail />    
   <BookList />  
</div>
);

render(
  <Provider store={store}>
  <App />
  </Provider>
  , document.getElementById('root'));
