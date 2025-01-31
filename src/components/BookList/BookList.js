import React from 'react';
import './BookList.css';
import Book from '../Book/Book';

const BookList = ({ books, hoveredBook, setHoveredBook, showIcons }) => {
    return (
        <div className="book-list">
            {books.map((book, index) => (
                <Book 
                    key={index} 
                    book={book} 
                    isHovered={hoveredBook === index} 
                    onMouseEnter={() => setHoveredBook(index)} 
                    onMouseLeave={() => setHoveredBook(null)}
                    showIcons={showIcons} // Pass the showIcons prop to Book
                />
            ))}
        </div>
    );
};

export default BookList;