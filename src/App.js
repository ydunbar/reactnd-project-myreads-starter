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
    books: []
  }

  //Called at componentDidMount, gets books from BooksAPI and sets state of book to equal books array from BooksAPI
  updateBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    });
  }

  //Wait until component is inserted to DOM to load books
  componentDidMount() {
    this.updateBooks();
  }

  //Passed to Book's onChange event, and MainPage and SearchPage jsx here
  //Calls BookAPI, sets the book and shelf, and then resets state of books
  changeShelf = (book, shelf) => {

    BooksAPI.update(book, shelf);
    this.updateBooks();
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