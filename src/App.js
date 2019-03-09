//Followed tutorial by Maeva: https://www.youtube.com/watch?v=i6L2jLHV9j8&feature=youtu.be
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MainPage from './MainPage';
import SearchPage from './SearchPage';
import './App.css';
import * as BooksAPI from './BooksAPI';


//Main component, container for other components, manages state (class).
export default class BooksApp extends Component {
  //Initial state
  state = {
    books: [],
  }

  //Wait until component is inserted to DOM to load books
  componentDidMount() {
    BooksAPI.getAll().then((response) => {
      this.setState({ books: response })
    });
  }

  //Passed to Book's onChange event, and MainPage and SearchPage jsx here
  //Calls BookAPI, sets the book and shelf, and then resets state of books
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(response => {
      book.shelf = shelf;
      this.setState((state) => ({
        books: state.books.filter((b) => b.id !== book.id).concat([book])
      }))
    });
  }

  render() {
    //Renders two routes/pages
    return (
      <div className="app">

      <Route exact path="/" render={() => (
        <MainPage 
        books={this.state.books} 
        changeShelf={this.changeShelf} />
        )} />

      <Route path="/search" render={() => (
        <SearchPage
        changeShelf={this.changeShelf}
        books={this.state.books}/>
        )} />

      </div>
    )
  }
}