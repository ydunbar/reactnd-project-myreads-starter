import React from 'react'

import Book from "./Book";

//Takes title as shelf heading, filters book of books by it's shelf, 
//then for each renders li with Book instance
const BookShelf = ({changeShelf, title, books}) => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
                    {
	                    books.filter(book => book.shelf).map(book => 
	                    (
	                    	<li key={book.id}>
		                      	<Book 
		                      	book={book}
		                      	changeShelf={changeShelf} 
		                      	/>
	                      	</li>
	                    ))
                    }
                </ol>
            </div>
        </div>
    );
}

export default BookShelf;