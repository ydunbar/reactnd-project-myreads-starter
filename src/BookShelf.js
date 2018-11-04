import React from 'react'
import Book from "./Book";

//No state, so can be stateless functional component
const BookShelf = ({changeShelf, title, books}) => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
                    {
	                    books.filter(book => book.shelf === book.shelf).map(book => 
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