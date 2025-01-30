import React from 'react';
import './BookDetails.css';

const BookDetails = ({ book }) => {
    return (
        <div className="book-details">
            <p>Author: {book.bookAuthor.name}</p>
            <p>Genre: {book.bookGenre.title}</p>
            <p>Notes: {book.notes}</p>
        </div>
    );
};

export default BookDetails;