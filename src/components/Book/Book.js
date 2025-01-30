import React from 'react';
import './Book.css';

const Book = ({ title, rating }) => {
    return (
        <div className="book-item">
            <div className="book-info">
                <span className="book-title">{title}</span>
                <span className="book-rating">{rating}</span>
            </div>
        </div>
    );
};

export default Book;