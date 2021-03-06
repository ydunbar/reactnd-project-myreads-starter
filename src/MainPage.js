import React from 'react';
import { Link } from 'react-router-dom';

import BookShelf from './BookShelf';

//Renders Bookshelves, sets books as filtered books of that shelf value 
const MainPage = ({books, changeShelf}) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          
          <BookShelf changeShelf={changeShelf} 
          title="Currently Reading" books={books.filter(books => books.shelf === "currentlyReading")} />

          <BookShelf changeShelf={changeShelf} 
          title="Want to Read" books={books.filter(books => books.shelf === "wantToRead")} />

          <BookShelf changeShelf={changeShelf} 
          title="Read" books={books.filter(books => books.shelf === "read")} />

        </div>
      </div>
        <div className="open-search">
          <Link to="/search">Add a book
          </Link>
        </div>
    </div>
   );
}


export default MainPage;