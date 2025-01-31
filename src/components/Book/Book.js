import React from 'react';
import './Book.css';
import BookDetails from '../BookDetails/BookDetails';

const Book = ({ book, isHovered, onMouseEnter, onMouseLeave, showIcons, token, handleDelete }) => {
    const handleDeleteClick = () => {
        handleDelete(book.id);
    };

    return (
        <div 
            className="book-item" 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >
            <div className="book-info">
                <div className="book-info-column">
                    <p className="book-title">{book.bookTitle}</p>
                </div>
                <div className="book-info-column">
                    <div className="book-rating-upper"></div>
                    <div className="book-rating-lower">
                        <p className="book-rating">{book.rating}</p>
                    </div>
                </div>
            </div>
            {showIcons && (
                <div className="icons">
                    <button className="icon edit-icon">+</button>
                    <button className="icon delete-icon" onClick={handleDeleteClick}>-</button> 
                </div>
            )}
            {isHovered && <BookDetails book={book} />}
        </div>
    );
};

export default Book;