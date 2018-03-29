import React, { Component } from "react";
import {connect} from 'react-redux';
class BookDetail extends Component {
  render() {
    const {book} = this.props;
    if (!book) return <h3 className="text-center" > Select book to show detail </h3>
    return (
      <div>
      <h2 className="text-center">Detail Book</h2>
      <p> Title: {this.props.book.title}</p>
      <p> Page : {this.props.book.pages}</p>   
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);