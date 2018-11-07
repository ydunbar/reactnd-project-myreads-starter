import React from 'react';

//Shows book details
//book-shelf-changer is a menu that passes change event as argument, calls changeShelf, and sets shelf as target
const Book = ({book, changeShelf}) => {
	return (
		<div className="book">
			<div className="book-top">
				<div className="book-cover" 
				style={{ 
				width: 128, 
				height: 193, 
				backgroundImage: `url("${book.imageLinks ? book.imageLinks.thumbnail : ''}"` 
				}}>
				</div>
					<div className="book-shelf-changer">
						<select
						value={book.shelf ? book.shelf : "none"}
						onChange={ e => changeShelf(
							book, e.target.value
						)}>
							<option value="move" disabled>Move to...</option>
		                    <option value="currentlyReading">Currently Reading</option>
		                    <option value="wantToRead">Want to Read</option>
		                    <option value="read">Read</option>
		                    <option value="none">None</option>
	                    </select>
                	</div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
    );
}
export default Book;