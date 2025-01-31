import React from 'react';
import './BookList.css';
import Book from '../Book/Book';
import { handleDeleteBook } from '../../eventHandlers';

const BookList = ({ books, setBooks, hoveredBook, setHoveredBook, showIcons, token }) => {
    const handleDelete = (id) => {
        handleDeleteBook(id, token)
            .then(() => {
                setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
            })
            .catch(error => {
                console.error("Error deleting book:", error);
            });
    };

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
                    token={token} // Pass the token to Book
                    handleDelete={handleDelete} // Pass the handleDelete function to Book
                />
            ))}
        </div>
    );
};

export default BookList;