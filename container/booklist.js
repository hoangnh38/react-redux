import React, { Component } from "react";
import {connect} from 'react-redux';
import {selectedBook} from './../actions/index';
import { bindActionCreators } from 'redux';
class BookList extends Component {
  showbook= ()=>{
    return this.props.books.map((book,index)=>{
      return <tr className="list-group-item" index={index} key={book.title}
      onClick={()=> this.props.selectedBook(book)}
      > {book.title}</tr>
    });
  }
  render() {
    return (
      <table className="table table-bordered text-center">
        <thead>
          <tr>
            <th> <h4>Book List </h4></th>
          </tr>
        </thead>
        <tbody>
        {this.showbook()}
        </tbody>
      </table>
    );
  }
}
function mapStateToProps(state) {
  //Whatever is returned will show up as props
  //inside of BookList
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch){
 //Whenever selectBook is called, the result should be passed
 //to all of our reducers
 
 
  return bindActionCreators({ selectedBook: selectedBook }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);