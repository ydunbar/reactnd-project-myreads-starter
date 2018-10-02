import React from 'react';
import SearchPage from './SearchPage';
import MainPage from './MainPage';
import Book from './Book';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })

  }
  render() {
    return (
      <div className="app">
      <MainPage
      books={this.state.books}
      />
      </div>
    )
  }
}

export default BooksApp
