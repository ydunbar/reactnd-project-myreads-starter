import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Book from './Book';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI';

export default class SearchPage extends Component {
	state = {
		query: '',
		searchedBooks: []
	}

	updateQuery = query => {
		this.setState({
			query: query
		})
		this.updateSearchedBooks(query);
	}

	updateSearchedBooks = query => {
		if (query) {
			BooksAPI.search(query).then((searchedBooks) => {
				if (searchedBooks.error) {
					this.setState({ searchedBooks: [] });
				} else {
					this.setState({ searchedBooks: searchedBooks });
				}
			})
		} else {
			this.setState({ searchedBooks: [] });
		}
	}

	render () {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search">Close</Link>
					<div className="search-books-input-wrapper">

		            	<input 
		            	type="text" 
		            	placeholder="Search by title or author"
		            	value={this.state.query}
		            	onChange={e => this.updateQuery(e.
		            		target.value)}
		            	/>

		            </div>

		        </div>

		        <div className="search-books-results">

		        	<ol className="books-grid">
		        	{
		        		this.state.searchedBooks.map(searchedBook => {
		        			this.props.books.map(book => (
		        				book.id === searchedBook.id ?
		        				searchedBook.shelf = book.shelf :
		        				''
		        				));
		        			return (
		        				<li key={searchedBook.id}>
		        					<Book
				        			book={searchedBook}
				        			changeShelf={this.props.changeShelf}
		        					/>
		        				</li>
		        			);
		        		})
		        	}
		        	</ol>
	            </div>
            </div>
          );
	}
}