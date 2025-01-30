import React from 'react';
import './Book.css';
import BookDetails from '../BookDetails/BookDetails';

const Book = ({ book, isHovered, onMouseEnter, onMouseLeave }) => {
    return (
        <div 
            className="book-item" 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >
            <div className="book-info">
                <p className="book-title">{book.bookTitle}</p>
                <p className="book-rating">{book.rating}</p>
            </div>
            {isHovered && <BookDetails book={book} />}
        </div>
    );
};

export default Book;