import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Debounce reference: https://blog.revathskumar.com/2016/02/reactjs-using-debounce-in-react-components.html
import { debounce } from 'throttle-debounce';

import Book from './Book';
import * as BooksAPI from './BooksAPI';

export default class SearchPage extends Component {
	//Initial state
	constructor(props) {
		super(props);
		this.state = {
			query: '',
			searchedBooks: []
		}
		this.callAjax = debounce(500, this.callAjax);
	}

	//Suggestion: DebounceInput in React helps to reduce the number of useless network calls to the server. 
	callAjax() {

	}

	//Updates state of query, then call updateSearchedBooks to update searchBooks state
	updateQuery = query => {
		this.setState({
			query: query
		})
		this.updateSearchedBooks(query);
	}
	//If there is a search query, calls API search and updates searchedBooks state
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
	//Renders search input. Sets value to query state, 
	//onChange takes event to set value as event target and updates query state

	//Suggestion: Display "Books not found" in case of search error. 
	//Hint: You may need to use another state to separate the case from blank query.

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
		            	onChange={e => this.updateQuery(e.target.value)}
		            	/>
		            </div>
		        </div>
		        <div className="search-books-results">

		        {this.state.error && (
		        	<div className="search-error">
		        	There was a problem with your search
		        	</div>
		        	)
		    	}
		    	
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