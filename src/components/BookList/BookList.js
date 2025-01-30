import React from 'react';
import Book from '../Book/Book';
import './BookList.css';

const BookList = ({ books = [] }) => {
    console.log("Books prop in BookList:", books); // Log the books prop

    return (
        <div className="book-list">
            {books.length === 0 ? (
                <div className="no-books-message">No books available</div>
            ) : (
                books.map((book, index) => (
                    <Book key={index} title={book.bookTitle} rating={book.rating} />
                ))
            )}
        </div>
    );
};

export default BookList;